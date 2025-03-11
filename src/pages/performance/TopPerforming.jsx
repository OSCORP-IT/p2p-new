import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SmallText from "../../components/SmallText";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SubHeading from "../../components/SubHeading";
import { getTopPerformingInvestments } from "../../services/investmentDashboard";

function TopPerforming({ user }) {
  const [topPerformingInvestments, setTopPerformingInvestments] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchTopPerformer() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getTopPerformingInvestments(user.userToken);
          setTopPerformingInvestments(data.result.top_performing_investments);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchTopPerformer();
  }, [user.userToken, user.isLoggedIn]);
  return (
    <div className="h-full w-full bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`}>
        Top Performing Investments
      </Heading2>
      <Text color={`textColor3`} padding={`pt-0 pb-4`}>
        Your best investments by return rate
      </Text>
      {isloading && (
        <SkeletonTheme baseColor="#ff6b001a" highlightColor="#fff">
          <div className="w-full my-4">
            <Skeleton count={3} />
          </div>
        </SkeletonTheme>
      )}
      {isError && (
        <div className="flex gap-2 animate-pulse items-center m-auto w-max h-max">
          <BiError className="text-red-900 text-3xl" />
          <SubHeading>Something Wrong!</SubHeading>
        </div>
      )}
      {!isloading &&
        !isError &&
        topPerformingInvestments.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-2 tab:gap-3 pb-3 border-b border-gray-300"
          >
            <div className="flex items-center gap-2">
              <div>
                <Text font={`font-semibold`}>{item.company}</Text>
                <SmallText padding={`py-0`} color={`textColor3`}>
                  {item.field}
                </SmallText>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Text
                font={`font-semibold`}
                color={item.percentage_value > 0 ? "islamic" : "red-600 "}
              >
                {item.percentage_value > 0 ? "+" : ""}
                {item.percentage_value}%
              </Text>
              <SmallText padding={`py-0`} color={`textColor3`}>
                {item.amount}
              </SmallText>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TopPerforming;

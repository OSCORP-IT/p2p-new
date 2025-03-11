import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SmallText from "../../components/SmallText";
import { getRecentInvestments } from "../../services/investmentDashboard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { BiError } from "react-icons/bi";
import SubHeading from "../../components/SubHeading";

function RecentInvestments({ user }) {
  const [recentInvestments, setRecentInvestments] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchInitialLoanData() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getRecentInvestments(user.userToken);
          setRecentInvestments(data.result.recent_investments);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchInitialLoanData();
  }, [user.userToken, user.isLoggedIn]);

  return (
    <div className="h-full w-full bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`}>Recent Investments</Heading2>
      {isloading && (
        <SkeletonTheme baseColor="#ff6b001a" highlightColor="#fff">
          <div className="w-full my-4">
            <Skeleton count={8} />
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
        recentInvestments.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-2 tab:gap-3 mt-3 border-t border-gray-400"
          >
            <div className="flex items-center gap-2">
              <div>
                <Text font={`font-semibold`}>{item.name}</Text>
                <SmallText padding={`py-0`} color={`textColor3`}>
                  {item.date}
                </SmallText>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Text font={`font-semibold`} color={"primary"}>
                ৳{item.amount}
              </Text>
              <SmallText padding={`py-0`} color={`islamic`}>
                {item.status}
              </SmallText>
            </div>
          </div>
        ))}
    </div>
  );
}

export default RecentInvestments;

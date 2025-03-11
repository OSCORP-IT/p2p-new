import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SubHeading from "../../components/SubHeading";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getPerforanceBySectors } from "../../services/investmentDashboard";

function PerformanceBySector({ user }) {
  const [performanceBySectors, setPerformanceBySectors] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchPerformanceSectors() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getPerforanceBySectors(user.userToken);

          setPerformanceBySectors(data.result.performance_by_sectors);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchPerformanceSectors();
  }, [user.userToken, user.isLoggedIn]);

  return (
    <div className="h-auto sm:h-full w-full bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`} padding={`py-0`}>
        Performance by Sector
      </Heading2>
      <Text color={`textColor3`} padding={`pb-4`}>
        Return rates across different investment fields
      </Text>
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
      {!isError &&
        !isloading &&
        performanceBySectors.map((item, index) => (
          <div
            key={index}
            className="pb-4 flex flex-col sm:flex-row sm:items-center gap-2"
          >
            <div className="w-full sm:w-[25%]">
              <SubHeading padding={"py-0"}>{item.name}</SubHeading>
              <Text
                color={`textColor3`}
                font={`font-semibold`}
                padding={`pt-0 pb-2`}
              >
                ৳ {item.amount}
              </Text>
            </div>
            <div className="w-full sm:w-[60%] h-2 bg-gray-200 rounded-md">
              <div
                style={{
                  width: `${
                    item.percentage_value > 0
                      ? (item.percentage_value * 100) / 20
                      : 0
                  }%`,
                }}
                className={`h-full bg-gradient-to-r from-[#1E3A5F] via-[#5A9BD4] to-[#1E3A5F] rounded-[40px]`}
              ></div>
            </div>
            <div className="w-full sm:w-[15%]">
              <Text
                font={`font-semibold`}
                align={`text-left sm:text-center`}
                padding={`pt-1 pb-2`}
                color={item.percentage_value > 0 ? `islamic` : "red-500"}
              >
                {item.percentage_value > 0 ? "+" : ""}
                {item.percentage_value}%
              </Text>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PerformanceBySector;

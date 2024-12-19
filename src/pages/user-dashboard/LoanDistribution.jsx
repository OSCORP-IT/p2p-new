import DounutChart from "./DounutChart";
import Heading2 from "../../components/Heading2";
import SmallText from "../../components/SmallText";
import { useEffect, useState } from "react";
import { getLoanDistribution } from "../../services/dashboard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { BiError } from "react-icons/bi";
import SubHeading from "../../components/SubHeading";
function LoanDistribution({ user }) {
  const [data, setData] = useState(null);
  function transformArray(data) {
    return data.map((item) => ({
      label: item.name,
      value: item.percentage,
    }));
  }
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchClosedLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getLoanDistribution(user.userToken);
          setData(data.result.loan_distribution);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchClosedLoans();
  }, [user.userToken, user.isLoggedIn]);
  return (
    <div className="h-auto sm:h-full w-full sm:w-1/2 tab:w-[40%] bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`}>Loan Distribution</Heading2>
      <div className="flex items-center justify-between pt-2">
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

        {data &&
          (data.length === 0 ? (
            <div className="mt-4 w-full">
              <SubHeading color={`secondary`} align={`text-center`}>
                NO LOANS YET!! Get one.
              </SubHeading>
            </div>
          ) : (
            data.map((item, index) => (
              <div key={index}>
                <div className="flex gap-2 items-start">
                  <div
                    className={`${
                      index == 0
                        ? "bg-primary"
                        : index == 1
                        ? "bg-[#a259fb]"
                        : "bg-accent"
                    } w-5 h-2 rounded-md mt-1`}
                  ></div>
                  <div>
                    <SmallText font={`font-semibold`} padding={`py-0`}>
                      {item.name}
                    </SmallText>
                    <SmallText>৳ {item.amount}</SmallText>
                    <SmallText padding={`pb-1`} color={`textColor3`}>
                      {item.percentage}%
                    </SmallText>
                  </div>
                </div>
              </div>
            ))
          ))}

        {data && data.length > 0 && (
          <div className="">
            <DounutChart data={transformArray(data)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default LoanDistribution;

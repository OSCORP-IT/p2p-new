import { useEffect, useState } from "react";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SubHeading from "../../components/SubHeading";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getInvestmentSectors } from "../../services/investmentDashboard";
const data = [
  { name: "Technology", progress: 15 },
  { name: "Pharmaceutical", progress: 5 },
  { name: "Real State", progress: 50 },
  { name: "Renewable Energy", progress: 20 },
  { name: "Artificial Intelligence", progress: 10 },
];

function InvestmentFields({ user }) {
  const [investmentSectors, setInvestmentSectors] = useState(data);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchInitialLoanData() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getInvestmentSectors(user.userToken);
          setInvestmentSectors(data.result.investment_fields);
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
    <div className="h-auto sm:h-full w-full bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`} padding={`py-0`}>
        Investment Fields
      </Heading2>
      <Text color={`textColor3`} padding={`pb-4`}>
        Distribution of your investments
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
      {!isloading &&
        !isError &&
        investmentSectors.map((item, index) => (
          <div key={index} className="pb-4">
            <div className="flex items-center justify-between">
              <Text font={`font-semibold`} padding={`pt-1 pb-2`}>
                {item.name}
              </Text>
              <Text font={`font-semibold`} padding={`pt-1 pb-2`}>
                {item.percentage_value}%
              </Text>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-md">
              <div
                style={{ width: `${item.percentage_value}%` }}
                className={`h-full bg-gradient-to-r from-[#1E3A5F] via-[#5A9BD4] to-[#1E3A5F] rounded-[40px]`}
              ></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default InvestmentFields;

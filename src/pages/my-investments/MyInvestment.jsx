import { useEffect, useState } from "react";
import Text from "../../components/Text";
import InvestmentDashboardLayout from "../investment-dashboard/InvestmentDashboardLayout";
import Heading2 from "../../components/Heading2";
import SmallText from "../../components/SmallText";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingScreen from "../../ui/LoadingScreen";
import { getInvestmentPortfolio } from "../../services/investmentDashboard";
import SubHeading from "../../components/SubHeading";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function MyInvestment() {
  const [invests, setInvests] = useState([1]);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    } else if (user.userType === "client") {
      navigate("/");
    }
  }, [user.isLoggedIn, user.userType, navigate]);

  useEffect(() => {
    async function fetchInvestmentPortfolio() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getInvestmentPortfolio(user.userToken);
          setInvests(data.result.my_investments);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchInvestmentPortfolio();
  }, [user.userToken, user.isLoggedIn]);

  if (!user.isLoggedIn || user.userType === "client") {
    <LoadingScreen />;
  }
  return (
    <InvestmentDashboardLayout
      active={"investment"}
      pageTitle={`My Investments`}
    >
      <div className="tab:h-full bg-white rounded-md px-4 tab:px-8 py-6 w-full overflow-x-hidden">
        <Heading2 font={`font-bold font-poppins`}>
          Investment Portfolio
        </Heading2>
        <div className="overflow-x-scroll sm:overflow-x-hidden">
          <div className="w-[200%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1">
            <Text
              font={`font-bold`}
              color={`textColor3`}
              align={`text-left w-[20%]`}
            >
              Company
            </Text>
            <Text
              font={`font-bold`}
              color={`textColor3`}
              align={`text-left w-[20%]`}
            >
              Field
            </Text>
            <Text
              font={`font-bold`}
              color={`textColor3`}
              align={`text-left w-[20%]`}
            >
              Amount Invested
            </Text>
            <Text
              font={`font-bold`}
              color={`textColor3`}
              align={`text-left w-[15%]`}
            >
              Current Value
            </Text>
            <Text
              font={`font-bold`}
              color={`textColor3`}
              align={`text-left w-[12%]`}
            >
              Returns
            </Text>
            <Text
              font={`font-bold`}
              color={`textColor3`}
              align={`text-left w-[13%]`}
            >
              Status
            </Text>
          </div>
          {isloading && (
            <SkeletonTheme baseColor="#ff6b001a" highlightColor="#fff">
              <div className="w-full my-4">
                <Skeleton count={10} />
              </div>
            </SkeletonTheme>
          )}
          {isError && (
            <div className="flex gap-2 animate-pulse items-center m-auto w-max h-max">
              <BiError className="text-red-900 text-3xl" />
              <SubHeading>Error Loading Data</SubHeading>
            </div>
          )}
          {invests && invests.length === 0 ? (
            <div className="mt-4">
              <SubHeading color={`secondary`} align={`text-center`}>
                No Active Loans!!
              </SubHeading>
            </div>
          ) : (
            !isError &&
            !isloading &&
            invests.map((item, index) => (
              <div
                key={index}
                className="w-[200%] sm:w-full flex px-2 items-center border-b border-b-textColor3 py-1.5"
              >
                <Text
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-left w-[20%]`}
                >
                  {item.company}
                </Text>
                <Text
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-left w-[20%]`}
                >
                  {item.field}
                </Text>
                <Text
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-left w-[20%]`}
                >
                  {item.amount_invested}
                </Text>
                <Text
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-left w-[15%]`}
                >
                  {item.current_value}
                </Text>
                <Text
                  font={`font-semibold`}
                  color={`islamic`}
                  align={`text-left w-[12%]`}
                >
                  {item.return > 0 ? "+" : ""}
                  {item.return}%
                </Text>
                <SmallText
                  font={`font-semibold`}
                  color={`textColor4`}
                  align={`text-left w-[13%]`}
                >
                  <span className="border border-textColor4 rounded-md p-1">
                    {item.status}
                  </span>
                </SmallText>
              </div>
            ))
          )}
        </div>
      </div>
    </InvestmentDashboardLayout>
  );
}

export default MyInvestment;

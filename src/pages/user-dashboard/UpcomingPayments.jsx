import { useEffect, useState } from "react";
import { getUpcomingPayments } from "../../services/dashboard";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function UpcomingPayments({ user }) {
  const [loans, setLoans] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchClosedLoans() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getUpcomingPayments(user.userToken);
          setLoans(data.result.upcoming_payments);
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
    <div className="h-full w-full sm:w-[50%] bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`}>Upcoming Payments</Heading2>
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
      {loans &&
        (loans.length === 0 ? (
          <div className="mt-4">
            <SubHeading color={`secondary`} align={`text-center`}>
              Hurrah!! No Upcoming payments.
            </SubHeading>
          </div>
        ) : (
          loans.map((item, index) => (
            <div key={index} className="mt-2">
              <div className="flex items-center justify-between">
                <Text font={`font-semibold`}>{item.name} - General</Text>
                <Text font={`font-semibold`}>৳ {item.amount}</Text>
              </div>
              <div className="flex items-start justify-between">
                <SmallText color={`textColor3`}>
                  Due on {item.due_date}
                </SmallText>
                <button className="rounded-[4px] bg-accent py-1 px-4 text-[10px] font-semibold text-white sm:text-xs">
                  Pay Now
                </button>
              </div>
            </div>
          ))
        ))}
    </div>
  );
}

export default UpcomingPayments;

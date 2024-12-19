import Small from "../../components/Small";
import CalendarDots from "../../assets/CalendarDots.svg";
import Heading2 from "../../components/Heading2";
import SmallText from "../../components/SmallText";
import { useEffect, useState } from "react";
import { getNextMeetingData } from "../../services/dashboard";
import Skeleton from "react-loading-skeleton";
import { formatDate } from "../../services/dateFunctions";
function NextMeeting({ user }) {
  const [data, setData] = useState({
    next_meeting_date: "",
    next_meeting_day: "",
  });
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchInitialLoanData() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getNextMeetingData(user.userToken);
          setData(data.result);
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
    <div className="w-full sm:w-1/4 tab:w-1/3 shadow-md bg-white p-[10px] rounded-md relative overflow-hidden">
      <div className=" absolute -top-8 -right-6 w-[100px] h-[100px] bg-primary/20 rounded-full"></div>
      <div className="flex items-center justify-between">
        <Small padding={`py-0`} color={`textColor3`}>
          Next Meeting
        </Small>
        <div className="p-1 bg-primary rounded-[5px]">
          <img src={CalendarDots} alt="CalendarDots" />
        </div>
      </div>
      {isloading ? (
        <Skeleton count={1} />
      ) : isError ? (
        "Error!"
      ) : (
        <Heading2 font={`font-bold font-poppins`}>
          {formatDate(data.next_meeting_date)}
        </Heading2>
      )}
      {isloading ? (
        <Skeleton count={1} />
      ) : (
        <SmallText padding={`pb-1`} color={`textColor3`}>
          {data.next_meeting_day}
        </SmallText>
      )}
    </div>
  );
}

export default NextMeeting;

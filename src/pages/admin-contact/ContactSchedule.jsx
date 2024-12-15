import { useState } from "react";
import Heading2 from "../../components/Heading2";
import PrimaryButton from "../../components/PrimaryButton";
import Text from "../../components/Text";
import Datepicker from "../login/Datepicker";
import { createSupportTicket, scheduleMeeting } from "../../services/meeting";
import { useSelector } from "react-redux";
const initialMeetingData = {
  type: "",
  preferred_date: "",
  preferred_time: "",
  notes: "ehgfbkdfsfvbkjsdffbvjksdfjvb",
};
const initialTicketData = {
  subject: "",
  mesage: "",
};

function ContactSchedule() {
  const [response, setResponse] = useState(initialMeetingData);
  const [ticketData, setTicketData] = useState(initialTicketData);
  const [message, setMessage] = useState(null);
  const user = useSelector((state) => state.auth);
  const showMessage = (type, text) => {
    setMessage({ type: type, text: text });
    setTimeout(() => {
      setMessage(null);
    }, 3000); // Message will disappear after 3 seconds
  };
  async function handleMeeting() {
    try {
      const result = await scheduleMeeting(user.userToken, response);
      result.success &&
        showMessage("success", "Meeting Scedule Application Submitted");
    } catch (err) {
      showMessage("failed", "Sorry! Somthing went Wrong! Try Again");
    }
  }
  async function handleTicket() {
    try {
      const result = await createSupportTicket(user.userToken, ticketData);
      result.success && showMessage("success", "Support Ticket Created");
    } catch (err) {
      showMessage("failed", "Sorry! Somthing went Wrong! Try Again");
    }
  }
  return (
    <>
      {message && (
        <div
          className={`fixed top-4 mx-auto w-[75%] z-50 ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white px-6 py-3 rounded-md`}
        >
          <Text font={`font-semibold`} align={`text-center`}>
            {message.text}
          </Text>
        </div>
      )}
      <div className="flex flex-col sm:flex-row items-start gap-3 w-full sm:h-[400px] tab:h-[410px]">
        <div className="w-full sm:w-1/2 bg-white shadow-md rounded-md p-5 h-full">
          <Heading2 padding={`py-0`} font={`font-semibold font-poppins`}>
            Contact Admin
          </Heading2>
          <Text padding={`pb-1`} color={`textColor3`}>
            Send a message to out admin team
          </Text>
          <div className="mt-3 tab:mt-5">
            <div>
              <Text font={`font-semibold`}>Subject</Text>
              <select
                id="subject"
                value={ticketData.subject}
                onChange={(e) =>
                  setTicketData({ ...ticketData, subject: e.target.value })
                }
                className="w-full rounded-md border p-2 border-textColor3 text-textColor3"
              >
                <option value="">Selet a subject</option>
                <option value="personal-loan">Personal Loan</option>
                <option value="business-loan">Business Loan</option>
                <option value="investment">Investment</option>
              </select>
            </div>
            <div className="mt-3 tab:mt-5">
              <Text font={`font-semibold`}>Message</Text>
              <textarea
                value={ticketData.message}
                onChange={(e) =>
                  setTicketData({ ...ticketData, message: e.target.value })
                }
                id="message"
                rows={4}
                placeholder="Message"
                className="w-full resize-none rounded-md border p-2 border-textColor3 text-textColor3"
              ></textarea>
            </div>
          </div>
          <div className="pt-2" onClick={handleTicket}>
            <PrimaryButton noIcon={true} bg={`accent w-full`}>
              send message
            </PrimaryButton>
          </div>
        </div>
        <div className="w-full sm:w-1/2 bg-white shadow-md p-5 rounded-md h-full">
          <Heading2 padding={`py-0`} font={`font-semibold font-poppins`}>
            Schedule a Meeting
          </Heading2>
          <Text padding={`pb-1`} color={`textColor3`}>
            Book a meeting with an admin representative
          </Text>
          <div className="mt-3 tab:mt-5">
            <Text font={`font-semibold`}>Meeting Type</Text>
            <select
              onChange={(e) =>
                setResponse({ ...response, type: e.target.value })
              }
              id="subject"
              className="w-full rounded-md border p-2 border-textColor3 text-textColor3"
            >
              <option value="">Select a meeting type</option>
              <option value="online">Online Meeting</option>
              <option value="phone-call">A Phone Call</option>
              <option value="in-house">In House Meet</option>
            </select>
          </div>
          <div className="mt-2 tab:mt-3">
            <Text font={`font-semibold`}>Preferred Date</Text>
            <Datepicker
              dateFormat={`dd/MM/YYYY`}
              rounded={true}
              placeholder={`DD/MM/YYYY`}
              date={response.preferred_date}
              setDate={(date) =>
                setResponse({ ...response, preferred_date: date })
              }
            />
          </div>
          <div className="mt-2 tab:mt-2">
            <Text font={`font-semibold`}>Preferred Time</Text>
            <input
              value={response.preferred_time}
              onChange={(e) =>
                setResponse({ ...response, preferred_time: e.target.value })
              }
              type="time"
              className="w-full rounded-md border p-2 border-textColor3 text-textColor3"
            />
          </div>
          <div className="pt-3" onClick={handleMeeting}>
            <PrimaryButton noIcon={true} bg={`accent w-full`}>
              schedule meeting
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSchedule;

import Heading2 from "../../components/Heading2";
import PrimaryButton from "../../components/PrimaryButton";
import Text from "../../components/Text";
import Datepicker from "../login/Datepicker";

function ContactSchedule() {
  return (
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
              id="message"
              rows={4}
              placeholder="Message"
              className="w-full resize-none rounded-md border p-2 border-textColor3 text-textColor3"
            ></textarea>
          </div>
        </div>
        <div className="pt-2">
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
          <Datepicker rounded={true} placeholder={`DD/MM/YYYY`} />
        </div>
        <div className="mt-2 tab:mt-2">
          <Text font={`font-semibold`}>Preferred Time</Text>
          <input
            type="time"
            className="w-full rounded-md border p-2 border-textColor3 text-textColor3"
          />
        </div>
        <div className="pt-3">
          <PrimaryButton noIcon={true} bg={`accent w-full`}>
            schedule meeting
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default ContactSchedule;

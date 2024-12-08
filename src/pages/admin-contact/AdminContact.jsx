import DashboardLayout from "../user-dashboard/DashboardLayout";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SubHeading from "../../components/SubHeading";
import SmallText from "../../components/SmallText";
import PrimaryButton from "../../components/PrimaryButton";
import Ticket from "../../assets/Ticket.svg";
import Datepicker from "../login/Datepicker";
import {
  PiPhoneList,
  PiEnvelopeSimple,
  PiClockCountdown,
} from "react-icons/pi";
import Search from "../../icon/Search";
import { useEffect, useRef, useState } from "react";
import PaperPlaneTilt from "../../icon/PaperPlaneTilt";
const messages = [
  {
    ID: 23553,
    Type: "Message",
    Subject: "Technical issue",
    Description:
      "Lorem ipsum dolor sit amet consectetur. Bibendum enim neque vitae tortor ac viverra.",
    Date: "2024-11-20",
    Status: "Pending",
  },
  {
    ID: 23412,
    Type: "Message",
    Subject: "Loan Question",
    Description:
      "Lorem ipsum dolor sit amet consectetur. Condimentum turpis vitae facilisis in porta a donec. Sed pharetra mattis id mauris feugiat morbi morbi vestibulum curabitur.",
    Date: "2024-10-31",
    Status: "Answered",
  },
  {
    ID: 23525,
    Type: "Meeting",
    Subject: "Disbursement issue",
    Description: "-",
    Date: "2024-09-15",
    Status: "Complete",
  },
];
function AdminContact() {
  const middleRef = useRef(null);
  const [data, setData] = useState(messages);
  const [searchString, setSearchString] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (middleRef.current && !middleRef.current.contains(event.target)) {
        setShowDetails(false); // Call the function passed via props
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowDetails]);
  useEffect(() => {
    if (searchString.trim() === "") {
      setFilteredData(data); // Show all entities if search string is empty
    } else {
      const lowerCaseSearch = searchString.toLowerCase();
      const filtered = data.filter(
        (item) =>
          item.Subject.toLowerCase().includes(lowerCaseSearch) ||
          item.Description.toLowerCase().includes(lowerCaseSearch)
      );
      setFilteredData(filtered);
    }
  }, [searchString, data]);

  return (
    <DashboardLayout active={"admin"}>
      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/15 z-50">
          <div className="flex items-center justify-center h-full">
            <div
              ref={middleRef}
              className="w-full sm:w-4/5 tab:w-2/3 rounded-md bg-white border-2 border-gray-300 p-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <SubHeading padding={`py-0`}>ID No: 23412</SubHeading>
                  <Text padding={`py-0`} color={`textColor4`}>
                    Loan Questions
                  </Text>
                </div>
                <img src={Ticket} alt="ticket image" />
              </div>
              <div className="flex gap-4 w-full items-center mt-4">
                <textarea
                  rows={2}
                  placeholder="Your Comment Here.."
                  name="comment"
                  className="resize-none w-[90%] pt-0.5 px-2 border border-textColor3 rounded-md"
                />
                <div className="flex gap-2 items-center py-2.5 px-4 bg-accent rounded-md">
                  <Text color={`white`} font={`font-semibold`}>
                    Send
                  </Text>
                  <PaperPlaneTilt />
                </div>
              </div>
            </div>
          </div>
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
      <div className="mt-3 bg-white rounded-md shadow-md p-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <Heading2 padding={`py-0`} font={`font-semibold font-poppins`}>
              Recent Communications
            </Heading2>
            <Text padding={`pb-1`} color={`textColor3`}>
              Your latest interactions with admin
            </Text>
          </div>
          <div className="relative mt-2 sm:mt-0">
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={(e) => setSearchString(e.target.value)}
              className="py-2 text-sm sm:text-base rounded-md pl-10 pr-2 text-textColor3 border border-textColor3 bg-gray-200"
            />
            <div className="absolute top-2 left-2">
              <Search />
            </div>
          </div>
        </div>
        <div className="mt-6 hidden tab:block">
          <div className="w-full flex gap-1.5 px-2 items-center border-b border-b-textColor3 py-1">
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-left w-[8%]`}
            >
              ID
            </Text>
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-left w-[10%]`}
            >
              Type
            </Text>
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-left w-[15%]`}
            >
              Subject
            </Text>
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-left w-[30%]`}
            >
              Description
            </Text>
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-left w-[10%]`}
            >
              Date
            </Text>
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-center w-[17%]`}
            >
              Status
            </Text>
            <Text
              font={`font-semibold`}
              color={`textColor3`}
              align={`text-center w-[10%]`}
            >
              Action
            </Text>
          </div>
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="w-[200%] sm:w-full flex gap-1.5 px-2 items-center border-b border-b-textColor3 py-1"
            >
              <Text color={`textColor4`} align={`text-left w-[8%]`}>
                {item.ID}
              </Text>
              <Text color={`textColor4`} align={`text-left w-[10%]`}>
                {item.Type}
              </Text>
              <Text color={`textColor4`} align={`text-left w-[15%]`}>
                {item.Subject}
              </Text>
              <Text color={`textColor4`} align={`text-left w-[30%]`}>
                {item.Description}
              </Text>
              <Text color={`textColor4`} align={`text-left w-[10%]`}>
                {item.Date}
              </Text>
              <SmallText
                color={item.Status === "Pending" ? "accent" : `islamic`}
                align={`text-center w-[17%]`}
              >
                <span
                  className={`p-2 rounded-md ${
                    item.Status === "Pending" ? "bg-accent/10" : `bg-islamic/10`
                  }`}
                >
                  {item.Status}
                </span>
              </SmallText>
              <SmallText
                font={`font-semibold`}
                color={`textColor3`}
                align={`text-center w-[10%]`}
              >
                <span
                  onClick={() => setShowDetails(true)}
                  className="text-textColor4 border-textColor4 rounded-md cursor-pointer font-semibold border py-1 px-4"
                >
                  Details
                </span>
              </SmallText>
            </div>
          ))}
        </div>
        <div className="tab:hidden mt-3">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="py-2 border-b border-textColor3 flex items-center justify-between"
            >
              <div>
                <h2 className="text-base sm:text-lg font-semibold">
                  {item.Type}: {item.Subject}
                </h2>
                <Text color={`textColor3`} padding={`py-0`}>
                  {item.Date}
                </Text>
              </div>
              <div>
                <h2
                  className={`text-base sm:text-lg font-semibold ${
                    item.Status === "Pending" ? "bg-accent" : "bg-islamic"
                  } text-white rounded-md px-3 py-0.5`}
                >
                  {item.Status}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 bg-white rounded-md shadow-md p-5">
        <Heading2 padding={`py-0`} font={`font-semibold font-poppins`}>
          Contact Information
        </Heading2>
        <Text padding={`pb-1`} color={`textColor3`}>
          Reach our to us directly
        </Text>
        <div className="mt-5">
          <div className="flex gap-3 items-center">
            <PiPhoneList className="text-2xl" />
            <SubHeading font={`font-normal`}>
              <span className="font-semibold">Phone:</span> +880 1XXX XXXXXX
            </SubHeading>
          </div>
          <div className="flex gap-3 items-center">
            <PiEnvelopeSimple className="text-2xl" />
            <SubHeading font={`font-normal`}>
              <span className="font-semibold">Email:</span> support@fintech.com
            </SubHeading>
          </div>
          <div className="flex gap-3 items-center">
            <PiClockCountdown className="text-2xl" />
            <SubHeading font={`font-normal`}>
              <span className="font-semibold">Hours:</span> Sunday - Thursday,
              09am - 5pm
            </SubHeading>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminContact;

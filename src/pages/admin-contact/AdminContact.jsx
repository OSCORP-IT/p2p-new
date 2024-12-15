import DashboardLayout from "../user-dashboard/DashboardLayout";
import { useEffect, useState } from "react";
import DetailModal from "./DetailModal";
import ContactSchedule from "./ContactSchedule";
import RecentCommunication from "./RecentCommunication";
import ContactOptions from "./ContactOptions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    }
  }, [user.isLoggedIn, navigate]);
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(messages);
  const [searchString, setSearchString] = useState("");
  const [filteredData, setFilteredData] = useState(data);

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
      {showDetails && <DetailModal setShowDetails={setShowDetails} />}
      <ContactSchedule />
      <RecentCommunication
        setSearchString={setSearchString}
        filteredData={filteredData}
        setShowDetails={setShowDetails}
      />
      <ContactOptions />
    </DashboardLayout>
  );
}

export default AdminContact;

import InvestmentDashboardLayout from "../investment-dashboard/InvestmentDashboardLayout";
import { useEffect, useState } from "react";
import DetailModal from "./DetailModal";
import ContactSchedule from "./ContactSchedule";
import RecentCommunication from "./RecentCommunication";
import ContactOptions from "./ContactOptions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecentCommunicationInvestment } from "../../services/meeting";
import LoadingScreen from "../../ui/LoadingScreen";

function InvestmentAdminContact() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    } else if (user.userType === "client") {
      navigate("/");
    }
  }, [user.isLoggedIn, user.userType, navigate]);
  if (!user.isLoggedIn || user.userType === "client") {
    <LoadingScreen />;
  }
  const [showDetails, setShowDetails] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [data, setData] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchRecentCommunication() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getRecentCommunicationInvestment(user.userToken);
          setData(data.result.recent_communications);
          setFilteredData(data.result.recent_communications);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
        }
      }
    }
    fetchRecentCommunication();
  }, [user.isLoggedIn, user.userToken]);

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
    <InvestmentDashboardLayout active={"admin"} pageTitle={"Admin Contact"}>
      {showDetails && (
        <DetailModal
          setShowDetails={setShowDetails}
          item={currentItem}
          userToken={user.userToken}
        />
      )}
      <ContactSchedule
        setFilteredData={setFilteredData}
        filteredData={filteredData}
      />
      <RecentCommunication
        setCurrentItem={setCurrentItem}
        setSearchString={setSearchString}
        filteredData={filteredData}
        setShowDetails={setShowDetails}
        isError={isError}
        isloading={isloading}
      />
      <ContactOptions />
    </InvestmentDashboardLayout>
  );
}

export default InvestmentAdminContact;

// import { BiError } from "react-icons/bi";
import Heading2 from "../../components/Heading2";
// import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import Search from "../../icon/Search";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function RecentCommunication({
  filteredData,
  setShowDetails,
  setSearchString,
  isError,
  isloading,
  setCurrentItem,
}) {
  function handleDetail(item) {
    setCurrentItem(item);
    setShowDetails(true);
  }
  return (
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

      <div className="mt-3">
        {filteredData &&
          (filteredData.length === 0 ? (
            <div className="mt-4">
              <SubHeading color={`secondary`} align={`text-center`}>
                Mo Messages or Meetings!!
              </SubHeading>
            </div>
          ) : (
            filteredData.map((item, index) => (
              <div
                onClick={() => handleDetail(item)}
                key={index}
                className="cursor-pointer rounded-md  hover:bg-accent/10 p-2 border-b border-textColor3 flex items-center justify-between"
              >
                <div>
                  <h2 className="text-base sm:text-lg font-semibold">
                    {item.type}: {item.subject}
                  </h2>
                  <Text color={`textColor3`} padding={`py-0`}>
                    {item.date}
                  </Text>
                </div>
                <div>
                  <h2
                    className={`text-base sm:text-lg font-semibold ${
                      item.status === "Pending" ? "bg-accent" : "bg-islamic"
                    } text-white rounded-md px-3 py-0.5`}
                  >
                    {item.status}
                  </h2>
                </div>
              </div>
            ))
          ))}
      </div>
    </div>
  );
}

export default RecentCommunication;

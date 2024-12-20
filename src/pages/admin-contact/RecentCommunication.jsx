import { BiError } from "react-icons/bi";
import Heading2 from "../../components/Heading2";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import Search from "../../icon/Search";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
            <SubHeading>Error Loading Data</SubHeading>
          </div>
        )}
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
                key={index}
                className="w-[200%] sm:w-full flex gap-1.5 px-2 items-center border-b border-b-textColor3 py-1"
              >
                <Text color={`textColor4`} align={`text-left w-[8%]`}>
                  {item.id}
                </Text>
                <Text color={`textColor4`} align={`text-left w-[10%]`}>
                  {item.type}
                </Text>
                <Text color={`textColor4`} align={`text-left w-[15%]`}>
                  {item.subject}
                </Text>
                <Text color={`textColor4`} align={`text-left w-[30%]`}>
                  {item.description}
                </Text>
                <Text color={`textColor4`} align={`text-left w-[10%]`}>
                  {item.date}
                </Text>
                <SmallText
                  color={item.status === "Pending" ? "accent" : `islamic`}
                  align={`text-center w-[17%]`}
                >
                  <span
                    className={`p-2 rounded-md ${
                      item.status === "Pending"
                        ? "bg-accent/10"
                        : `bg-islamic/10`
                    }`}
                  >
                    {item.status}
                  </span>
                </SmallText>
                <SmallText
                  font={`font-semibold`}
                  color={`textColor3`}
                  align={`text-center w-[10%]`}
                >
                  <span
                    onClick={handleDetail(item)}
                    className="text-textColor4 border-textColor4 rounded-md cursor-pointer font-semibold border py-1 px-4"
                  >
                    Details
                  </span>
                </SmallText>
              </div>
            ))
          ))}
      </div>
      <div className="tab:hidden mt-3">
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
                onClick={() => setShowDetails(true)}
                key={index}
                className="py-2 border-b border-textColor3 flex items-center justify-between"
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

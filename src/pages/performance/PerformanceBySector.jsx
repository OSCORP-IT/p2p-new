import { useState } from "react";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SubHeading from "../../components/SubHeading";
import { BiError } from "react-icons/bi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const data = [
  { name: "Technology", increase: 15, amount: 185000, progress: 15 },
  { name: "Pharmaceutical", increase: 5, amount: 15000, progress: 5 },
  { name: "Real State", increase: 5, amount: 85000, progress: 50 },
  { name: "Renewable Energy", increase: 7, amount: 18500, progress: 20 },
  {
    name: "Artificial Intelligence",
    increase: 10,
    amount: 18000,
    progress: 10,
  },
];

function PerformanceBySector() {
  const [repayData, setRepayData] = useState(data);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="h-auto sm:h-full w-full bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`} padding={`py-0`}>
        Performance by Sector
      </Heading2>
      <Text color={`textColor3`} padding={`pb-4`}>
        Return rates across different investment fields
      </Text>
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
      {repayData.map((item, index) => (
        <div
          key={index}
          className="pb-4 flex flex-col sm:flex-row sm:items-center gap-2"
        >
          <div className="w-full sm:w-[25%]">
            <SubHeading padding={"py-0"}>{item.name}</SubHeading>
            <Text
              color={`textColor3`}
              font={`font-semibold`}
              padding={`pt-0 pb-2`}
            >
              ৳ {item.amount}
            </Text>
          </div>
          <div className="w-full sm:w-[60%] h-2 bg-gray-200 rounded-md">
            <div
              style={{ width: `${item.progress}%` }}
              className={`h-full bg-gradient-to-r from-[#1E3A5F] via-[#5A9BD4] to-[#1E3A5F] rounded-[40px]`}
            ></div>
          </div>
          <div className="w-full sm:w-[15%]">
            <Text
              font={`font-semibold`}
              align={`text-left sm:text-center`}
              padding={`pt-1 pb-2`}
              color={item.increase > 0 ? `islamic` : "red-500"}
            >
              {item.increase > 0 ? "+" : "-"}
              {item.increase}%
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PerformanceBySector;

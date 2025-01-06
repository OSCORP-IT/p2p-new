import { useState } from "react";
import PaperPlane from "../../assets/PaperPlane.svg";
import ArrRight from "../../assets/ArrRight.svg";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SmallText from "../../components/SmallText";
// import { BiError } from "react-icons/bi";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import SubHeading from "../../components/SubHeading";
const companyData = [
  {
    name: "TechCorp Inc.",
    increase: 15,
    amount: "5,00,000",
    category: "Technology",
  },
  {
    name: "PharmaCare Ltd.",
    increase: 5,
    amount: "1,00,000",
    category: "Pharmacutical",
  },
  {
    name: "RealEstate Holdings",
    increase: 5,
    amount: "50,00,000",
    category: "Real State",
  },
  {
    name: "Green Energy Solutions",
    increase: 7,
    amount: "8,00,000",
    category: "Renewable Energy",
  },
  {
    name: "AI Innovations Ltd.",
    increase: 10,
    amount: "2,00,000",
    category: "Artificial Intelligence",
  },
];

function TopPerforming({ user }) {
  const [transactions, setTransactions] = useState(companyData);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  0;
  return (
    <div className="h-full w-full bg-white  rounded-md shadow-md px-5 py-4">
      <Heading2 font={`font-bold font-poppins`}>
        Top Performing Investments
      </Heading2>
      <Text color={`textColor3`} padding={`pt-0 pb-4`}>
        Your best investments by return rate
      </Text>
      {/* {isloading && (
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
      )} */}
      {transactions.map((item, index) => (
        <div
          key={index}
          className="flex items-start justify-between gap-2 tab:gap-3 pb-3 border-b border-gray-300"
        >
          <div className="flex items-center gap-2">
            <div>
              <Text font={`font-semibold`}>
                {item.name}
                {item.type ? `-${item.type}` : ""}
              </Text>
              <SmallText padding={`py-0`} color={`textColor3`}>
                {item.category}
              </SmallText>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <Text font={`font-semibold`} color={"islamic"}>
              {item.increase > 0 ? "+" : "-"}
              {item.increase}%
            </Text>
            <SmallText padding={`py-0`} color={`textColor3`}>
              {item.amount}
            </SmallText>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopPerforming;

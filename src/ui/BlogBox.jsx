import { LuChevronRightSquare } from "react-icons/lu";
import SubHeading from "../components/SubHeading";
import Text from "../components/Text";

function BlogBox({ img, heading, cat }) {
  return (
    <div className="shadow-xl w-full sm:w-1/3 h-full flex flex-col items-center justify-between rounded-md">
      <img
        src={img}
        alt="blog 1"
        className="w-full h-[120px] sm:h-1/2 object-cover rounded-md"
      />
      {cat !== "blog" && (
        <div className="w-3/5 rounded-md bg-accent text-center py-1.5 -mt-4 text-white text-sm sm:text-15[px] tab:text-base font-semibold capitalize">
          news
        </div>
      )}
      {cat === "blog" && (
        <div className="w-3/5 rounded-md bg-[#a259fb] text-center py-1.5 -mt-4 text-white text-sm sm:text-15[px] tab:text-base font-semibold capitalize">
          blog
        </div>
      )}
      <div className="w-full px-2 pt-2 pb-4 h-[40%]">
        <SubHeading>{heading}</SubHeading>
      </div>
      <div className="flex justify-between items-center w-full px-2 pt-4">
        <Text>September 19, 2024</Text>
        <LuChevronRightSquare className="text-base cursor-pointer" />
      </div>
    </div>
  );
}

export default BlogBox;

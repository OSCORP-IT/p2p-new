import AccentButton from "../../components/AccentButton";
import Heading2 from "../../components/Heading2";
import SubHeading from "../../components/SubHeading";
function FullImageBox({
  imageLeft,
  imageRight,
  children,
  heading,
  text,
  rowReverese,
}) {
  return (
    <div
      className={`w-full flex ${
        rowReverese ? " flex-col-reverse" : "flex-col"
      } sm:flex-row items-center justify-between gap-2 sm:gap-4 tab:gap-0 py-5 tab:pt-6 tab:pb-10`}
    >
      {imageLeft && (
        <>
          <div className="w-[90%] sm:w-[48%] tab:w-[45%] rounded-md  sm:rounded-r-[20px] tab:rounded-r-[40px]">
            {children}
          </div>
          <div className="w-[95%] m-auto sm:m-0 sm:w-[45%]">
            <div className="w-full sm:w-11/12 tab:w-10/12 laptop:w-9/12">
              <Heading2
                align={`text-center sm:text-left`}
                padding={`pb-3 sm:pb-4 tab:pb-6`}
              >
                {heading}
              </Heading2>
              <SubHeading
                align={`text-center sm:text-left`}
                font={`font normal`}
                padding={`pb-3 sm:pb-4 tab:pb-6`}
              >
                {text}
              </SubHeading>
              <div className="w-max m-auto sm:m-0 pt-2 tab:pt-4">
                <AccentButton noIcon={true}>check your rate</AccentButton>
              </div>
            </div>
          </div>
        </>
      )}
      {imageRight && (
        <>
          <div className="w-[95%] m-auto sm:m-0 sm:w-[45%] flex justify-end">
            <div className="w-full sm:w-11/12 tab:w-10/12 laptop:w-9/12">
              <Heading2
                align={`text-center sm:text-left`}
                padding={`pb-3 sm:pb-4 tab:pb-6`}
              >
                {heading}
              </Heading2>
              <SubHeading
                align={`text-center sm:text-left`}
                font={`font normal`}
                padding={`pb-3 sm:pb-4 tab:pb-6`}
              >
                {text}
              </SubHeading>
              <div className="w-max m-auto sm:m-0 pt-2 tab:pt-4">
                <AccentButton noIcon={true}>check your rate</AccentButton>
              </div>
            </div>
          </div>
          <div className="w-[90%] sm:w-[48%] tab:w-[45%]  rounded-md rounded-l-none sm:rounded-l-[20px] tab:rounded-l-[40px]">
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default FullImageBox;

import AccentButton from "../../components/AccentButton";
import Heading2 from "../../components/Heading2";
import SubHeading from "../../components/SubHeading";
function FullImageBox({ imageLeft, imageRight, children, heading, text }) {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 tab:gap-0 py-5 tab:pt-6 tab:pb-10">
      {imageLeft && (
        <>
          <div className="w-[90%] sm:w-[48%] tab:w-[40%] rounded-md  sm:rounded-r-[20px] tab:rounded-r-[40px]">
            {children}
          </div>
          <div className="w-[90%] sm:w-1/2">
            <div className="w-11/12 tab:w-10/12">
              <Heading2 padding={`pb-3 sm:pb-4 tab:pb-6`}>{heading}</Heading2>
              <SubHeading
                font={`font normal`}
                padding={`pb-3 sm:pb-4 tab:pb-6`}
              >
                {text}
              </SubHeading>
              <AccentButton noIcon={true}>check your rate</AccentButton>
            </div>
          </div>
        </>
      )}
      {imageRight && (
        <>
          <div className="w-[90%] sm:w-1/2 flex justify-end">
            <div className="w-11/12 tab:w-10/12">
              <Heading2 padding={`pb-3 sm:pb-4 tab:pb-6`}>{heading}</Heading2>
              <SubHeading
                font={`font normal`}
                padding={`pb-3 sm:pb-4 tab:pb-6`}
              >
                {text}
              </SubHeading>
              <AccentButton noIcon={true}>check your rate</AccentButton>
            </div>
          </div>
          <div className="w-[90%] sm:w-[48%] tab:w-[40%]  rounded-md rounded-l-none sm:rounded-l-[20px] tab:rounded-l-[40px]">
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default FullImageBox;

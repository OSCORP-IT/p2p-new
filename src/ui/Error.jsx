import Header from "./Header";
import Footer from "./Footer";
import Heading1 from "../components/Heading1";
import { BiError } from "react-icons/bi";
import SubHeading from "../components/SubHeading";

function Error() {
  return (
    <div className="h-screen">
      <Header />
      <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto leading-none py-8">
        <div className="w-max m-auto">
          <h1 className="text-[70px] text-center font-bold font-poppins text-secondary/40 z-10">
            Error
          </h1>
          <h1 className="text-[70px] text-center font-bold font-poppins text-accent  -mt-8">
            404
          </h1>
        </div>
        <div className="py-4 flex items-center gap-4 justify-center">
          <BiError className="text-4xl text-accent font-bold" />
          <Heading1 align={`text-center`} font={`font-bold font-poppins`}>
            Oops! Page Not Found.
          </Heading1>
        </div>
        <div className="w-3/4 m-auto">
          <SubHeading align={`text-center`} color={`secondary`}>
            The page you are looking for is not available or has been moved. Try
            a different page.
          </SubHeading>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error;

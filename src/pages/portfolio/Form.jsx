import Logo from "../../assets/BlackLogo.png";
import FormContainer from "./FormContainer";
import { useNavigate, useParams } from "react-router-dom";

function Form() {
  const { portfolio_id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[70px] bg-white shadow-md shadow-gray-300 py-2">
        <img
          src={Logo}
          alt="logo"
          className="w-max m-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="w-full bg-gray-100 flex items-start justify-normal">
        <div className="w-full pr-3 sm:pr-0 sm:px-4 tab:w-5/6 tab:m-auto tab:x-0 min-h-screen sm:p-5">
          <FormContainer portfolio_id={portfolio_id} />
        </div>
      </div>
    </>
  );
}

export default Form;

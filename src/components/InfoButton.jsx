import { TbHandClick } from "react-icons/tb";

function InfoButton({ children }) {
  return (
    <button className=" flex gap-2 items-center py-2 px-10 text-white bg-accent rounded-md text-sm sm:text-base font-semibold">
      <p>{children}</p>
      <TbHandClick className="font-semibold text-lg" />
    </button>
  );
}

export default InfoButton;

import SubHeading from "../../components/SubHeading";

function DetailListFormat({ name, value, currencySign }) {
  return (
    <div className="flex items-center justify-between">
      <h2
        className={`text-textColor3 text-[12px] sm:text-base tab:text-lg font-normal`}
      >
        {name}:
      </h2>
      <SubHeading color={`titleColor`}>
        {currencySign ? "৳ " : ""}
        {value}
      </SubHeading>
    </div>
  );
}

export default DetailListFormat;

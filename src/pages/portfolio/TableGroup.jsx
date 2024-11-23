import Text from "../../components/Text";

function TableGroup({ item, index, data, setData }) {
  const print = data.response_answers[index].answer_text[0];
  console.log(print);
  const dataNumber = item.options.length;
  return (
    <div className="border border-gray-300 p-1 rounded-md w-full">
      <div className="flex items-center gap-2 text-center text-lg font-medium w-full">
        {item.options.map((option, index) => (
          <div
            key={index}
            className={`rounded-md py-1.5 bg-gray-200 w-1/${dataNumber}`}
          >
            <Text align={"text-center"} font={`font-bold`}>
              {option.label}
            </Text>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-center text-base mt-1 w-full">
        {item.options.map((option, index) => (
          <div key={index} className={`w-1/${dataNumber}`}>
            {option.field_type === "dropdown" && (
              <select
                className={`w-full rounded-md px-4 py-1 border border-gray-300`}
              >
                <option value="">--Select--</option>
                {option.options.map((field) => (
                  <option value={field} key={field}>
                    {field}
                  </option>
                ))}
              </select>
            )}
            {(option.field_type === "text" ||
              option.field_type === "number") && (
              <input
                type={option.field_type}
                name={option.field_name}
                id={option.field_name}
                placeholder={option.label}
                className={`text-base text-center font-normal rounded-lg w-full border border-gray-300 py-1`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="py-2">
        <h2 className="text-base font-medium py-1 rounded-md cursor-pointer bg-accent text-white text-center">
          Add {item.label} +
        </h2>
      </div>
    </div>
  );
}

export default TableGroup;

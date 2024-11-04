import Text from "../../components/Text";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InputMaker({ item }) {
  const result = { field_id: item.field_id, answer_text: "" };
  console.log(item.field_type);
  if (
    item.field_type === "table_group" ||
    item.field_type === "section_group"
  ) {
    // Initialize an array of empty objects based on options within the group
    result.answer_text = [
      item.options.reduce((acc, option) => {
        acc[option.field_name] = ""; // Initialize each option field to an empty string
        return acc;
      }, {}),
    ];
  } else if (item.field_type === "number") {
    result.answer_text = 0;
  }
  console.log(result);

  return (
    <>
      {item.field_type !== "section_group" && (
        <Text font={`font-semibold`}>
          {item.label}
          {item.is_required && <span className="text-red-600">*</span>}
        </Text>
      )}
      {item.field_type === "text" && (
        <input
          type="text"
          name={item.field_name}
          value={result.answer_text}
          onChange={(e) => (result.answer_text = e.target.value)}
          placeholder={item.placeholder}
          className="py-2 px-2 border border-gray-300 rounded-md w-full"
        />
      )}
      {item.field_type === "date" && (
        <DatePicker
          showIcon
          dateFormat={"DD/MM/YYYY"}
          name={item.field_name}
          className="w-full py-2 px-2 border border-gray-300 rounded-md"
        />
      )}
      {item.field_type === "radio" && (
        <div className="flex w-full items-center justify-between px-6">
          {item.options.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="radio"
                id={option}
                value={option}
                name={item.field_name}
                className=" cursor-pointer border checked:border-accent"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
      {item.field_type === "number" && (
        <input
          type="number"
          name={item.field_name}
          placeholder={"Number of Children"}
          className="py-2 px-2 border border-gray-300 rounded-md w-full"
        />
      )}
      {item.field_type === "dropdown" && (
        <select
          name={item.field_name}
          className="py-2 px-2 border border-gray-300 rounded-md w-full"
        >
          <option value=""> Select one</option>
          {item.options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      )}
      {item.field_type === "paragraph" && (
        <textarea
          name={item.field_name}
          rows="4"
          cols="50"
          placeholder="Write your notes..."
          className="py-2 px-2 border border-gray-300 rounded-md w-full"
        ></textarea>
      )}
      {item.field_type === "checkbox" && (
        <div className="flex w-full items-center justify-between px-6">
          {item.options.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={item.field_name}
                id={option}
                value={option}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
      {item.field_type === "table_group" && (
        <div className="border border-gray-300 p-1 rounded-md">
          <div className="flex items-center gap-2 text-center text-lg font-medium">
            {item.options.map((option, index) => (
              <div
                key={index}
                className="rounded-md py-1.5 bg-gray-200 flex-grow"
              >
                <Text align={"text-center"} font={`font-bold`}>
                  {option.label}
                </Text>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-center text-base mt-1">
            {item.options.map((option) => (
              <>
                {option.field_type === "dropdown" && (
                  <div className="rounded-md py-1 w-1/3">
                    <select className="w-full rounded-md px-4 py-1 border border-gray-300">
                      <option value="">--Select--</option>
                      {option.options.map((field) => (
                        <option value={field} key={field}>
                          {field}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {option.field_type === "text" && (
                  <div className="rounded-md py-1 w-1/3">
                    <input
                      type="text"
                      name={option.field_name}
                      id={option.field_name}
                      placeholder={option.label}
                      className="text-base text-center font-normal rounded-lg w-full border border-gray-300 py-1"
                    />
                  </div>
                )}
                {option.field_type === "number" && (
                  <div className="rounded-md py-1 w-1/3">
                    <input
                      type="number"
                      name={option.field_name}
                      id={option.field_name}
                      placeholder={option.label}
                      className="text-base text-center font-normal rounded-lg w-full border border-gray-300 py-1"
                    />
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="py-2">
            <h2 className="text-base font-medium py-1 rounded-md cursor-pointer bg-accent text-white text-center">
              Add {item.label} +
            </h2>
          </div>
        </div>
      )}
      {item.field_type === "section_group" && (
        <div className="border border-gray-200 px-4 rounded-md pb-2 mt-4">
          <div className="bg-white -mt-4 w-max">
            <Text font={`font-semibold`}>
              {item.label}
              {item.is_required && <span className="text-red-600">*</span>}
            </Text>
          </div>
          {item.options.map((option, index) => (
            <InputMaker item={option} key={index} />
          ))}
          <div className="py-2">
            <h2 className="text-base font-medium py-1 rounded-md cursor-pointer bg-accent text-white text-center">
              Add {item.label} +
            </h2>
          </div>
        </div>
      )}
      {item.field_type === "file" && (
        <input
          type="file"
          name={item.field_name}
          // placeholder={item.placeholder}
          className="py-2 px-2 border border-gray-300 rounded-md w-full"
        />
      )}
    </>
  );
}

export default InputMaker;

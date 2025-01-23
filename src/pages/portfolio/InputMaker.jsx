import Text from "../../components/Text";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SectionGroup from "./SectionGroup";
import TableGroup from "./TableGroup";
import { uploadFileToServer } from "../../services/FileUpload";

function InputMaker({ item, index, data, setData }) {
  const handleInputChange = (value) => {
    const updatedAnswers = [...data.response_answers];

    updatedAnswers[index].answer_text = value;
    setData((prev) => ({ ...prev, response_answers: updatedAnswers }));
  };
  const handleCheckboxChange = (event) => {
    const updatedAnswers = [...data.response_answers];
    const { value, checked } = event.target;
    let newArray = updatedAnswers[index].answer_text;

    if (checked) {
      newArray = [...newArray, value]; // Add value if checked
    } else {
      newArray = newArray.filter((item) => item !== value); // Remove value if unchecked
    }
    updatedAnswers[index].answer_text = newArray;
    setData((prev) => ({ ...prev, response_answers: updatedAnswers }));
  };
  async function handleUpload(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      try {
        const result = await uploadFileToServer(file);
        const updatedAnswers = [...data.response_answers];
        updatedAnswers[index].answer_text = result.file_path;
        setData((prev) => ({ ...prev, response_answers: updatedAnswers }));
      } catch (error) {
        window.alert("Failed to upload file.");
      }
    }
  }

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
          value={data.response_answers[index].answer_text || ""}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={item.label}
          required={item.is_required}
          className="py-2 px-2 border border-gray-300 rounded-md w-full"
        />
      )}
      {item.field_type === "date" && (
        <DatePicker
          showIcon
          dateFormat={"DD/MM/YYYY"}
          name={item.field_name}
          required={item.is_required}
          selected={data.response_answers[index].answer_text || ""}
          onChange={(date) => handleInputChange(date)}
          className="w-full py-2 px-2 border border-gray-300 rounded-md"
        />
      )}
      {item.field_type === "radio" && (
        <div className="flex w-full items-center gap-10 px-6">
          {item.options.map((option, ind) => (
            <div key={ind} className="flex items-center gap-2">
              <input
                type="radio"
                id={option}
                value={option}
                checked={data.response_answers[index].answer_text === option}
                onChange={() => handleInputChange(option)}
                name={item.field_name}
                required={item.is_required}
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
          placeholder={item.placeholder}
          required={item.is_required}
          value={data.response_answers[index].answer_text || ""}
          onChange={(e) => handleInputChange(e.target.value)}
          className="py-2 px-2 border border-gray-300 rounded-md w-full"
        />
      )}
      {item.field_type === "dropdown" && (
        <select
          name={item.field_name}
          required={item.is_required}
          value={data.response_answers[index].answer_text || ""}
          onChange={(e) => handleInputChange(e.target.value)}
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
          required={item.is_required}
          placeholder={item.placeholder}
          value={data.response_answers[index].answer_text || ""}
          onChange={(e) => handleInputChange(e.target.value)}
          className="py-2 px-2 border border-gray-300 rounded-md w-full"
        ></textarea>
      )}
      {item.field_type === "checkbox" && (
        <div className="flex flex-wrap sm:flex-nowrap w-full items-center justify-normal gap-2 sm:gap-0 sm:justify-between px-6">
          {item.options.map((option, ind) => (
            <div key={ind} className="flex items-center gap-2">
              <input
                type="checkbox"
                required={item.is_required}
                name={item.field_name}
                id={option}
                checked={data.response_answers[index].answer_text.includes(
                  option
                )}
                onChange={handleCheckboxChange}
                value={option}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
      {item.field_type === "table_group" && (
        <TableGroup item={item} index={index} data={data} setData={setData} />
      )}
      {item.field_type === "section_group" && (
        <SectionGroup
          inputItem={item}
          dataIndex={index}
          data={data}
          setData={setData}
        />
      )}
      {item.field_type === "file" && (
        <div className="flex items-center gap-2">
          <input
            type="file"
            required={item.is_required}
            accept=".jpeg,.jpg,.pdf,.png,.svg"
            // placeholder={item.placeholder}
            onChange={handleUpload}
            className="py-2 px-2 border border-gray-300 rounded-md w-1/2"
          />
          {data.response_answers[index].answer_text !== "" &&
            !data.response_answers[index].answer_text.includes(".pdf") && (
              <img
                src={data.response_answers[index].answer_text}
                alt="uploaded photo"
                className="w-1/2 h-20 m-auto"
              />
            )}
          {data.response_answers[index].answer_text !== "" &&
            data.response_answers[index].answer_text.includes(".pdf") && (
              <iframe
                src={data.response_answers[index].answer_text}
                width="50%"
                height="80px"
                title="PDF Viewer"
                className=""
              ></iframe>
            )}
        </div>
      )}
    </>
  );
}

export default InputMaker;

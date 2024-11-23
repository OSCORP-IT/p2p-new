import Text from "../../components/Text";
import Datepicker from "../login/Datepicker";

// function SectionGroup({ inputItem, dataIndex, data, setData }) {
//   const print = data;
//   console.log(print);
//   return (
//     <div className="border border-gray-200 px-4 rounded-md pb-2 mt-4">
//       <div className="bg-white -mt-4 w-max">
//         <Text font={`font-semibold`}>
//           {inputItem.label}
//           {inputItem.is_required && <span className="text-red-600">*</span>}
//         </Text>
//       </div>
//       {inputItem.options.map((option, index) => (
//         <div key={index}>
//           <Text font={`font-semibold`}>
//             {option.label}
//             {option.is_required && <span className="text-red-600">*</span>}
//           </Text>
//           {(option.field_type === "text" || option.field_type === "number") && (
//             <input
//               type={option.field_type}
//               name={option.field_name}
//               value={"x"}
//               //   onChange={"x"}
//               placeholder={option.label}
//               className="py-2 px-2 border border-gray-300 rounded-md w-full"
//             />
//           )}
//           {option.field_type === "date" && (
//             <Datepicker
//               dateFormat={"DD/MM/YYYY"}
//               name={option.field_name}
//               selected={""}
//               //   onChange={}
//               className="w-full py-2 px-2 border border-gray-300 rounded-md"
//             />
//           )}
//           {option.field_type === "radio" && (
//             <div className="flex w-full options-center justify-between px-6">
//               {option.options.map((enitity, index) => (
//                 <div key={index} className="flex options-center gap-2">
//                   <input
//                     type="radio"
//                     id={enitity}
//                     value={enitity}
//                     checked={
//                       data.response_answers[index].answer_text === enitity
//                     }
//                     // onChange={(e) => handleInputChange(e.target.value)}
//                     name={option.field_name}
//                     className=" cursor-pointer border checked:border-accent"
//                   />
//                   <label htmlFor={enitity}>{enitity}</label>
//                 </div>
//               ))}
//             </div>
//           )}
//           {option.field_type === "dropdown" && (
//             <select
//               name={option.field_name}
//               value={""}
//               //   onChange={(e) => handleInputChange(e.target.value)}
//               className="py-2 px-2 border border-gray-300 rounded-md w-full"
//             >
//               <option value=""> Select one</option>
//               {option.options.map((select, index) => (
//                 <option value={select} key={index}>
//                   {select}
//                 </option>
//               ))}
//             </select>
//           )}
//           {option.field_type === "paragraph" && (
//             <textarea
//               name={option.field_name}
//               rows="4"
//               cols="50"
//               placeholder={option.placeholder}
//               value={""}
//               //   onChange={(e) => handleInputChange(e.target.value)}
//               className="py-2 px-2 border border-gray-300 rounded-md w-full"
//             ></textarea>
//           )}
//           {option.field_type === "checkbox" && (
//             <div className="flex w-full inputItems-center justify-between px-6">
//               {option.options.map((boxes, index) => (
//                 <div key={index} className="flex inputItems-center gap-2">
//                   <input
//                     type="checkbox"
//                     name={option.field_name}
//                     id={boxes}
//                     checked={false}
//                     // onChange={handleCheckboxChange}
//                     value={boxes}
//                   />
//                   <label htmlFor={boxes}>{boxes}</label>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//       <div className="py-2">
//         <h2 className="text-base font-medium py-1 rounded-md cursor-pointer bg-accent text-white text-center">
//           Add {inputItem.label} +
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default SectionGroup;

function SectionGroup({ inputItem, dataIndex, data, setData }) {
  const handleInputChange = (fieldName, value) => {
    const updatedData = { ...data };
    const targetResponse = updatedData.response_answers[dataIndex];
    const currentAnswers = targetResponse.answer_text;

    if (Array.isArray(currentAnswers)) {
      // For objects with fields like full_name, id, etc.
      currentAnswers[0][fieldName] = value;
    } else {
      // For simple fields
      targetResponse.answer_text = value;
    }

    setData(updatedData);
  };

  const handleCheckboxChange = (fieldName, value) => {
    const updatedData = { ...data };
    const targetResponse = updatedData.response_answers[dataIndex];
    const checkboxArray = targetResponse.answer_text[0][fieldName];
    console.log(checkboxArray);
    if (checkboxArray.includes(value)) {
      // Remove the value if it's already checked
      targetResponse.answer_text[0][fieldName] = checkboxArray.filter(
        (item) => item !== value
      );
    } else {
      // Add the value if it's not checked
      targetResponse.answer_text[0][fieldName].push(value);
    }

    setData(updatedData);
  };

  const currentAnswers = data.response_answers[dataIndex]?.answer_text[0] || {};

  return (
    <div className="border border-gray-200 px-4 rounded-md pb-2 mt-4">
      <div className="bg-white -mt-4 w-max">
        <Text font={`font-semibold`}>
          {inputItem.label}
          {inputItem.is_required && <span className="text-red-600">*</span>}
        </Text>
      </div>
      {inputItem.options.map((option, index) => (
        <div key={index}>
          <Text font={`font-semibold`}>
            {option.label}
            {option.is_required && <span className="text-red-600">*</span>}
          </Text>
          {(option.field_type === "text" || option.field_type === "number") && (
            <input
              type={option.field_type}
              name={option.field_name}
              value={currentAnswers[option.field_name] || ""}
              onChange={(e) =>
                handleInputChange(option.field_name, e.target.value)
              }
              placeholder={option.label}
              className="py-2 px-2 border border-gray-300 rounded-md w-full"
            />
          )}
          {option.field_type === "date" && (
            <Datepicker
              dateFormat={"DD/MM/YYYY"}
              name={option.field_name}
              selected={currentAnswers[option.field_name] || ""}
              onChange={(date) => handleInputChange(option.field_name, date)}
              className="w-full py-2 px-2 border border-gray-300 rounded-md"
            />
          )}
          {option.field_type === "radio" && (
            <div className="flex w-full options-center justify-between px-6">
              {option.options.map((entity, idx) => (
                <div key={idx} className="flex options-center gap-2">
                  <input
                    type="radio"
                    id={entity}
                    value={entity}
                    checked={currentAnswers[option.field_name] === entity}
                    onChange={(e) =>
                      handleInputChange(option.field_name, e.target.value)
                    }
                    name={option.field_name}
                    className="cursor-pointer border checked:border-accent"
                  />
                  <label htmlFor={entity}>{entity}</label>
                </div>
              ))}
            </div>
          )}
          {option.field_type === "dropdown" && (
            <select
              name={option.field_name}
              value={currentAnswers[option.field_name] || ""}
              onChange={(e) =>
                handleInputChange(option.field_name, e.target.value)
              }
              className="py-2 px-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select one</option>
              {option.options.map((select, idx) => (
                <option value={select} key={idx}>
                  {select}
                </option>
              ))}
            </select>
          )}
          {option.field_type === "paragraph" && (
            <textarea
              name={option.field_name}
              rows="4"
              cols="50"
              placeholder={option.placeholder}
              value={currentAnswers[option.field_name] || ""}
              onChange={(e) =>
                handleInputChange(option.field_name, e.target.value)
              }
              className="py-2 px-2 border border-gray-300 rounded-md w-full"
            ></textarea>
          )}
          {option.field_type === "checkbox" && (
            <div className="flex w-full inputItems-center justify-between px-6">
              {option.options.map((box, idx) => (
                <div key={idx} className="flex inputItems-center gap-2">
                  <input
                    type="checkbox"
                    name={option.field_name}
                    id={box}
                    checked={
                      currentAnswers[option.field_name]?.includes(box) || false
                    }
                    onChange={() =>
                      handleCheckboxChange(option.field_name, box)
                    }
                    value={box}
                  />
                  <label htmlFor={box}>{box}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="py-2">
        <h2 className="text-base font-medium py-1 rounded-md cursor-pointer bg-accent text-white text-center">
          Add {inputItem.label} +
        </h2>
      </div>
    </div>
  );
}

export default SectionGroup;

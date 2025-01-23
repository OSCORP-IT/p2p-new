// import Text from "../../components/Text";

// function TableGroup({ item, index, data, setData }) {
//   const print = data.response_answers[index].answer_text[0];
//   console.log(print);
//   const dataNumber = item.options.length;
//   return (
//     <div className="border border-gray-300 p-1 rounded-md w-full">
//       <div className="flex items-center gap-2 text-center text-lg font-medium w-full">
//         {item.options.map((option, index) => (
//           <div
//             key={index}
//             className={`rounded-md py-1.5 bg-gray-200 w-1/${dataNumber}`}
//           >
//             <Text align={"text-center"} font={`font-bold`}>
//               {option.label}
//             </Text>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center gap-2 text-center text-base mt-1 w-full">
//         {item.options.map((option, index) => (
//           <div key={index} className={`w-1/${dataNumber}`}>
//             {option.field_type === "dropdown" && (
//               <select
//                 className={`w-full rounded-md px-4 py-1 border border-gray-300`}
//               >
//                 <option value="">--Select--</option>
//                 {option.options.map((field) => (
//                   <option value={field} key={field}>
//                     {field}
//                   </option>
//                 ))}
//               </select>
//             )}
//             {(option.field_type === "text" ||
//               option.field_type === "number") && (
//               <input
//                 type={option.field_type}
//                 name={option.field_name}
//                 id={option.field_name}
//                 placeholder={option.label}
//                 className={`text-base text-center font-normal rounded-lg w-full border border-gray-300 py-1`}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="py-2">
//         <h2 className="text-base font-medium py-1 rounded-md cursor-pointer bg-accent text-white text-center">
//           Add {item.label} +
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default TableGroup;
import Text from "../../components/Text";

function TableGroup({ item, index, data, setData }) {
  const handleInputChange = (fieldName, value, rowIndex) => {
    const updatedData = { ...data };
    const targetResponse = updatedData.response_answers[index];
    const currentRow = targetResponse.answer_text[rowIndex];

    currentRow[fieldName] = value;
    setData(updatedData);
  };

  const addNewRow = () => {
    const updatedData = { ...data };
    const targetResponse = updatedData.response_answers[index];

    // Add a new empty object with the same structure as the first row
    const newRow = item.options.reduce((acc, option) => {
      acc[option.field_name] = option.field_type === "dropdown" ? "" : ""; // Default empty values
      return acc;
    }, {});

    targetResponse.answer_text.push(newRow);
    setData(updatedData);
  };

  const deleteLastRow = () => {
    const updatedData = { ...data };
    const targetResponse = updatedData.response_answers[index];

    if (targetResponse.answer_text.length > 1) {
      targetResponse.answer_text.pop(); // Remove the last row
      setData(updatedData);
    }
  };

  const currentRows = data.response_answers[index]?.answer_text || [];
  const dataNumber = String(item.options.length);

  return (
    <div className="border border-gray-300 p-1 rounded-md w-full">
      {/* Table Headers */}
      <div className="flex items-center justify-between gap-2 w-full">
        {item.options.map((option, idx) => (
          <div key={idx} className={`rounded-md py-1.5 bg-gray-200 w-1/4`}>
            <Text align={"text-center"} font={`font-bold`}>
              {option.label}
            </Text>
          </div>
        ))}
      </div>

      {/* Table Rows */}
      {currentRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex items-center gap-2 text-center text-base mt-1 w-full"
        >
          {item.options.map((option, idx) => (
            <div key={idx} className={`w-1/${dataNumber}`}>
              {option.field_type === "dropdown" && (
                <select
                  name={option.field_name}
                  value={row[option.field_name] || ""}
                  required={option.is_required}
                  onChange={(e) =>
                    handleInputChange(
                      option.field_name,
                      e.target.value,
                      rowIndex
                    )
                  }
                  className={`w-full rounded-md sm:px-4 py-1 border border-gray-300`}
                >
                  <option value="">--Select--</option>
                  {option.options.map((field, optionIdx) => (
                    <option value={field} key={optionIdx}>
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
                  value={row[option.field_name] || ""}
                  required={option.is_required}
                  onChange={(e) =>
                    handleInputChange(
                      option.field_name,
                      e.target.value,
                      rowIndex
                    )
                  }
                  placeholder={option.label}
                  className={`text-base text-center font-normal rounded-lg w-full border border-gray-300 py-1`}
                />
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Add Row Button */}
      <div className="flex flex-col sm:flex-row gap-2 py-2 w-full">
        <h2
          className="text-base font-medium py-1 px-4 rounded-md cursor-pointer bg-accent w-full sm:w-1/2 text-white text-center"
          onClick={addNewRow}
        >
          Add {item.label} +
        </h2>
        {currentRows.length > 1 && (
          <h2
            className="text-base font-medium py-1 px-4 rounded-md cursor-pointer w-full sm:w-1/2 bg-red-600 text-white text-center"
            onClick={deleteLastRow}
          >
            Delete Last Row
          </h2>
        )}
      </div>
    </div>
  );
}

export default TableGroup;

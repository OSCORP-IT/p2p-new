export function buildFromResponse(apiResponse) {
  let initialValues = { response_answers: [] };

  // Iterate over the fields in the API response
  apiResponse.result.response_answer.forEach((field) => {
    let fieldDefault = { response_answer_id: field.id, answer_text: null };

    // For basic fields (text, number, radio, dropdown)
    if (
      field.field_type === "text" ||
      field.field_type === "number" ||
      field.field_type === "dropdown" ||
      field.field_type === "radio" ||
      field.field_type === "paragraph" ||
      field.field_type === "file"
    ) {
      fieldDefault.answer_text =
        field.answer_text !== null ? field.answer_text : ""; // Default is an empty string
    }
    // For checkbox fields
    else if (field.field_type === "checkbox") {
      fieldDefault.answer_text =
        field.answer_text !== null ? field.answer_text : []; // Default is an empty array (no options selected)
    }
    // For group fields (table_group, section_group)
    else if (
      field.field_type === "table_group" ||
      field.field_type === "section_group"
    ) {
      if (field.answer_text === null) {
        fieldDefault.answer_text = []; // Initialize as an empty array for the rows or sections

        // For each option inside a group, initialize default values in a single object
        if (field.options) {
          // Create an object where the keys are the option names (labels)
          let groupObject = {};

          field.options.forEach((option) => {
            // Initialize each option with an empty value
            if (option.field_type === "checkbox")
              groupObject[option.field_name] = [];
            else groupObject[option.field_name] = ""; // Default to empty string for text fields
          });

          // Add this object to the answer_text array
          fieldDefault.answer_text.push(groupObject);
        }
      } else {
        fieldDefault.answer_text = field.answer_text;
      }
    }

    // Add the initialized field to the response
    initialValues.response_answers.push(fieldDefault);
  });
  console.log(initialValues);
  return initialValues;
}

export const hasEmptyValues = (responseAnswers) => {
  console.log(responseAnswers);
  for (let response of responseAnswers) {
    const answerText = response.answer_text;

    // If answer_text is empty or a string, it's invalid
    if (Array.isArray(answerText)) {
      for (let row of answerText) {
        for (let key in row) {
          const value = row[key];
          if (value === "" || (Array.isArray(value) && value.length === 0)) {
            return true; // Found an empty value
          }
        }
      }
    } else if (answerText === "" || answerText.length === 0) {
      return true; // answer_text is empty or invalid
    }
  }
  return false; // No empty values found
};

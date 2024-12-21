export function formatDateToYYYYMMDD(date) {
  const d = new Date(date);
  if (isNaN(d)) return date; // Return original value if it's not a valid date
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatDate(dateString) {
  const date = new Date(dateString);

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function formatDateTimeTo12Hours(dateTimeString) {
  const date = new Date(dateTimeString);

  // Extract date components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  // Extract time components
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12; // Convert to 12-hour format
  const formattedHours = String(hours).padStart(2, "0");

  // Construct the formatted datetime string
  return `${day}-${month}-${year} ${formattedHours}.${minutes} ${period}`;
}

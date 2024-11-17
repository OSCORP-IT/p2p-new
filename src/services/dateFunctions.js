export function formatDateToYYYYMMDD(date) {
  const d = new Date(date);
  if (isNaN(d)) return date; // Return original value if it's not a valid date
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// All date/time fields are converted to yyyy-mm-dd format

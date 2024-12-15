export async function uploadFileToServer(file) {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json"); // Skip Content-Type

  const formData = new FormData();
  formData.append("file", file); // Ensure the key matches API expectations

  const requestOptions = {
    method: "POST",
    headers: myHeaders, // Only include Accept
    body: formData,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://microservice-form.alzakati.com/api/file-upload",
      requestOptions
    );

    if (!response.ok) {
      const errorDetails = await response.text(); // Read error details from server
      throw new Error(`Failed to upload file: ${errorDetails}`);
    }

    const result = await response.json(); // Parse the JSON response
    console.log(result);
    return result; // Return the API response
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error; // Re-throw error for handling in the calling component
  }
}

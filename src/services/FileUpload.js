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
// api.js

export const updateProfileImage = async (token, file) => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const formdata = new FormData();
  formdata.append("profile_image", file);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin-p2p.alzakati.com/api/client-panel/dashboard/profile-image-update",
      requestOptions
    );
    const result = await response.json(); // Use `.json()` if the API returns JSON
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error updating profile image:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
};

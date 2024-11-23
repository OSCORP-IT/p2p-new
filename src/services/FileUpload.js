const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export async function fileUpload(file) {
  const formData = new FormData();
  formData.append("file", file);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://microservice-form.alzakati.com/api/file-upload",
      requestOptions
    );

    if (!response.ok) {
      throw new Error("File upload failed");
    }

    const result = await response.json(); // Assuming API returns a JSON with a `path` field
    console.log("Uploaded file path:", result.path);
  } catch (error) {
    console.error("Error uploading file:", error);
    alert("Error uploading file");
  }
}

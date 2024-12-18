const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
export async function updatePassword(token, password) {
  myHeaders.append("Authorization", `Bearer ${token}`);

  const formdata = JSON.stringify(password);
  console.log(formdata);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin-p2p.alzakati.com/api/client-panel/dashboard/change-password",
      requestOptions
    );
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error("Old Password is incorrect.");
      }
      if (response.status === 422) {
        throw new Error("Password didn't match.");
      }
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

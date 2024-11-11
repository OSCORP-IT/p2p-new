const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export async function userPhoneNumberCheck(phone) {
  console.log(phone);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://admin-p2p.alzakati.com/api/client-panel/registration-step-1?mobile_number=${phone}`,
      requestOptions
    );

    // Check if the response status is 409
    if (response.status === 409 || response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  } catch (error) {
    // Log or handle the error appropriately
    throw new Error(error); // Rethrow the error to allow handling by the caller
  }
}

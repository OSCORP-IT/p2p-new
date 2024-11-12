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

// api.js

export const loginRequest = async (emailOrMobile, password) => {
  const body = JSON.stringify({
    email_or_mobile_number: emailOrMobile,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin-p2p.alzakati.com/api/client-panel/login",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const result = await response.json();
    console.log(result.result.token);
    return result;
  } catch (error) {
    console.error("Login request failed:", error);
    throw error;
  }
};

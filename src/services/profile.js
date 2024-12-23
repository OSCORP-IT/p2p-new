const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
export async function getProfileData(token) {
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin-p2p.alzakati.com/api/client-panel/dashboard/my-account",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postUpdateProfile(token, data) {
  myHeaders.append("Authorization", `Bearer ${token}`);
  const formdata = JSON.stringify(data);
  console.log(data);
  console.log(formdata);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin-p2p.alzakati.com/api/client-panel/dashboard/my-account-update",
      requestOptions
    );

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

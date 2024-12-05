const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export async function checkRateSubmit(data, userToken) {
  myHeaders.append("Authorization", `Bearer ${userToken}`);

  const raw = JSON.stringify({ ...data });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  console.log(raw, userToken);
  try {
    const response = await fetch(
      "https://admin-p2p.alzakati.com/api/client-panel/dashboard/check-your-rate-submit",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

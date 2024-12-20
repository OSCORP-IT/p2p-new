import { formatDateToYYYYMMDD } from "./dateFunctions";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
export async function scheduleMeeting(token, data) {
  myHeaders.append("Authorization", `Bearer ${token}`);
  const newData = {
    ...data,
    preferred_date: formatDateToYYYYMMDD(data.preferred_date),
  };
  console.log(newData);
  const formdata = JSON.stringify(newData);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin-p2p.alzakati.com/api/client-panel/dashboard/meetings/store",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
export async function createSupportTicket(token, data) {
  myHeaders.append("Authorization", `Bearer ${token}`);
  const formdata = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin-p2p.alzakati.com/api/client-panel/dashboard/tickets/store",
      requestOptions
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
export async function getRecentCommunication(token) {
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin-p2p.alzakati.com/api/client-panel/dashboard/recent-communications",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getDetailSupportTicket(token, id) {
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://admin-p2p.alzakati.com/api/client-panel/dashboard/tickets/${id}/show`,
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getDetailMeetingSchedule(token, id) {
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://admin-p2p.alzakati.com/api/client-panel/dashboard/meetings/${id}/show`,
      requestOptions
    );
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

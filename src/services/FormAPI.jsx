const BASE_URL = `https://admin-p2p.alzakati.com/api/client-panel`;

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", "2|LHMO0jUVdq2CNwljQ34ZDqBWoNq25pmLMPvtp044");

export async function showForm(token, loanPortfolioId) {
  // const requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow",
  // };
  // const response = await fetch(
  //   `${BASE_URL}/client-panel/dashboard/loan-types/${loanTypes}/forms/${formId}`,
  //   requestOptions
  // );
  // if (!response.ok) throw Error("Failed getting menu");
  // const data = await response.json();
  // return data;
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${BASE_URL}/dashboard/applied-loan-portfolios/${loanPortfolioId}/show`,
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error();
  }
}

export async function showFormPage(
  loanPortfolioId,
  formId,
  formPage,
  responseId,
  token
) {
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  console.log(loanPortfolioId, formId, formPage, responseId, token);
  try {
    const response = await fetch(
      `${BASE_URL}/dashboard/applied-loan-portfolios/${loanPortfolioId}/forms/${formId}/form-pages/${formPage}/form-responses/${responseId}`,
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error();
  }
}

export async function submitPortfolioResponse(response, token) {
  myHeaders.append("Authorization", `Bearer ${token}`);

  const raw = JSON.stringify(response);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${BASE_URL}/dashboard/applied-loan-portfolios/1/forms/1/form-pages/1/form-responses/14/submit`,
      requestOptions
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

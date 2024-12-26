const BASE_URL = `https://admin-p2p.alzakati.com/api/client-panel`;

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", "2|LHMO0jUVdq2CNwljQ34ZDqBWoNq25pmLMPvtp044");

export async function showForm(token, loanPortfolioId) {
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

export async function submitPortfolioResponse(
  loanPortfolioId,
  formId,
  formPageId,
  formResponseId,
  responseData,
  token
) {
  myHeaders.append("Authorization", `Bearer ${token}`);
  console.log(token, responseData);

  const raw = JSON.stringify(responseData);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${BASE_URL}/dashboard/applied-loan-portfolios/${loanPortfolioId}/forms/${formId}/form-pages/${formPageId}/form-responses/${formResponseId}/submit`,
      requestOptions
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

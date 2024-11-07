const BASE_URL = `https://admin-p2p.alzakati.com/api/client-panel`;

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "2|LHMO0jUVdq2CNwljQ34ZDqBWoNq25pmLMPvtp044");

export async function showForm(loanTypes, formId) {
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const response = await fetch(
    `${BASE_URL}/client-panel/dashboard/loan-types/${loanTypes}/forms/${formId}`,
    requestOptions
  );
  if (!response.ok) throw Error("Failed getting menu");
  const data = await response.json();
  return data;
}

export async function showFormPage(
  loanPortfolioId,
  formId,
  formPage,
  responseId
) {
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    `${BASE_URL}/dashboard/applied-loan-portfolios/${loanPortfolioId}/forms/${formId}/form-pages/${formPage}/form-responses/${responseId}`,
    requestOptions
  );
  if (!response.ok) throw Error("Failed getting menu");
  const data = await response.json();
  console.log(data);
  return data;
}

async function fetchAPI(fullRoute: string, type: string, data?: object): Promise<any> {
  let options = {
    method: type,
    body: data ? JSON.stringify(data) : undefined,
  };
  return fetch(fullRoute, options).then((response) => {
    return response.json();
  })
}

export function getReleases(): Promise<any> {
  const URL = `https://api.github.com/repos/devtron-labs/devtron/releases`;
  return fetchAPI(URL, 'GET');
}

export function getLatestReleases(): Promise<any> {
  const URL = `https://api.github.com/repos/devtron-labs/devtron/releases/latest`;
  return fetchAPI(URL, 'GET');
}
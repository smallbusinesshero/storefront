export default class Base {
  baseUrl =
    process.env.BACKEND_URL || "https://dev-dds-wvv-backend.herokuapp.com/";

  getRequest = async (path) => {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      console.error(
        `Error fetching data (${response.status}): ${await response.text()}`
      );
    }
  };

  postRequest = async (path, bodyObj, contentType?) => {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": contentType || "application/json",
      },
      body: bodyObj,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      console.error(
        `Error posting data (${response.status}): ${await response.text()}`
      );
    }
  };
}

export default class Base {
    baseUrl = 'https://dds-wvv-backend.herokuapp.com/';

    getRequest = async (path) => {
        const response = await fetch(`${this.baseUrl}${path}`,  {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
          });
        const json = await response.json();
        return json;
    }
}
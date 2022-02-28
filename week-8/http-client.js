/* Title: http-client.js
Author: Professor Krasso
Modified by: Allan Trejo
Date: 02-26-2022
Description: Using Fetch for a based book App
Resources: https://openlibrary.org/dev/docs/api/books 
*/

/* Export class */
export class HttpClient {
  /* Async function takes 2 parameters, url to fetch
  and params if required */
  async get(url, params = '') {
    /* create new URL object */
    url = new URL(url);
    /* create New url params and set url search property to these params */
    url.search = new URLSearchParams(params);

    /* serialize url object and store response*/
    const res = await fetch(url.toString(), {
      method: 'GET',
    });

    /* return response as json object */
    return res.json();
  }
}

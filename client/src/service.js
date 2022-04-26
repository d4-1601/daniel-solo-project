//server url
const myUrl= 'http://127.0.0.1:3005/profile';
const offsetUrl= 'http://127.0.0.1:3005/offsetting';

export function getUserEmissions() {
  return fetch(myUrl, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch(e => console.log(e));
}

export function postEmissions(formData) {
  return fetch(myUrl, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .catch(e => console.log(e));
}

export function getOffsetProjects() {
  return fetch(offsetUrl, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch(e => console.log(e));
}
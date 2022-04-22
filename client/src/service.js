//server url
const myUrl= 'http://127.0.0.1:3005/profile';

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
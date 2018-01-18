const shift = (state) => new Promise((resolve, reject) => {
  fetch('/shift', {
    method: 'post',
    body: JSON.stringify(state),
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

export default shift;
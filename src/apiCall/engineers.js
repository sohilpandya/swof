export const getEngineers = new Promise((resolve, reject) => {
  fetch('/engineers')
    .then((res) => res.json())
    .then((engineers) => {
      resolve(engineers);
    })
    .catch((error) => {
      reject(error);
    });
});

export const saveEngineers = (state) => new Promise((resolve, reject) => {
  fetch('/engineers', {
    method: 'post',
    body: JSON.stringify(state),
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((engineers) => {
      resolve(engineers);
    })
    .catch((error) => {
      reject(error);
    });
});

import firebase from './firebase';

const getEngineers = new Promise((resolve, reject) => {

  firebase.database().ref('state').once('value')
    .then((snap) => {
      if (snap.val()) {
        return resolve(snap.val())
      } else {
        return reject(new Error('data does not exist'))
      }
    })
    .catch((error) => {
      return reject(error);
    })
})

const saveEngineers = (newState) => new Promise((resolve, reject) => {
  firebase.database().ref('state').set(newState)
})


export { getEngineers, saveEngineers };


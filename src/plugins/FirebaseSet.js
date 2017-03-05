import Firebase from 'firebase'

function profilePicture (imageData) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) reject({code: 'auth/null-user', message: 'User not found!'})
    var uid = user.uid

    if (imageData === '') {
      reject({code: 'input/empty-input', message: 'Input field cannot be empty!'})
      return false
    }

    let storageRef = Firebase.storage().ref('user/' + uid + '/profile.jpg')
    let uploadTask = storageRef.putString(imageData, 'data_url')
    uploadTask.on('state_changed', (snapshot) => {
      // Progress
      // let x = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    }, (error) => {
      // Fail
      reject(error)
    }, () => {
      // Success
      // Now save url to user
      let downloadURL = uploadTask.snapshot.downloadURL
      let updates = {}
      updates['user/' + uid + '/pictureURL'] = downloadURL
      updates['profile/' + uid + '/pictureURL'] = downloadURL
      Firebase.database().ref().update(updates).then(() => {
        // Success
        resolve()
      }, (error) => {
        // Fail
        reject(error)
      })
    })
  })
}

function nameBirthdaySex (first, last, birthday, sex) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) reject({code: 'auth/null-user', message: 'User not found!'})
    var uid = user.uid

    if (first === '') {
      reject({code: 'input/empty-input', message: 'Field cannot be empty!', input: 1})
      return false
    }
    if (last === '') {
      reject({code: 'input/empty-input', message: 'Field cannot be empty!', input: 2})
      return false
    }
    if (sex === '') {
      reject({code: 'input/empty-input', message: 'Field cannot be empty!', input: 4})
      return false
    }

    let updates = {}
    updates['user/' + uid + '/firstName'] = first
    updates['user/' + uid + '/lastName'] = last
    updates['user/' + uid + '/displayName'] = first + ' ' + last
    updates['profile/' + uid + '/displayName'] = first + ' ' + last
    updates['user/' + uid + '/sex'] = sex
    updates['profile/' + uid + '/sex'] = sex
    updates['user/' + uid + '/birthday'] = birthday
    updates['profile/' + uid + '/age'] = _calculateAge(birthday)
    // TODO: user/birthday && profile/age
    Firebase.database().ref().update(updates).then(() => {
      // Success
      resolve()
    }, (error) => {
      // Fail
      reject(error)
      return false
    })
  })
}

export default {
  profilePicture,
  nameBirthdaySex
}

function _calculateAge (birthday) { // birthday is a date
  var ageDifMs = Date.now() - new Date(birthday).getTime()
  var ageDate = new Date(ageDifMs) // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

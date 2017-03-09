import Firebase from 'firebase'
function newUser (newUser) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    var uid = user.uid

    let updates = {}

    let newUserKeys = Object.keys(newUser)
    newUserKeys.forEach(key => {
      updates['user/' + uid + '/' + key] = newUser[key]
    })

    Firebase.database().ref().update(updates).then(() => {
      // Success
      resolve()
    }, (error) => {
      // Fail
      reject(error)
    })
  })
}
function newProfile (newProfile) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    var uid = user.uid

    let updates = {}

    let newProfileKeys = Object.keys(newProfile)
    newProfileKeys.forEach(key => {
      updates['profile/' + uid + '/' + key] = newProfile[key]
    })

    Firebase.database().ref().update(updates).then(() => {
      // Success
      resolve()
    }, (error) => {
      // Fail
      reject(error)
    })
  })
}
function addTag (tag, weight, level) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    var uid = user.uid

    let tagSanitize = tag.toLowerCase().replace(/[^0-9a-z ]/gi, '')

    if (tagSanitize === '') {
      reject({code: 'input/empty', message: 'Tag is empty or invalid!'})
      return false
    }

    let updates = {}
    updates['userTags/' + uid + '/' + tagSanitize + '/name'] = tagSanitize
    updates['userTags/' + uid + '/' + tagSanitize + '/weight'] = weight
    updates['userTags/' + uid + '/' + tagSanitize + '/level'] = level
    Firebase.database().ref().update(updates).then(() => {
      // Success
      countTag(tagSanitize, 1)
      resolve()
    }, (error) => {
      // Fail
      reject(error)
    })
  })
}
function removeTag (key) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    var uid = user.uid

    let updates = {}
    updates['userTags/' + uid + '/' + key] = null
    Firebase.database().ref().update(updates).then(() => {
      // Success
      countTag(key, -1)
      resolve()
    }, (error) => {
      // Fail
      reject(error)
    })
  })
}
function countTag (tag, add) {
  // theoretically anyone could post any tag at any count
  // Move to server if abused
  Firebase.database().ref().child('tags').child(tag)
  .transaction(tagRef => {
    return (tagRef || 0) + add
  })
}
function verifyEmail () {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    if (user.emailVerified) {
      reject({code: 'auth/duplicate-request', message: 'User has already verified!'})
      return false
    }
    // var uid = user.uid

    user.sendEmailVerification().then(() => {
      // Email sent.
      resolve()
    }, error => {
      reject(error)
    })
  })
}
function password (oldPass, newPass) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    // var uid = user.uid

    let credential = Firebase.auth.EmailAuthProvider.credential(
        user.email,
        oldPass
    )
    user.reauthenticate(credential).then(() => {
      user.updatePassword(newPass).then(() => {
        resolve()
      }, (error) => {
        reject(error)
      })
    }, (error) => {
      reject(error)
    })
  })
}
function email (password, newEmail) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    var uid = user.uid

    let credential = Firebase.auth.EmailAuthProvider.credential(
        user.email,
        password
    )

    user.reauthenticate(credential).then(() => {
      user.updateEmail(newEmail).then(() => {
        Firebase.database().ref('user').child(uid).child('email').set(newEmail).then(() => {
          // Success
          resolve()
        }, (error) => {
          reject(error)
        })
      }, (error) => {
        reject(error)
      })
    }, (error) => {
      reject(error)
    })
  })
}
function location (lat, lng, name) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    var uid = user.uid

    let updates = {}
    updates['profile/' + uid + '/locationName'] = name
    updates['user/' + uid + '/locationName'] = name
    updates['user/' + uid + '/locationLat'] = lat
    updates['user/' + uid + '/locationLong'] = lng
    Firebase.database().ref().update(updates).then(() => {
      // Success
      resolve()
    }, (error) => {
      // Fail
      reject(error)
    })
  })
}
function distance (dist) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    var uid = user.uid

    let updates = {}
    updates['user/' + uid + '/distance'] = dist
    Firebase.database().ref().update(updates).then(() => {
      // Success
      resolve()
    }, (error) => {
      // Fail
      reject(error)
    })
  })
}
function bio (bio) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    var uid = user.uid

    let updates = {}
    updates['user/' + uid + '/bio'] = bio
    updates['profile/' + uid + '/bio'] = bio
    Firebase.database().ref().update(updates).then(() => {
      // Success
      resolve()
    }, (error) => {
      // Fail
      reject(error)
    })
  })
}
function name (first, last) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    var uid = user.uid

    let updates = {}
    updates['user/' + uid + '/firstName'] = first
    updates['user/' + uid + '/lastName'] = last
    Firebase.database().ref().update(updates).then(() => {
      // Success
      resolve()
    }, (error) => {
      // Fail
      reject(error)
    })
  })
}
function displayName (name) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
    var uid = user.uid

    let updates = {}
    updates['user/' + uid + '/displayName'] = name
    updates['profile/' + uid + '/displayName'] = name
    Firebase.database().ref().update(updates).then(() => {
      // Success
      // === Add display name to account
      user.updateProfile({
        displayName: name
      }).then(function () {
        // Update successful.
      }, function (error) {
        // An error happened.
        console.log(error)
      })
      // ===
      resolve()
    }, (error) => {
      // Fail
      reject(error)
    })
  })
}
function profilePicture (imageData) {
  return new Promise((resolve, reject) => {
    let user = Firebase.auth().currentUser
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
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
    if (!user) {
      reject({code: 'auth/null-user', message: 'User not found!'})
      return false
    }
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
      // === Add display name to account
      user.updateProfile({
        displayName: first + ' ' + last
      }).then(function () {
        // Update successful.
      }, function (error) {
        // An error happened.
        console.log(error)
      })
      // ===
      resolve()
    }, (error) => {
      // Fail
      reject(error)
      return false
    })
  })
}

export default {
  location,
  profilePicture,
  nameBirthdaySex,
  displayName,
  name,
  bio,
  distance,
  password,
  email,
  verifyEmail,
  addTag,
  removeTag,
  newProfile,
  newUser
}

function _calculateAge (birthday) { // birthday is a date
  var ageDifMs = Date.now() - new Date(birthday).getTime()
  var ageDate = new Date(ageDifMs) // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

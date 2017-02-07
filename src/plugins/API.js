import Vue from 'vue'

let spoofLocalhost = true

let settings = {
  // localhost || www.example.com
  host: window.location.hostname,

  // http: || https:
  protocol: window.location.protocol,

  // http://localhost || http://www.example.com
  origin: window.location.origin,

  // /xyz || / || /asdf/werwer
  path: window.location.pathname,

  // /static/api/ || /api/
  api: window.location.origin + (window.location.hostname === 'localhost' || spoofLocalhost ? '/static/api/' : '/api/'),

  // .txt || .php || ''
  apiext: (window.location.hostname === 'localhost' || spoofLocalhost ? '.txt' : '.php')
}

let JsonAPI = {}

JsonAPI.install = function (Vue, options) {
  Vue.prototype.$api = function (page, data, callback) {
    // Set API Address
    let apiurl = settings.api + page + settings.apiext
    console.log(apiurl)

    // Request Data
    // Use get when posting to localhost
    // localhost only serves txt files
    if (settings.host === 'localhost' || spoofLocalhost) {
      this.$http.get(apiurl)
      .then((response) => { return response.json() }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with request.', response.body]}) }) })
      .then((json) => { return new Promise(function (resolve, reject) { resolve(json) }) }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with json.', response]}) }) })
      .then((data) => {
        callback(data)
      })
    } else {
      this.$http.post(apiurl, data)
      .then((response) => { return response.json() }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with request.', response.body]}) }) })
      .then((json) => { return new Promise(function (resolve, reject) { resolve(json) }) }, (response) => { return new Promise(function (resolve, reject) { resolve({error: ['Error with json.', response]}) }) })
      .then((data) => {
        callback(data)
      })
    }
  }
}

Vue.use(JsonAPI)

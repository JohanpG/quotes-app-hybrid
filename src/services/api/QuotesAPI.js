import axios from 'axios'

export default {
  getQuotes2(){
    let url = process.env.VUE_APP_API_ENDPOINT + '/quotes'
    return fetch(url, {
      method: 'get'
    })
    .then(response => {
      // I can do some logic that concerns only the API Here and retiurn the promise
      return response.data
    })
  },
  getQuotes(){
    let url = process.env.VUE_APP_API_ENDPOINT + '/quotes'
    return axios.get(url)
    .then(response => {
      // I can do some logic that concerns only the API Here and retiurn the promise
      return response.data
    })
  },
  getQuoteById(id){
    let url = process.env.VUE_APP_API_ENDPOINT + '/quotes/'+id
    return axios.get(url)
    .then(response => {
      // I can do some logic that concerns only the API Here and retiurn the promise
      return response.data
    })
  },
  getQuotesPaginated(page){
    let url = process.env.VUE_APP_API_ENDPOINT + '/quotes'+'/'+page+':page'+'/10:limit'
    return axios.get(url)
    .then(response => {
      // I can do some logic that concerns only the API Here and retiurn the promise
      return response.data
    })
  },

  getDailyQuote(){
    let url = process.env.VUE_APP_API_ENDPOINT + '/dailyQuote'
    return axios.get(url)
    .then(response => {
      // I can do some logic that concerns only the API Here and retiurn the promise
      return response.data
    })
  }
}

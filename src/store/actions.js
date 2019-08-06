import QuotesAPI from '@/services/api/QuotesAPI'
export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  },
  selectLanguage: ({ commit }, language) => {
    commit('setLanguage', language)
  },
  addQuote: ({ commit }, payload) => {
    var url = process.env.VUE_APP_API_ENDPOINT + '/quotes'
    var data = payload
    console.log(data)
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>
        commit('appendQuote', response)
        // console.log('Success:', response)
      )
  },
  refreshAuthors: ({ commit })  => {
    return QuotesAPI.getAuthors()
    .then(authors =>{
      console.log(authors)
      commit('getAuthors', authors)
    })
    .catch(error => console.log(error))
    .finally(() => {
      // wheter error or not remove loading
      //this.loading=false
    })
  },
  refreshQuotes: ({ commit })  => {
    return QuotesAPI.getQuotes()
    .then(quotes =>{
      console.log(quotes)
      commit('getQuotes', quotes)
    })
    .catch(error => console.log(error))
    .finally(() => {
      // wheter error or not remove loading
      //this.loading=false
    })
  },
  refreshQuoteById: ({ commit }, id)  => {
    return QuotesAPI.getQuoteById(id)
    .then(quote =>{
      console.log(quote)
      commit('getQuoteId', quote)
    })
    .catch(error => console.log(error))
    .finally(() => {
      // wheter error or not remove loading
      //this.loading=false
    })
  },
  refreshQuotesPaginated: ({ commit }, page)  => {
    return QuotesAPI.getQuotesPaginated(page)
    .then(response =>{
      console.log(response);
      commit('getQuotesPagination', response);
    })
    .catch(error => console.log(error))
    .finally(() => {
      // wheter error or not remove loading
      //this.loading=false
    })
  },
  loadmoreQuotes: ({ commit }, payload)  => {
    console.log("Parameters");
    console.log(payload);
    return QuotesAPI.getMoreQuotes(payload.current,payload.sortby)
    .then(response =>{
      console.log("Actionsss");
      console.log(response);
      commit('getQuotesSlice', response);
    })
    .catch(error => console.log(error))
    .finally(() => {
      // wheter error or not remove loading
      //this.loading=false
    })
  },
  refreshQuotes2: ({ commit }) => {
    fetch(process.env.VUE_APP_API_ENDPOINT + '/quotes', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
      //  console.log(jsonData)
        commit('getQuotes', jsonData)
      })
  },
  refreshDailyQuote: ({ commit }) => {
    fetch(process.env.VUE_APP_API_ENDPOINT + '/dailyQuote', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        console.log(jsonData)
        commit('getDailyQuote', jsonData)
      })
  }

}

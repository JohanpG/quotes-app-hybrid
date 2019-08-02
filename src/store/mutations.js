export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  },
  getQuotes: (state, quotes) => {
    state.allQuotes = quotes
  },
  setLanguage: (state, language) => {
    state.selectedLanguage = language
  },
  getQuotesPagination: (state, response) => {
    state.allQuotes = response.data;
    state.paginationDetails.currentPage = response.page;
    state.paginationDetails.perPage = response.limit;
    state.paginationDetails.totalItems = response.totalPages;
    console.log(state.paginationDetails);

  },
  getQuotesSlice: (state, response) => {
    state.allQuotes.push(response.data);
    state.paginationDetails.current = response.current;
    state.paginationDetails.perPage = response.limit;
    state.paginationDetails.totalItems = response.totalItems;
    console.log("Mutations");
    console.log(state.allQuotes);
    console.log(state.paginationDetails);

  },
  getDailyQuote: (state, quote) => {
    state.dailyQuote = quote
  },
  getQuoteId: (state, quote) => {
    state.quoteByID = quote
  },
  appendQuote: (state, { quote }) => {
    state.allQuotes.push(quote)
  }
}

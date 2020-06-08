import * as types from "./News.constant";

const initialState = {
  news: [],
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case types.GET_NEWS_REQUESTING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_NEWS_REQUESTING_SUCCESS: {
      const news = action.response.data;
      const pageProps = action.response.pageProps;

      return {
        ...state,
        news: news,
        pageProps: {
          ...state.pageProps,
          ...pageProps,
        },
        loading: false,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

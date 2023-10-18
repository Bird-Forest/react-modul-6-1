const INITIAL_STATE = {
  postDetailsData: null,
  isLoading: false,
  error: null,
};
export const postDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'postDetails/setIsLoading': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case 'postDetails/setPostDetails': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case 'postDetails/setError': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

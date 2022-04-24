const initialState = {
    requestingFetchAuthors: false,
    successfulFetchAuthors: false,
    errorFetchAuthors: false,
    authors: {},
    requestingCreateAuthor: false,
    successfulCreateAuthor: false,
    errorsCreateAuthor: false,
    author: null,
    requestingReadAuthor: false,
    successfulReadAuthor: false,
    errorsReadAuthor: false,
    rowEdited: null,
    requestingDeleteAuthor: false,
    successfulDeleteAuthor: false,
    errorsDeleteAuthor: false,
    rowDeleted: null,
    requestingUpdateAuthor: false,
    successfulUpdateAuthor: false,
    errorsUpdateAuthor: false,
    rowUpdated: null,
  };
  
  const authorReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_AUTHORS_REQUESTING":
        return {
          ...state,
          requestingFetchAuthors: true,
          successfulFetchAuthors: false,
          errorsFetchAuthors: false,
        };
      case "FETCH_AUTHOR_SUCCESS":
        return {
          ...state,
          errorFetchAuthors: false,
          requestingFetchAuthors: false,
          successfulFetchAuthors: true,
          authors: action.value,
        };
      case "FETCH_AUTHOR_ERROR":
        return {
          ...state,
          errorFetchAuthors: true,
          requestingFetchAuthors: false,
          successfulFetchAuthors: false,
        };
      case "CREATE_AUTHOR_REQUESTING":
        return {
          ...state,
          requestingCreateAuthor: true,
          successfulCreateAuthor: false,
          errorsCreateAuthor: false,
        };
      case "CREATE_AUTHOR_SUCCESS":
        return {
          ...state,
          errorsCreateAuthor: false,
          requestingCreateAuthor: false,
          successfulCreateAuthor: true,
          author: action.value,
        };
      case "CREATE_AUTHOR_ERROR":
        return {
          ...state,
          errorsCreateAuthor: true,
          requestingCreateAuthor: false,
          successfulCreateAuthor: false,
        };
      case "READ_AUTHOR_REQUESTING":
        return {
          ...state,
          requestingReadAuthor: true,
          successfulReadAuthor: false,
          errorsReadAuthor: false,
        };
      case "READ_AUTHOR_SUCCESS":
        return {
          ...state,
          errorsReadAuthor: false,
          requestingReadAuthor: false,
          successfulReadAuthor: true,
          rowEdited: action.value,
        };
      case "READ_AUTHOR_ERROR":
        return {
          ...state,
          errorsReadAuthor: true,
          requestingReadAuthor: false,
          successfulReadAuthor: false,
        };
      case "DELETE_AUTHOR_REQUESTING":
        return {
          ...state,
          requestingDeleteAuthor: true,
          successfulDeleteAuthor: false,
          errorsDeleteAuthor: false,
        };
      case "DELETE_AUTHOR_SUCCESS":
        return {
          ...state,
          errorsDeleteAuthor: false,
          requestingDeleteAuthor: false,
          successfulDeleteAuthor: true,
          rowDeleted: action.value,
        };
      case "DELETE_AUTHOR_ERROR":
        return {
          ...state,
          errorsDeleteAuthor: true,
          requestingDeleteAuthor: false,
          successfulDeleteAuthor: false,
        };
      case "UPDATE_AUTHOR_REQUESTING":
        return {
          ...state,
          requestingUpdateAuthor: true,
          successfulUpdateAuthor: false,
          errorsUpdateAuthor: false,
        };
      case "UPDATE_AUTHOR_SUCCESS":
        return {
          ...state,
          errorsUpdateAuthor: false,
          requestingUpdateAuthor: false,
          successfulUpdateAuthor: true,
          rowUpdated: action.value,
        };
      case "UPDATE_AUTHOR_ERROR":
        return {
          ...state,
          errorsUpdateAuthor: true,
          requestingUpdateAuthor: false,
          successfulUpdateAuthor: false,
        };
      case "RESET_AUTHOR_FORM":
        return {
          ...state,
          requestingCreateAuthor: false,
          successfulCreateAuthor: false,
          errorsCreateAuthor: false,
          author: null,
          requestingReadAuthor: false,
          successfulReadAuthor: false,
          errorsReadAuthor: false,
          rowEdited: null,
          requestingDeleteAuthor: false,
          successfulDeleteAuthor: false,
          rowDeleted: null,
          requestingUpdateAuthor: false,
          successfulUpdateAuthor: false,
          errorsUpdateAuthor: false,
          rowUpdated: null,
        };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };
  
  export default authorReducer;
  
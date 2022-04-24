const initialState = {
  requestingFetchBooks: false,
  successfulFetchBooks: false,
  errorFetchBooks: false,
  books: {},
  requestingCreateBook: false,
  successfulCreateBook: false,
  errorsCreateBook: false,
  book: null,
  requestingReadBook: false,
  successfulReadBook: false,
  errorsReadBook: false,
  rowEdited: null,
  requestingDeleteBook: false,
  successfulDeleteBook: false,
  errorsDeleteBook: false,
  rowDeleted: null,
  requestingUpdateBook: false,
  successfulUpdateBook: false,
  errorsUpdateBook: false,
  rowUpdated: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUESTING":
      return {
        ...state,
        requestingFetchBooks: true,
        successfulFetchBooks: false,
        errorsFetchBooks: false,
      };
    case "FETCH_BOOK_SUCCESS":
      return {
        ...state,
        errorFetchBooks: false,
        requestingFetchBooks: false,
        successfulFetchBooks: true,
        books: action.value,
      };
    case "FETCH_BOOK_ERROR":
      return {
        ...state,
        errorFetchBooks: true,
        requestingFetchBooks: false,
        successfulFetchBooks: false,
      };
    case "CREATE_BOOK_REQUESTING":
      return {
        ...state,
        requestingCreateBook: true,
        successfulCreateBook: false,
        errorsCreateBook: false,
      };
    case "CREATE_BOOK_SUCCESS":
      return {
        ...state,
        errorsCreateBook: false,
        requestingCreateBook: false,
        successfulCreateBook: true,
        book: action.value,
      };
    case "CREATE_BOOK_ERROR":
      return {
        ...state,
        errorsCreateBook: true,
        requestingCreateBook: false,
        successfulCreateBook: false,
      };
    case "READ_BOOK_REQUESTING":
      return {
        ...state,
        requestingReadBook: true,
        successfulReadBook: false,
        errorsReadBook: false,
      };
    case "READ_BOOK_SUCCESS":
      return {
        ...state,
        errorsReadBook: false,
        requestingReadBook: false,
        successfulReadBook: true,
        rowEdited: action.value,
      };
    case "READ_BOOK_ERROR":
      return {
        ...state,
        errorsReadBook: true,
        requestingReadBook: false,
        successfulReadBook: false,
      };
    case "DELETE_BOOK_REQUESTING":
      return {
        ...state,
        requestingDeleteBook: true,
        successfulDeleteBook: false,
        errorsDeleteBook: false,
      };
    case "DELETE_BOOK_SUCCESS":
      return {
        ...state,
        errorsDeleteBook: false,
        requestingDeleteBook: false,
        successfulDeleteBook: true,
        rowDeleted: action.value,
      };
    case "DELETE_BOOK_ERROR":
      return {
        ...state,
        errorsDeleteBook: true,
        requestingDeleteBook: false,
        successfulDeleteBook: false,
      };
    case "UPDATE_BOOK_REQUESTING":
      return {
        ...state,
        requestingUpdateBook: true,
        successfulUpdateBook: false,
        errorsUpdateBook: false,
      };
    case "UPDATE_BOOK_SUCCESS":
      return {
        ...state,
        errorsUpdateBook: false,
        requestingUpdateBook: false,
        successfulUpdateBook: true,
        rowUpdated: action.value,
      };
    case "UPDATE_BOOK_ERROR":
      return {
        ...state,
        errorsUpdateBook: true,
        requestingUpdateBook: false,
        successfulUpdateBook: false,
      };
    case "RESET_BOOK_FORM":
      return {
        ...state,
        requestingCreateBook: false,
        successfulCreateBook: false,
        errorsCreateBook: false,
        book: null,
        requestingReadBook: false,
        successfulReadBook: false,
        errorsReadBook: false,
        rowEdited: null,
        requestingDeleteBook: false,
        successfulDeleteBook: false,
        rowDeleted: null,
        requestingUpdateBook: false,
        successfulUpdateBook: false,
        errorsUpdateBook: false,
        rowUpdated: null,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default bookReducer;

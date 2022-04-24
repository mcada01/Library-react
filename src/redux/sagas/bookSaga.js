import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";

function* getAllBooks(payload) {
  try {
    yield put({
      type: "FETCH_BOOKS_REQUESTING",
    });

    yield put({
      type: "SHOW_LOADING",
    });

    const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/books?page=${payload.value.page}&search=${payload.value.search}&offset=${payload.value.offset}`;
    const headers = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    const response = yield call(request, requestURL, headers);

    yield put({
      type: "HIDE_LOADING",
    });

    yield put({
      type: "FETCH_BOOK_SUCCESS",
      value: response,
    });
  } catch (error) {
    yield put({
      type: "HIDE_LOADING",
    });
    yield put({
      type: "SHOW_ALERT",
      value: {
        type: "danger",
        title: "Falied load",
        message: "Falied load books",
      },
    });
    yield put({
      type: "FETCH_BOOK_ERROR",
    });
  }
}

function* postBook(payload) {
  try {
    yield put({ type: "CREATE_BOOK_REQUESTING" });
    yield put({
      type: "SHOW_LOADING",
    });
    const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/books`;

    const headers = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(payload.value),
    };

    const response = yield call(request, requestURL, headers);

    yield put({
      type: "HIDE_LOADING",
    });

    yield put({
      type: "SHOW_ALERT",
      value: {
        type: "success",
        title: "Successful save",
        message: "Successful save book",
      },
    });

    yield put({
      type: "CREATE_BOOK_SUCCESS",
      value: response,
    });
  } catch (error) {
    yield put({
      type: "HIDE_LOADING",
    });
    yield put({
      type: "SHOW_ALERT",
      value: {
        type: "danger",
        title: "Falied save",
        message: "Falied save book",
      },
    });
    yield put({
      type: "CREATE_BOOK_ERROR",
    });
  }
}

function* getBookById(payload) {
  try {
    yield put({
      type: "READ_BOOK_REQUESTING",
    });
    yield put({
      type: "SHOW_LOADING",
    });
    const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/books/${payload.value.id}`;

    const headers = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    const response = yield call(request, requestURL, headers);

    yield put({
      type: "HIDE_LOADING",
    });

    yield put({
      type: "READ_BOOK_SUCCESS",
      value: response,
    });
  } catch (error) {
    yield put({
      type: "HIDE_LOADING",
    });
    yield put({
      type: "READ_BOOK_ERROR",
    });
  }
}

function* deleteBookById(payload) {
  try {
    yield put({
      type: "DELETE_BOOK_REQUESTING",
    });
    yield put({
      type: "SHOW_LOADING",
    });
    const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/books/${payload.value.idBook}`;

    const headers = {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(payload.value),
    };

    const response = yield call(request, requestURL, headers);

    yield put({
      type: "HIDE_LOADING",
    });

    yield put({
      type: "SHOW_ALERT",
      value: {
        type: "success",
        title: "Successful disable",
        message: "Successful disable book",
      },
    });

    yield put({
      type: "DELETE_BOOK_SUCCESS",
      value: response,
    });
  } catch (error) {
    yield put({
      type: "HIDE_LOADING",
    });
    yield put({
      type: "SHOW_ALERT",
      value: {
        type: "danger",
        title: "Falied disable",
        message: "Falied disable book",
      },
    });
    yield put({
      type: "DELETE_BOOK_ERROR",
    });
  }
}

function* updateBook(payload) {
  try {
    yield put({
      type: "UPDATE_BOOK_REQUESTING",
    });

    yield put({
      type: "SHOW_LOADING",
    });

    const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/books/${payload.value.id}`;

    const headers = {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(payload.value),
    };

    const response = yield call(request, requestURL, headers);

    yield put({
      type: "HIDE_LOADING",
    });

    yield put({
      type: "SHOW_ALERT",
      value: {
        type: "success",
        title: "Successful update",
        message: "Successful update book",
      },
    });

    yield put({
      type: "UPDATE_BOOK_SUCCESS",
      value: response,
    });
  } catch (error) {
    yield put({
      type: "HIDE_LOADING",
    });
    yield put({
      type: "SHOW_ALERT",
      value: {
        type: "danger",
        title: "Falied update",
        message: "Falied update book",
      },
    });
    yield put({
      type: "UPDATE_BOOK_ERROR",
    });
  }
}

export function* watchBook() {
  yield takeLatest("FETCH_BOOKS_REQUEST", getAllBooks);
  yield takeLatest("CREATE_BOOK_REQUEST", postBook);
  yield takeLatest("READ_BOOK_REQUEST", getBookById);
  yield takeLatest("DELETE_BOOK_REQUEST", deleteBookById);
  yield takeLatest("UPDATE_BOOK_REQUEST", updateBook);
}

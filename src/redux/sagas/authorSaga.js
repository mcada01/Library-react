import { call, put, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";

function* getAllAuthors(payload) {
  try {
    yield put({
      type: "FETCH_AUTHORS_REQUESTING",
    });

    yield put({
      type: "SHOW_LOADING",
    });

    const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/authors?page=${
      payload.value.page
    }&search=${payload.value.search}&offset=${payload.value.offset}`;
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
      type: "FETCH_AUTHOR_SUCCESS",
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
        message: "Falied load authors",
      },
    });
    yield put({
      type: "FETCH_AUTHOR_ERROR",
    });
  }
}

function* postAuthor(payload) {
  try {
    yield put({ type: "CREATE_AUTHOR_REQUESTING" });
    yield put({
      type: "SHOW_LOADING",
    });
    const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/authors`;

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
        message: "Successful save author",
      },
    });

    yield put({
      type: "CREATE_AUTHOR_SUCCESS",
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
        message: "Falied save author",
      },
    });
    yield put({
      type: "CREATE_AUTHOR_ERROR",
    });
  }
}

function* getAuthorById(payload) {
  try {
    yield put({
      type: "READ_AUTHOR_REQUESTING",
    });
    yield put({
      type: "SHOW_LOADING",
    });
    const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/authors/${payload.value.id}`;

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
      type: "READ_AUTHOR_SUCCESS",
      value: response,
    });
  } catch (error) {
    yield put({
      type: "HIDE_LOADING",
    });
    yield put({
      type: "READ_AUTHOR_ERROR",
    });
  }
}

function* deleteAuthorById(payload) {
  try {
    yield put({
      type: "DELETE_AUTHOR_REQUESTING",
    });
    yield put({
      type: "SHOW_LOADING",
    });
    const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/authors/${payload.value.idAuthor}`;

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
        message: "Successful disable author",
      },
    });

    yield put({
      type: "DELETE_AUTHOR_SUCCESS",
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
        message: "Falied disable author",
      },
    });
    yield put({
      type: "DELETE_AUTHOR_ERROR",
    });
  }
}

function* updateAuthor(payload) {
  try {
    yield put({
      type: "UPDATE_AUTHOR_REQUESTING",
    });

    yield put({
      type: "SHOW_LOADING",
    });

    const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/authors/${payload.value.id}`;

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
        message: "Successful update author",
      },
    });

    yield put({
      type: "UPDATE_AUTHOR_SUCCESS",
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
        message: "Falied update author",
      },
    });
    yield put({
      type: "UPDATE_AUTHOR_ERROR",
    });
  }
}

export function* watchAuthor() {
  yield takeLatest("FETCH_AUTHORS_REQUEST", getAllAuthors);
  yield takeLatest("CREATE_AUTHOR_REQUEST", postAuthor);
  yield takeLatest("READ_AUTHOR_REQUEST", getAuthorById);
  yield takeLatest("DELETE_AUTHOR_REQUEST", deleteAuthorById);
  yield takeLatest("UPDATE_AUTHOR_REQUEST", updateAuthor);
}

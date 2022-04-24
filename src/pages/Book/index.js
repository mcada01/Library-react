import React, { forwardRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Grid from "../../components/Grid";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

const Book = ({
  reduxGetBooks,
  books,
  reduxGetBook,
  book,
  reduxPostBook,
  rowEdited,
  reduxDeleteBook,
  rowDeleted,
  reduxPatchBook,
  rowUpdated,
  reduxResetBookForm,
  reduxGetAuthors,
  authors,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(10);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    reduxResetBookForm();
    setShow(false);
  };
  const handleShow = () => {
    reduxGetAuthors({
      page: 1,
      offset: offset,
      search: "",
    });
    reduxResetBookForm();
    reset();
    setShow(true);
  };
  const [search, setSearch] = useState("");

  const columns = [
    {
      title: "ID",
      render: (rowData) => {
        return <span>{rowData.idBook}</span>;
      },
    },
    {
      title: "Nombre",
      render: (rowData) => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: "Autor",
      render: (rowData) => {
        return (
          <span>
            {rowData.author.firstName +
              " " +
              (rowData.author.secondName ? rowData.author.secondName : "") +
              rowData.author.lastName + " " +
              (rowData.author.secondLastName
                ? rowData.author.secondLastName
                : "")}
          </span>
        );
      },
    },
    {
      title: "Opciones",
      render: (rowData) => {
        return (
          <>
            <button
              title="Editar"
              className="btn btn-primary btn-sm  btn-circle mr-2"
              type="button"
              onClick={(e) => handleOpen(rowData)}
            >
              <i className="fas fa-edit fa-xs"></i>
            </button>
            <button
              title="Borrar"
              className="btn btn-danger btn-sm btn-circle mr-2"
              type="button"
              onClick={(e) => handleDelete(rowData)}
            >
              <i className="fas fa-times-circle fa-xs"></i>
            </button>
          </>
        );
      },
    },
  ];

  const handleOpen = (row) => {
    reduxGetBook({
      id: row.idBook,
    });
  };

  useEffect(() => {
    if (rowEdited) {
      setShow(true);
      setValue("name", rowEdited.name);
      setValue("idAuthor", rowEdited.idAuthor);
    }
  }, [rowEdited]);

  const handleDelete = (row) => {
    reduxDeleteBook(row);
  };

  useEffect(() => {
    reduxGetBooks({
      page: 1,
      offset: offset,
      search: "",
    });
    reduxGetAuthors({
      page: 1,
      offset: 10000,
      search: "",
    });
  }, []);

  useEffect(() => {
    reduxGetBooks({
      page: currentPage,
      offset: offset,
      search: search,
    });
  }, [currentPage]);

  const onSubmit = (data) => {
    if (data.idAuthor == "") {
      return;
    }
    if (rowEdited) {
      reduxPatchBook({
        ...data,
        id: rowEdited.idBook,
      });
    } else {
      reduxPostBook(data);
    }
    reset();
    reduxResetBookForm();
    setShow(false);
  };

  useEffect(() => {
    if (book || rowUpdated || rowDeleted) {
      if (
        (book && book.message == undefined) ||
        (rowUpdated && rowUpdated.message == undefined) ||
        rowDeleted
      ) {
        reduxGetBooks({
          page: currentPage,
          offset: offset,
          search: search,
        });
        reduxResetBookForm();
        setShow(false);
      }
    }
  }, [book, rowUpdated, rowDeleted]);

  return (
    <div>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center mb-1">
                <h1
                  className="h3 mb-0 text-gray-800 mr-3"
                  style={{ margin: "10px" }}
                >
                  Libros
                </h1>
                <button
                  title="Nuevo"
                  className="btn btn-primary btn-circle"
                  type="button"
                  onClick={handleShow}
                >
                  <i className="fas fa-plus fa-sm"></i>
                </button>
              </div>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Existencia de libros
                  </h6>
                </div>
                <div className="card-body">
                  <Grid
                    cols={columns}
                    data={
                      books && Object.keys(books).length > 0 ? books.items : []
                    }
                    page={
                      books && Object.keys(books).length > 0
                        ? Number(books.page)
                        : currentPage
                    }
                    pages={
                      books && Object.keys(books).length > 0
                        ? Number(books.totalPages)
                        : 0
                    }
                    onChangePage={(page) => setCurrentPage(page)}
                    onChangeRange={(value) => {
                      setOffset(value);
                      reduxGetBooks({
                        page: 1,
                        offset: value,
                        search: search,
                      });
                    }}
                    defaultValue={search}
                    onChangeSearch={(value) => {
                      setSearch(value);
                      reduxGetBooks({
                        page: 1,
                        offset: offset,
                        search: value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Header closeButton>
              <Modal.Title>
                {rowEdited ? "Editar" : "Registrar"} libro
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col s12 m6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nombre del libro
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`form-control form-control-user ${
                        errors.name && "is-invalid"
                      }`}
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="invalid-feedback">
                        El nombre es requerido
                      </span>
                    )}
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="form-group">
                    <label htmlFor="idAuthor" className="form-label">
                      Autor
                    </label>
                    <select
                      {...register("idAuthor")}
                      id="idAuthor"
                      className={`custom-select ${
                        getValues("idAuthor") == "" && "is-invalid"
                      }`}
                    >
                      <option value={""}>Seleccionar…</option>
                      {authors &&
                        Object.keys(authors).length > 0 &&
                        authors.items.map((ele, key) => (
                          <option key={key} value={ele.idAuthor}>
                            {ele.firstName +
                              " " +
                              (ele.secondName ? ele.secondName : "") +
                              " " +
                              ele.lastName +
                              " " +
                              (ele.secondLastName ? ele.secondLastName : "")}
                          </option>
                        ))}
                    </select>
                    {getValues("idAuthor") == "" && (
                      <span className="invalid-feedback">
                        El autor es requerido
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.bookState.books,
    book: state.bookState.book,
    rowEdited: state.bookState.rowEdited,
    rowDeleted: state.bookState.rowDeleted,
    rowUpdated: state.bookState.rowUpdated,
    authors: state.authorState.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxGetBooks: (payload) =>
      dispatch({
        type: "FETCH_BOOKS_REQUEST",
        value: payload,
      }),
    reduxPostBook: (payload) =>
      dispatch({
        type: "CREATE_BOOK_REQUEST",
        value: payload,
      }),
    reduxGetBook: (payload) =>
      dispatch({
        type: "READ_BOOK_REQUEST",
        value: payload,
      }),
    reduxDeleteBook: (payload) =>
      dispatch({
        type: "DELETE_BOOK_REQUEST",
        value: payload,
      }),
    reduxPatchBook: (payload) =>
      dispatch({
        type: "UPDATE_BOOK_REQUEST",
        value: payload,
      }),
    reduxResetBookForm: () =>
      dispatch({
        type: "RESET_BOOK_FORM",
      }),
    reduxGetAuthors: (payload) =>
      dispatch({
        type: "FETCH_AUTHORS_REQUEST",
        value: payload,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);

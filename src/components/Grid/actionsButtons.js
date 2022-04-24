import React from "react";


export default function ActionsButtons({rowData, handleOpen, handleDelete, handleActive}) {
    return (
        <>
            {!rowData.isActive ? (
                <>
                 {/*   <Show when="feature:edit-addressCardinal">*/}
                        <button
                            title="Editar"
                            className="btn btn-primary btn-sm  btn-circle mr-2"
                            type="button"
                            onClick={(e) => handleOpen(rowData)}
                        >
                            <i className="fas fa-edit fa-xs"></i>
                        </button>
            {/*        </Show> */}
                {/*    <Show when="feature:disabled-addressCardinal">*/}
                        <button
                            title="Desactivar"
                            className="btn btn-danger btn-sm btn-circle"
                            type="button"
                            onClick={(e) => handleDelete(rowData)}
                        >
                            <i className="fas fa-times-circle fa-xs"></i>
                        </button>
            {/*        </Show>*/}
                </>
            ) : (
              /*  <Show when="feature:enabled-addressCardinal">*/
                    <button
                        title="Activar"
                        className="btn btn-primary btn-sm  btn-circle mr-2"
                        type="button"
                        onClick={(e) => handleActive(rowData)}
                    >
                        <i className="fas fa-check-circle fa-xs"></i>
                    </button>
             /*   </Show>*/
            )}
        </>
    )
}
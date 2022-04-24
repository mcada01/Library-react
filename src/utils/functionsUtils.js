
export const LabelByState = (state) => {
    switch (state) {
        case -1:
            return <span className="badge badge-pill badge-danger">Falló</span>;
            break;
        case 1:
            return (
                <span className="badge badge-pill badge-success">Procesada</span>
            );
            break;
        case 2:
            return (
                <span className="badge badge-pill badge-success">
                Asignada a un operador
              </span>
            );
            break;
        case 3:
            return (
                <span className="badge badge-pill badge-warning">Sin guía</span>
            );
            break;
        case 4:
            return (
                <span className="badge badge-pill badge-light">
                En tránsito a ciudad destino
              </span>
            );
            break;
        case 5:
            return (
                <span className="badge badge-pill badge-light">
                Asignada a un mensajero
              </span>
            );
            break;
        case 6:
            return (
                <span className="badge badge-pill badge-light">
                En ruta / distribución
              </span>
            );
            break;
        case 7:
            return (
                <span className="badge badge-pill badge-light">Entregado</span>
            );
            break;
        case 8:
            return (
                <span className="badge badge-pill badge-light">No entregado</span>
            );
            break;
        case 9:
            return (
                <span className="badge badge-pill badge-light">Devuelto</span>
            );
            break;
        case 10:
            return (
                <span className="badge badge-pill badge-light">
                Devuelto al remitente
              </span>
            );
            break;
        case 11:
            return (
                <span className="badge badge-pill badge-light">Alistamiento</span>
            );
            break;
        default:
            break;
    }
}
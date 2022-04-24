export class AddressStatus {
    static FALLO = -1;
    static ASIGNADA = 2;
    static GUIA = 3;
    static EN_TRANSITO_A_CIUDAD_DESTINO = 4;
    static ASIGNADA_MENSAJERO = 5;
    static INICIADO = 6;
    static ENTREGADO = 7;
    static NO_ENTREGADO = 8;
    static DEVUELTO = 9;
    static DEVUELTO_REMITENTE = 10;

}

export class AddressStatusLabel {
    static FALLO = "Falló";
    static ASIGNADA = "Asignada";
    static GUIA = "Guía";
    static EN_TRANSITO_A_CIUDAD_DESTINO = "En tránsito a ciudad destino";
    static ASIGNADA_MENSAJERO = "Asignada a un mensajero";
    static INICIADO = "Iniciado";
    static ENTREGADO = "Entregado";
    static NO_ENTREGADO = "No entregado";
    static DEVUELTO = "Devuelto";
    static DEVUELTO_REMITENTE = "Devuelto al remitente";

}

export class ConfirmacionCierreEnum {
    static PAQUETE_COMPLETO = 'PAQUETE_COMPLETO';
    static PAQUETE_INCOMPLETO = 'PAQUETE_INCOMPLETO';
    static PAQUETE_NO_ENTREGADO  = 'PAQUETE_NO_ENTREGADO';
    static EFECTIVO_COMPLETO = 'EFECTIVO_COMPLETO';
    static EFECTIVO_INCOMPLETO = 'EFECTIVO_INCOMPLETO';
    static EFECTIVO_NO_ENTREGADO  = 'EFECTIVO_NO_ENTREGADO';
}

export const EstadoEnum = {
        PAQUETE_COMPLETO : 'Paquete completo',
        PAQUETE_INCOMPLETO : 'Paquete incompleto',
        PAQUETE_NO_ENTREGADO  : 'Paquete no Entregado',
        EFECTIVO_COMPLETO : 'Efectivo completo',
        EFECTIVO_INCOMPLETO : 'Efectivo incompleto',
        EFECTIVO_NO_ENTREGADO  : 'Efectivo no Entregado',
}


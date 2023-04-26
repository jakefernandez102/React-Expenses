

export const generarID = () => {
    const random = Math.random().toString( 36 ).substring( 2 );
    const fecha = Date.now().toString( 36 );

    return random + fecha;
};
export const formatearMonto = ( monto ) => {
    return monto.toLocaleString( 'es-US', {
        style: 'currency',
        currency: 'USD'
    } );
};

export const formatearFecha = ( fecha ) => {
    const fechaNueva = new Date( fecha );
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };
    return fechaNueva.toLocaleDateString( 'en-US', opciones );
};
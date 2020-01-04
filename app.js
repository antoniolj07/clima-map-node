const lugar = require('./lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Escribir la direccion del lugar que desea ver el clima',
        demand: true
    }
}).argv;

//lugar.getLugar(argv.direccion)
//    .then(console.log);


//clima.getClima(47.840000, 11.960000)
//    .then(console.log)
//    .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const localizacion = await lugar.getLugar(direccion);

        const temperatura = await clima.getClima(localizacion.lat, localizacion.lng);

        return `El clima de ${localizacion.dir} es de ${temperatura}.`;

    } catch (error) {
        console.log(`No se encontro un clima para ${direccion}.`);
    }

}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
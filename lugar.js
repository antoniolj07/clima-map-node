const axios = require('axios');


const getLugar = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '995d44d9fcmshd436cc12318d1d8p1b5816jsn431ddc1cb4da' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontro ningun lugar con el nombre ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    /*   instance.get()
           .then(resp => {
               console.log(resp.data.Results[0]);
           })
           .catch(err => {
               console.log('ERROR!!!!', err);
           })
    */
    return {
        dir,
        lat,
        lng,
    }

}
module.exports = {
    getLugar
}
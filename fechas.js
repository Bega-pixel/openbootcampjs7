console.log(Date());
const hoy = new Date();
const nuevaFecha = new Date("octubre 13 ,1992");
const fecha = new Date(1995,1,12);

console.log(fecha)
console.log(fecha > hoy);

const diaFecha = fecha.getDate()
const mesFecha = fecha.getMonth() +1 ;
const yearFehca = fecha.getFullYear();



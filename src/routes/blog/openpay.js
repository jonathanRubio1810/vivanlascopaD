import OpenPay from 'openpay';

// Configura OpenPay con tus credenciales
const openpay = OpenPay.init({
  id: 'tu_id_de_comercio',
  privateKey: 'tu_clave_privada',
  production: false // Usa `true` si estás en producción
});

export default openpay;

// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const getCart = (userSession) => axios.get('/cart/' + userSession)
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default getCart;
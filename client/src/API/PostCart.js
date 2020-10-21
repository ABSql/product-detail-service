// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const addToCart = (userSessionData) => axios.post('/cart/', userSessionData)
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default addToCart;
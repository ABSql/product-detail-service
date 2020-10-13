// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const getCart = (userSession) => axios.get('http://52.26.193.201:3000/cart/' + userSession)
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default getCart;
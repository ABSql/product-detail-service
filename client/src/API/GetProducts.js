// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const getProducts = () => axios.get('http://52.26.193.201:3000/products/list')
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default getProducts;
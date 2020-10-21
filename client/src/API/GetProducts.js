// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const getProducts = () => axios.get('/products/list')
  .then((res) => console.log('here is what were getting: ', res.data.fields))
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default getProducts;
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const getProductInfo = (productId) => axios.get('http://52.26.193.201:3000/products/' + productId)
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default getProductInfo;
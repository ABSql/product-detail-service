// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const getProductInfo = (productId) => axios.get('/products/' + productId)
  .then((res) => res)
  .catch((err) => { throw err; });

export default getProductInfo;
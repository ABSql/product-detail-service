// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const getProductStyles = (productId) => axios.get('/products/' + productId + '/styles')
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default getProductStyles;
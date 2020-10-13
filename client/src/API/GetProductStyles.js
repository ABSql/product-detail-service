// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const getProductStyles = (productId) => axios.get('http://52.26.193.201:3000/products/' + productId + '/styles')
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default getProductStyles;
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const getRatings = (productId) => axios.get('/reviews/' + productId + '/meta')
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default getRatings;
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const getRatings = (productId) => axios.get('http://52.26.193.201:3000/reviews/' + productId + '/meta')
  .then((res) => res.data)
  .catch((err) => { throw err; });

export default getRatings;
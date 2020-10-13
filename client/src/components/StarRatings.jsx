import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';

const StarRating = ({ratings}) => {
  if (ratings.ratings !== undefined) {
  const ratingsObj = ratings.ratings;
  const getAverageStarRating = () => {
    const weightedSum = (
      (1 * ratingsObj[1]) 
    + (2 * ratingsObj[2])
    + (3 * ratingsObj[3]) 
    + (4 * ratingsObj[4]) 
    + (5 * ratingsObj[5])
    );

    const total = ratingsObj[1] 
    + ratingsObj[2] 
    + ratingsObj[3] 
    + ratingsObj[4] 
    + ratingsObj[5];

    const avgStarVal = (weightedSum / total);

    return avgStarVal.toFixed(1);
  };

  return (
    <div>
      <Grid container />
      <div style={{ padding: 0 }}>
        <Grid item xs={2} lg={2}>
          <Rating name="half-rating-read" precision={0.25} value={Number(getAverageStarRating())} readOnly />
        </Grid>
      </div>
    </div>
  )
  } else {
      return (<div>Loading...</div>)
    }
};

export default StarRating;
import React from 'react';
import Box from '@material-ui/core/Box';
import StarRating from './StarRatings';
import { 
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon, 
  TumblrShareButton, TumblrIcon, 
  RedditShareButton, RedditIcon } from 'react-share';

const ProductDescription = ({selected, style, ratings}) => {
  const url = "https://www.youtube.com/watch?v=siwpn14IE7E";

  const SalePriceHandler = () => {
    if (style.id !== null && style.sale_price > 0) {
      return (
        <div><strike>${style.original_price}</strike> ${style.sale_price}</div>
      );
    } else {
      return (
        <div>${style.original_price}</div>
      );
    };
  };

  const ShareFacebook = () => {
    return (
      <Box p={1}>
      <FacebookShareButton
        url={url}
        quote={selected.slogan}
        hashtag="#behygenic"
        className="facebook-share-button">
          <FacebookIcon size={26} round={true}/>
        </FacebookShareButton>
      </Box>
    );
  };
  
  const ShareReddit = () => {
    return (
      <Box p={1}>
      <RedditShareButton
        url={url}
        quote={selected.slogan}
        hashtag="#behygenic"
        className="reddit-share-button">
          <RedditIcon size={26} round={true}/>
        </RedditShareButton>
        </Box>
    );
  };

  const ShareTwitter = () => {
    return (
      <Box p={1}>
      <TwitterShareButton
        url={url}
        quote={selected.slogan}
        hashtag="#behygenic"
        className="twitter-share-button">
          <TwitterIcon size={26} round={true}/>
        </TwitterShareButton>
        </Box>
    );
  };

  const ShareTumblr = () => {
    return (
      <Box p={1}>
      <TumblrShareButton
        url={url}
        quote={selected.slogan}
        hashtag="#behygenic"
        className="tumblr-share-button">
          <TumblrIcon size={26} round={true}/>
        </TumblrShareButton>
      </Box>
    );
  };

  if (style.default_price !== null) {
    return ( 
      <>
        <div class="container">
          <div class="row">
            <div class="col-md-3>">
              {ShareFacebook()} 
            </div>
            <div class="col-md-3>">
              {ShareTwitter()} 
            </div>
            <div class="col-md-3>">
              {ShareReddit()} 
            </div>
            <div class="col-md-3>">
              {ShareTumblr()} 
            </div>
          </div>
        </div>
          <StarRating ratings={ratings}/>
        <div>
          <p><b>Category &gt; </b>{selected.category}</p>
        </div>
        <div> 
          <h3>{selected.name}</h3>
        </div>
        <div>
          <p><b>Current style &gt; </b>{style.name}</p> 
        </div>
        <div>
          {SalePriceHandler()}
        </div> 
        </>
    );
  } else {
    return (<div></div>);
  };
};

export default ProductDescription;
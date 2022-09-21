import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

function StarRating({ movieObj }) {
  let ratingArray = new Array();
  let fullGlowStars = 0;
  let halfGlowStar = 0;
  //7.5
  ratingArray = movieObj.Rating.toString().split(".");
  if (ratingArray.length > 1) {
    fullGlowStars = ratingArray[0];
    halfGlowStar = ratingArray[1];
  } else {
    fullGlowStars = ratingArray[0];
  }

  return (
    <body>
      {[...Array(10)].map(() => {
        if (fullGlowStars > 0) {
          fullGlowStars--;
          return <FaStar color="orange" />;
        } else if (halfGlowStar > 0) {
          halfGlowStar = 0;
          return <FaStarHalf color="orange" />;
        } else {
          return <FaStar color="light grey" />;
        }
      })}
    </body>
  );
}

export default StarRating;

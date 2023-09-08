import { useState } from "react";
import React from 'react';
interface StarRatingProps {
  totalStar?: number,
  color?: string,
  width?: number,
  height?: number,
  rating?: number,
  setRating?: (value: React.SetStateAction<number>) => void
}
const StarRating: React.FC<StarRatingProps> = ({
  totalStar = 5,
  color = "yellow",
  width = 40,
  height = 48,
  rating = 0,
  setRating = () => {}
}) => {
  const [clickedStar, setClicketStar] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);
  function onRate(value: number) {
      setClicketStar(value);
      setRating(value);
  }
  return (
    <>
      {Array(totalStar)
        .fill(0)
        .map((_, i) => (
          <Star
            key={i}
            color={color}
            width={width}
            height={height}
            isFull={hoverRating ? i >= hoverRating : i >= clickedStar}
            onRate={() => onRate(i + 1)}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
          />
        ))}
      {hoverRating || clickedStar || ""}
    </>
  );
};

interface StarProps {
  color: string;
  width: number;
  height: number;
  isFull: boolean;
  onRate: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
}
const Star: React.FC<StarProps> = ({
  color,
  width,
  height,
  isFull,
  onRate,
  onHoverIn,
  onHoverOut,
}) =>
  isFull ? (
    <svg
      xmlns="http://www.w3.org/1500/svg"
      width={width}
      height={height}
      fill="currentColor"
      className="bi bi-star"
      viewBox="0 0 16 16"
      id="IconChangeColor"
      role="btn"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <path
        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        id="mainIconPathAttribute"
        fill={color}
      ></path>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/1500/svg"
      width={width}
      height={height}
      fill="currentColor"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
      id="IconChangeColor"
      role="btn"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <path
        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
        id="mainIconPathAttribute"
        fill={color}
      ></path>
    </svg>
  );

export default StarRating;

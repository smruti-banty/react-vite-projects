import React, { ReactNode, useState } from "react";
interface TextExpandProps {
  children: ReactNode;
  intialDisplayLetter?: number;
}
const TextExpand: React.FC<TextExpandProps> = ({
  children,
  intialDisplayLetter = 200,
}) => {
  const [isShowMore, setShowMore] = useState(false);
  const data = children?.toLocaleString().substring(0,intialDisplayLetter);
  function onClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault
    setShowMore((isShowMore) => !isShowMore);
  }
  return (
    <>
      {isShowMore ? children : data && data.length > 0 ? data + '...' : ''} 
      <a href="#" className="link" onClick={onClick}>
        {isShowMore ? " less" : " more"}
      </a>
    </>
  );
};

export default TextExpand;

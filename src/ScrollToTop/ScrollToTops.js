import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import './Scroll.css'
const ScrollToTops = () => {
  return (
   
      <div>
      <ScrollToTop
            smooth
            color="#6f00ff"
            className="hover:bg-yellow-500 p-2 rounded"
          />
    </div>
    
  );
};

export default ScrollToTops;
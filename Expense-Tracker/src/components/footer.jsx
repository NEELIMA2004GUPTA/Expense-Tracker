import React, { useEffect, useState } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer); 
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <footer className="footer">
      <p>{formattedDate} | {formattedTime}</p>
      <p className="thought">“A budget well-tracked is a step closer to financial freedom.”</p>
    </footer>
  );
};

export default Footer;

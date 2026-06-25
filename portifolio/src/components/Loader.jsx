import { useEffect, useState } from "react";
import "../Css/Loader.css";

function Loader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHiding(true), 1800);
    const remove = setTimeout(() => setGone(true), 2400);
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${hiding ? "loader-hide" : ""}`}>
      <svg width="48" height="48" viewBox="0 0 100 100">
        <polygon
          points="50 3,93 27,93 73,50 97,7 73,7 27"
          fill="none"
          stroke="#b388ff"
          strokeWidth="4"
          className="loader-hex"
        />
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fill="#b388ff"
          fontSize="36"
          fontWeight="800"
          fontFamily="Fira Code"
        >
          T
        </text>
      </svg>
    </div>
  );
}

export default Loader;

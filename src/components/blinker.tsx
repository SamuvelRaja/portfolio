import { useState, useEffect } from 'react';
import '../css/explore.css';

const Blinker = ({texts}:any) => {

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <div className="typewriter my-1">
      <span>{`${texts[index].substring(0, subIndex)}`}</span>
      <span className="cursor">{blink ? "|" : " "}</span>
    </div>
  );
};

export default Blinker;
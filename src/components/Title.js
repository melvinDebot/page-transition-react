import React, {useRef, useEffect} from 'react';
import {gsap, Power3} from 'gsap';

const Title = ({ lineContent, lineContent2 }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: .8,
      ease: Power3.out,
      y:64,
      stragger: {
        amount: 0.15
      }
    })

  }, [line1, line2])


  return(
    <h1 className="page-title">
      <div className="line-wrap">
        <div className="line" ref={el => (line1 = el)}>
          {lineContent}
        </div>
      </div>
      <div className="line-wrap">
        <div className="line" ref={el => (line2 = el)}>
          {lineContent2}
        </div>
      </div>
    </h1>
  )
}

export default Title;
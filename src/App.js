import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import "./App.scss";

import arrow from "./images/arrow-right.svg";
import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: .8 });

  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    // Content Vars
    const headLineFirst = content.children[0].children[0];
    const headLineSecond = headLineFirst.nextSibling;
    const headLineThird = headLineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Removing Initial Flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    // Images Animation
    tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
      .from(girlImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
      .from(boyImage, 1.2, { y: 1280, ease: Power3.easeOut }, .2)
      .from(boyImage.lastElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)

    // Content Animation
    tl.staggerFrom([headLineFirst.children, headLineSecond.children, headLineThird.children], 1, {
      y: 44,
      ease: Power3.easeInOut,
      delay: .8
    }, .15, 'Start')
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)

  }, [tl]);

  return (
    <div className='hero' ref={el => app = el}>
      <div className='container'>
        <div className='hero-inner'>
          <div className='hero-content'>
            <div className='hero-content-inner' ref={el => content = el}>
              <h1>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    Relieving the burden
                  </div>
                </div>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    of disease caused
                  </div>
                </div>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className='btn-row'>
                <button className='explore-button'>
                  Explore
                  <div className='arrow-icon'>
                    <img src={arrow} alt='row' />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='hero-images'>
            <div className='hero-images-inner' ref={el => images = el}>
              <div className='hero-image girl'>
                <img src={imgGirl} alt='girl' />
              </div>
              <div className='hero-image boy'>
                <img src={imgBoy} alt='boy' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

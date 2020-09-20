import React from "react";

import arrow from "./images/arrow-right.svg";
import "./App.scss";

import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";

function App() {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero-inner'>
          <div className='hero-content'>
            <div className='hero-content-inner'>
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
            <div className='hero-images-inner'>
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

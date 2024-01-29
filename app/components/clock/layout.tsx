import React from 'react';
import './globals.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faRefresh } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  return (
    <>
        <div className="browser-frame chrome">
          <div className="frame-bar">
            <div className="tab-holder">
              <div className="tab">
                <div className="inner "></div>
                <span>네이비즘 서버시간</span>
              </div>
            </div>
          </div>
          <div className="top-bar">
          <div>
          <FontAwesomeIcon icon={faArrowLeft} className="left-bt" size="xs"/>
          <FontAwesomeIcon icon={faArrowRight} className="left-bt" size="xs"/>
          <FontAwesomeIcon icon={faRefresh} className="left-bt" size="xs"/>
          </div>
            <div className="address-field fa fa-star-o"><span>  https://time.navyism.com/</span></div>
            <div className="menu-bt">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;

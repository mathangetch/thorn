import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import './NotFound.styles.scss';

const NotFound = () => {
  return (
    <Fragment>
      <div className='page'>
        <div className='box'>
          <div className='box__ghost'>
            <div className='symbol' />
            <div className='symbol' />
            <div className='symbol' />
            <div className='symbol' />
            <div className='symbol' />
            <div className='symbol' />

            
            <div className='box__ghost-shadow' />
          </div>
          <div className='box__description'>
            <div className='box__description-container'>
              <div className='box__description-title fc-black-800'>oops!</div>
              <div className='box__description-text fc-black-500'>
                Page not found
              </div>
            </div>
            <Link to='/' className='box__button'>
              Back to home 
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;

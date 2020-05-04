import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {

  render(){
    return (
      <div className ='footer'>
        {this.props.footer}
        <div className='jokeDiv' >
          <p>Does a green candle burn longer than a pink candle?</p>
          <p>No, they both burn shorter.</p>
        </div>
      </div>
    );
  };
};

Footer.propTypes = {
  footer: PropTypes.string.isRequired,
};

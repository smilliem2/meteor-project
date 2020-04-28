import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
  render(){
    return (
      <div className ='footer'>
        {this.props.footer}
      </div>
    );
  };
};

Footer.propTypes = {
  footer: PropTypes.string.isRequired,
};

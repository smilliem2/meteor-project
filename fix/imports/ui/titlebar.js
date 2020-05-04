import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBarExample extends React.Component {
  renderModerator() {
    if(this.props.mod) {
      return <p className = 'title-bar__moderator'>moderator: {this.props.mod}</p>
    }
    else {
      return <p className = 'title-bar__moderator'>moderator: unknown</p>
    }
  };

  render(){
    return (
      <div className = 'wrapper'>
        <div className = 'title-bar'> <h1>{this.props.title}</h1>
        {this.renderModerator()}</div>
      </div>
    );
  };
};

TitleBarExample.propTypes = {
  title: PropTypes.string.isRequired,
  mod: PropTypes.string,
};

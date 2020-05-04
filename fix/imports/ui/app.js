import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './titlebar.js';
import AddTopic from './addtopic.js';
import TopicList from './topiclist.js';
import Footer from './footer.js';

export default class App extends React.Component {
  render() {
    return (
      <>
      <TitleBar
        title = {this.props.passedPropTitle}
        mod = {this.props.passedPropMod}/>
        <div className = 'wrapper'>
          <AddTopic/>
          <TopicList passed_posts = {this.props.passedPropAllPosts}/>
        </div>
        <Footer footer = {this.props.footer}/>
      </>
    );
  };
};

App.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired,
  footer: PropTypes.string.isRequired,
};

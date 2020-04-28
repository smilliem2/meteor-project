import React from 'react';
import PropTypes from 'prop-types';
import {up_access} from './../api/user_posts.js';


export default class RenderPost extends React.Component {

  render() {
    return (
      <>
      <div key={this.props.post_prop_obj._id} className = 'singleItemStyle'>
      <div className = 'post'>
        <div>
        <h3 className = 'post__topic'>{this.props.post_prop_obj.topic}</h3>
        <p className = 'post__stats'>have {this.props.post_prop_obj.votes} vote[s] {' '}</p>
        </div>

        <div className= 'post__actions'>
        <button className = 'button' onClick = {()=>
          {up_access.update({_id:this.props.post_prop_obj._id}, {$inc: {votes: 1}})}
        }>+1</button>
        <button className = 'button' onClick = {()=>
          {up_access.update({_id:this.props.post_prop_obj._id}, {$inc: {votes: -1}})}
        }>-1</button>
        <button className = 'button' onClick = {()=>
          {up_access.remove({_id:this.props.post_prop_obj._id})}
        }>X</button>
        </div>
      </div>
      </div>
      </>
    );
  };
};

RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};

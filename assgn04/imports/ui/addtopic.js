import React from 'react';
import {up_access} from './../api/user_posts.js';

export default class AddTopic extends React.Component {

  processFormData(event) {
    event.preventDefault();
    let newTopic = event.target.formInputName.value;
    if(newTopic){
      event.target.formInputName.value='';

      up_access.insert({
        topic: newTopic,
        votes: 0,
      });
    };
  };

  render(){
    return (
      <div className = 'singleItemStyle'>
        <form className = 'form' onSubmit={this.processFormData.bind(this)}>
        <input className = 'form__input' type='text' name='formInputName' placeholder='Topic Name'/>
        <button className = 'button'>Add Topic</button>
        </form>
      </div>
    );
  };
};

import React from 'react';
import {up_access} from './../api/user_posts.js';

export default class AddTopic extends React.Component {

  processFormData(event) {
    event.preventDefault();
    let newTopic = event.target.formInputName.value;
    let description = event.target.formInputDesc.value;
    if(newTopic && description){
      event.target.formInputName.value='';
      event.target.formInputDesc.value='';

      up_access.insert({
        topic: newTopic,
        votes: 0,
        desc: description,
        reply: '',
      });
    }
    else if (newTopic && !description) {
      event.target.formInputName.value='';

      up_access.insert({
        topic: newTopic,
        votes: 0,
        desc: '',
        reply: '',
      });
    }
  };

  render(){
    return (
      <div className = 'singleItemStyle'>
        <form className = 'form' onSubmit={this.processFormData.bind(this)}>
        <input className = 'form__input' type='text' name='formInputName' placeholder='Musician Name'/>
        <br/>
        <div className = 'form__desc'>
            <input className = 'form__input' type='text' name='formInputDesc' placeholder='Why do you like them?'/>
        </div>
        <br/>
        <button className = 'button'>Add Musician</button>
        </form>
      </div>
    );
  };
};

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {up_access} from './../imports/api/user_posts.js';
import App from './../imports/ui/app.js';


Meteor.startup(() => {

  Tracker.autorun(() => {
    const allPostsInDB = up_access.find().fetch();
    let title = 'Musical Rankings';

    ReactDOM.render(<App passedPropTitle={title}
        passedPropMod={'miranda'}
        passedPropAllPosts={allPostsInDB}
        footer={'CSCI 441'}/>,
        document.getElementById('content')
    );
  });
});

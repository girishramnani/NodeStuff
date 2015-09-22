/**
 * Created by girish on 9/22/15.
 */


Meteor.subscribe("posts");

Template.posts.helpers({
    posts: function() {
        return Posts.find({},{sort: {createdAt:-1}});
    }
})

Meteor.publish("posts",function(){
    return Posts.find();
})

Meteor.publish("ProfileImages",function(){
    return ProfileImages.find();
})

Meteor.publish("userImages",function(){
    return UserImages.find();
})

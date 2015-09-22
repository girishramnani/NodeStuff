/**
 * Created by girish on 9/20/15.
 */


Template.profile.events({
    'submit .edit-profile' : function(evt){
        var file = $("#imageProfile").get(0).files[0];
        evt.preventDefault();

        if(file){
            fsfile = new FS.File(file);
            ProfileImages.insert(fsfile,function(err,results){
                if(err){
                    throw new Meteor.Error(err);
                }
                else{
                    var imageLoc = '/cfs/files/ProfileImages/'+results._id;

                    var data = UserImages.findOne({userId:Meteor.userId()})._id;


                    if(data){
                        console.log("here")
                        UserImages.update({_id: data}, {$set: {image: imageLoc}});
                    }

                    else {

                        UserImages.insert({
                            userId: Meteor.userId(),
                            username: Meteor.user().username,
                            image: imageLoc
                        });

                    }
                    Router.go("/");
                }


            });
        }
        return false;




    }

});
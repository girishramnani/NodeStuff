/**
 * Created by girish on 25/1/16.
 */


if(Meteor.isClient){

    Tracker.autorun(function(){

        Session.set('view',SSession.findData("view",false));
        Session.set('tens',SSession.findData('tens',1).toString());
        Session.set('ones',SSession.findData('ones',10).toString());

    })


}



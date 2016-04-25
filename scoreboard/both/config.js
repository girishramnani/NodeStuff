/**
 * Created by girish on 24/1/16.
 */


if (Meteor.isServer){

    if(SSession.find().count() < 4){

        SSession.insertNotPresent('score_left',0);
        SSession.insertNotPresent('score_right',0);
        SSession.insertNotPresent('team_left',"Team Name");
        SSession.insertNotPresent('team_right',"Team Name");
        SSession.insertNotPresent("extraTimePresent",false);
        SSession.insertNotPresent("tens",2);
        SSession.insertNotPresent("ones",0);
        SSession.insertNotPresent("view",true);


    }

}
Meteor.startup(function(){
    Timer = {};

    Timer.hideTimer = function(){
        SSession.updateValue("view",false);

    };
    Timer.showTimer = function(){
        SSession.updateValue("view",true);
    };

    Timer.startTimer = function (tens,ones){

        SSession.updateValue("tens",'0');
        SSession.updateValue("ones",'0');
        SSession.updateValue("tens",tens.toString());
        SSession.updateValue("ones",ones.toString());
        console.log("changed");
        Timer.reset();
        Meteor.setTimeout(function(){
            Timer.hideTimer();
        },(((tens-1)*10)+ones)*1000 )
    },

    Timer.reset = function() {
        Timer.hideTimer();
        Meteor.setTimeout(function () {
           Timer.startTimer(SSession.findData("tens"),SSession.findData("ones"));
        }, 100);
    }


})
/**
 * Created by girish on 24/1/16.
 */



Template.admin.events({
    'change .score-left-value': function(evt,templ){
        var val = templ.find(".score-left-value").value;
        SSession.updateValue("score_left",val)


    },
    'change .score-right-value': function(evt,templ){
        var val = templ.find(".score-right-value").value;
        SSession.updateValue("score_right",val)



    },
    'change .team-left-value': function(evt,templ){
        var val = templ.find(".team-left-value").value;
        SSession.updateValue("team_left",val)


    },
    'change .team-right-value': function(evt,templ){
        var val = templ.find(".team-right-value").value;
        SSession.updateValue("team_right",val)


    },
    'change .tens': function(evt,templ){
        var val = templ.find(".tens").value;
        SSession.updateValue("tens",val);
        Timer.hideTimer();
        Meteor.setTimeout(function(){
            Timer.showTimer();
        },1000);



    },
    'change .ones': function(evt,templ){
        var val = templ.find(".ones").value;
        SSession.updateValue("ones",val);
        Timer.reset();

    },
    'click .clock-start': function(evt,templ){

        Timer.showTimer();

    },
    'click .clock-stop': function(evt,templ){

        Timer.hideTimer();

    },
    'click .clock-reset': function(evt,templ){

        Timer.reset();

    },




});
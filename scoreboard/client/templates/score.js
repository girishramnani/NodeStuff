/**
 * Created by girish on 24/1/16.
 */



Template.registerHelper('SSession',function(name){
    return SSession.findData(name,0);
});

Template.registerHelper("Session",function(name){
    return Session.get(name);
})



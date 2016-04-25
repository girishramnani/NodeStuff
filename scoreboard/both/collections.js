/**
 * Created by girish on 24/1/16.
 */


SSession = new Meteor.Collection("Session");

SSession.findData = function(name,def){
    var data = SSession.findOne({'name':name});
    if (data){
        return data.data;
    }
    return def;
};
SSession.insertNotPresent = function(name,value){

    if(SSession.findOne({'name':name}) === undefined){
        SSession.insert({'name':name,'data':value})
    }
};

SSession.updateValue = function(name,value){
    var id = SSession.findOne({'name':name })._id;
    SSession.update({_id : id}, {$set : {'data':value}});

}



/**
 * Created by girish on 25/1/16.
 */

Template.clock.rendered = function(){

};


Template.clock.helpers({

    'cycle' : function(name){
        var array = [];
        for(var i =Number.parseInt(SSession.findData(name,0));i>=0;i--){
            array.push(i%10);
        }
        console.log(array);
        return array;
    }
})
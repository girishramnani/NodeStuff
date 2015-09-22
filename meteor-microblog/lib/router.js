Router.configure(
    {
        layoutTemplate:'layout'
    }
);


Router.map(function(){


    this.route('posts',{
        path:'/',
        template:'posts'
    });

    this.route('about',{
        path:'/about',
        template:'about'

    })
    this.route('profile',{
        path:'/profile',
        template:'profile'
    })




});

var Backbone = require('backbone');

var Like = Backbone.Model.extend({
  defaults:{
    'likes' : 0,
  },
  like: function(){
    // console.log('I like this');
    this.set('likes', this.get('likes') + 1);
    // console.log(this.get('likes'));
  },
});


module.exports = {
  "Like": Like,
}

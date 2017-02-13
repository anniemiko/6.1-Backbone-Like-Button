var $ = require('jquery');
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
  toJSON: function(){
    if (this.get('likes') == 1){
      $('.like-button').text(this.get('likes') + ' like');
    }else{
        $('.like-button').text(this.get('likes') + ' likes');
    }
    return Backbone.Model.prototype.toJSON(this);
  }
});


module.exports = {
  "Like": Like,
}

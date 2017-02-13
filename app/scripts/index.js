var $ = require('jquery');
var Backbone = require('backbone');
var models = require('../scripts/models/like.js');

var button = new models.Like()

$('.like-button').on('click', function(){
  button.like()
});


// button.on("change:likes", function(model, likes) {
//   $('.like-button').html(likes + ' likes');
// });
//
// console.log(button.toJSON);

button.on('change:likes', function(){
  this.toJSON();
});

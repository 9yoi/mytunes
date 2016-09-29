// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({ 

  model: SongModel,

  initialize: function() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        console.log('success', data);
        var library = new Songs(data);
    
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('failed to get songs', data);
      }
    });
  }

});
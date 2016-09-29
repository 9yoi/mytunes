// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // check for changes in song queue
    // on change, play if only 1 song
    this.on('all', function() {
      if (this.length === 1) {
        this.playFirst(); 
      }
    });
      
  },

  playFirst: function() {
    var model = this.at(0);
    
  }

});
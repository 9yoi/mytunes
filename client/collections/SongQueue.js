// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // check for changes in song queue
    // on change, play if only 1 song

    this.on('ended', this.playNext, this);
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('dequeue', this.dequeue, this);

  },

  playFirst: function() {
    this.at(0).play();
  },

  playNext: function() {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } 
  },

  dequeue: function(song) {
    // if (this.at(0) === song) {
    //   this.playNext();
    // } else {
    this.remove(song);
    // }
  }

});
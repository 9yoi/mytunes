// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add remove', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    //console.log('rendering SongQueueView');

    return this.$el.html('<th>Song Queue</th>')
      .append(this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
     );
  }

});

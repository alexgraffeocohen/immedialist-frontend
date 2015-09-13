import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('item', {
  default: {
    name: FactoryGuy.generate('itemName'),
    mediaType: function() {
      var options = ['movie', 'show', 'song', 'album', 'creator'];
      return options[Math.floor(Math.random()*options.length)];
    }
  },

  sequences: {
    itemName(num) {
      return `Item ${num}`;
    }
  }
});

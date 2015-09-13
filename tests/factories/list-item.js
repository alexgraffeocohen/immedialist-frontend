import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('list-item', {
  default: {
    name: FactoryGuy.generate('listItemName'),
    resolved: true
  },

  sequences: {
    listItemName(num) {
      return `List Item ${num}`;
    }
  }
});

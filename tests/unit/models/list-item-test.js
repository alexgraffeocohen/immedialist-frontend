import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';
import FactoryGuy from 'ember-data-factory-guy';
import startApp from '../../helpers/start-app';

let App;

// FactoryGuy docs say you can use module instead of moduleForModel, but that
// causes JSHint issues (even though the test itself passes). Perhaps this will
// resolve itself later on.

moduleForModel('list-item', 'Unit | Model | list item', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('it calculates mediaType from its item', function(assert) {
  var item = FactoryGuy.make('item', {mediaType: 'movie'});
  var listItem = FactoryGuy.make('list-item', {item: item});

  assert.equal(listItem.get('mediaType'), 'movie');
});

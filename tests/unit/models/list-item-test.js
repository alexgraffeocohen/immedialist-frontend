import Ember from 'ember';
import FactoryGuy from 'ember-data-factory-guy';
import startApp from '../../helpers/start-app';
import { test } from 'ember-qunit';

let App;

module('ListItem', {
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

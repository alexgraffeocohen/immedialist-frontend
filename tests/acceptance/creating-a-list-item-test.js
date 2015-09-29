import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'frontend/tests/helpers/start-app';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import FactoryGuy from 'ember-data-factory-guy';

let App;

module('Acceptance | creating a list item', {
  beforeEach: function() {
    App = startApp();
    TestHelper.setup();
  },

  afterEach: function() {
    Ember.run(function() {
      TestHelper.teardown();
      App.destroy();
    });
  }
});

test('creating a list item', function(assert) {
  var item = FactoryGuy.make('item', {mediaType: 'movie'});
  FactoryGuy.make('list-item', {item: item});

  visit('/');

  fillIn('input.create-list-item__name', 'Die Hard');
  fillIn('.create-list-item__media-type', 'Movie');
  click('.create-list-item__submit');

  andThen(function() {
    var createdListItem = ('.list-items a:last');
    assert.equal(
      find('.list-items__item-name', createdListItem).text(),
      'Die Hard'
    );
  });
});

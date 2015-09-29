import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'frontend/tests/helpers/start-app';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import FactoryGuy from 'ember-data-factory-guy';

let App;

module('Acceptance | showing list item', {
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

test('showing list item', function(assert) {
  var item = FactoryGuy.make('item', {mediaType: 'movie'});
  var listItem = FactoryGuy.make('list-item', {item: item, name: "The Martian"});

  visit(`/${listItem.id}`);

  andThen(function() {
    assert.equal(find('.list-item__heading').text().trim(), "The Martian");
  });
});

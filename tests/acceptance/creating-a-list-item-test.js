import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'frontend/tests/helpers/start-app';

module('Acceptance | creating a list item', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('creating a list item', function(assert) {
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

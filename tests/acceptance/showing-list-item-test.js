import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'frontend/tests/helpers/start-app';

module('Acceptance | showing list item', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('showing list item', function(assert) {
  visit('/1');

  andThen(function() {
    assert.equal(find('.list-item__heading').text().trim(), "Interstellar");
  });
});

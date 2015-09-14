import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import FactoryGuy from 'ember-data-factory-guy';
import startApp from '../../helpers/start-app';
import hbs from 'htmlbars-inline-precompile';

let App;

moduleForComponent('search-results', 'Integration | Component | search results', {
  integration: true,
  setup: function () {
    Ember.run(function () {
      App = startApp();
    });
  },
  teardown: function () {
    Ember.run(function () {
      App.destroy();
    });
  }
});

test('it renders helptext based on search type', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('searchType', "movie");
  this.set('search', FactoryGuy.make('search'));

  this.render(hbs`{{search-results search=search searchType="movie"}}`);

  assert.equal(this.$('.text-center').text().trim(),
               'Select the Correct Movie');
});

import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import FactoryGuy from 'ember-data-factory-guy';
import startApp from '../../helpers/start-app';
import hbs from 'htmlbars-inline-precompile';

let App;

moduleForComponent('list-item', 'Integration | Component | list item', {
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

test('it renders content based on its item', function(assert) {
  assert.expect(2);

  var item = FactoryGuy.make('item', {mediaType: 'movie'});
  var listItem = FactoryGuy.make('list-item', {item: item});

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('listItem', listItem);

  this.render(hbs`{{list-item listItem=listItem}}`);

  assert.equal(this.$('.list-items__item-name').text().trim(),
               `${listItem.get('name')}`);
  assert.ok(this.$('i').hasClass('fa-film'));
});

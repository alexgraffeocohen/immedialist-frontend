import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/start-mirage';

moduleForComponent('list-item', 'Integration | Component | list item', {
  integration: true,
  setup: function () {
    startMirage(this.container);
  }
});

test('it renders content based on its item', function(assert) {
  //assert.expect(2);

  var item = server.create('item', {mediaType: 'movie'});
  var listItem = server.create('list-item', {item_id: item.id});

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('listItem', listItem);

  this.render(hbs`{{list-item listItem=listItem}}`);

  assert.equal(this.$('.list-items__item-name').text().trim(),
               `${listItem.get('name')}`);
  assert.ok(this.$('i').hasClass('fa-film'));
});

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('list-item', 'Unit | Model | list item', {
  needs: ['model:item', 'model:search']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

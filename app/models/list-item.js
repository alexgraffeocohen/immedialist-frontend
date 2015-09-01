import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  resolved: DS.attr('boolean'),
  item: DS.belongsTo('item', { polymorphic: true }),
  search: DS.belongsTo('search', { async: true }),

  mediaType: function() {
    return this.get('item.mediaType');
  }.property('item')
});

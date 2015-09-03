import Item from "./item";
import DS from 'ember-data';

export default Item.extend({
  requestedType: DS.attr('string')
});

import Item from "./item";
import DS from 'ember-data';

export default Item.extend({
  // FIXME: I want to eliminate this, but I'm not sure of the consequences. See
  // RequestedItemSerializer.
  mediaName: DS.attr('string')
});

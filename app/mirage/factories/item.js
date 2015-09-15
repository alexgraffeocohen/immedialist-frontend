import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Item ${i}`; },
  mediaType: faker.list.random('movie', 'show', 'song', 'album', 'creator')
});

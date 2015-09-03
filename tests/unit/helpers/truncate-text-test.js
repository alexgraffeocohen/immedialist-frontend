import { truncateText } from '../../../helpers/truncate-text';
import { module, test } from 'qunit';

module('Unit | Helper | truncate text');

test('it should truncate text if text is longer than char count', function(assert) {
  var text = "too long"
  var charCount = 3

  var result = truncateText([text], {charCount: charCount});

  assert.equal(result, "too...");
});

test('it should not truncate text if text is shorter than char count', function(assert) {
  var text = "short"
  var charCount = 10

  var result = truncateText([text], {charCount: charCount});

  assert.equal(result, "short");
});

test('it truncates text to 30 characters if no char count is provided', function(assert) {
  var text = "The Harvest Gypsies: On the Road to The Grapes"

  var result = truncateText([text]);

  assert.equal(result, "The Harvest Gypsies: On the Ro...");
});

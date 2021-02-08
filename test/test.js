import * as assert from 'assert';
import { getNameWithInitials } from '../index.js';

describe('index', function() {
  describe('getNameWithInitials', function() {
    it('When the full name is entered, name with initials should display', function() {
      assert.equal(getNameWithInitials("Dharana Dinindu Rodrigo"), "D. D. Rodrigo");
    });
  });
});
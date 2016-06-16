/* eslint no-unused-expressions:0 */
import {expect} from 'chai';
import Feedback from '../src/sui-feedback';

describe('sui-feedback component test suite', () => {

  describe('sui-feedback', () => {
    it('should be loaded properly', () => {
      expect(Feedback).to.not.be.undefined;
    });
  });

});

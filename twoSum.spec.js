const twoSum = require('./twoSum');
const { expect } = require('chai');

describe('twoSum', () => {
  it('twoSum returns empty array', () => {
    expect(twoSum([1, 2, 3], 6)).to.deep.equal([]);
  });

  it('twoSum returns proper array', () => {
    expect(twoSum([1, 2, 3], 5)).to.eql([1, 2]);
  });
})

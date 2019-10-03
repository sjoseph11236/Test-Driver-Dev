const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('return an empty array if no parameter are passed to it', ()=>{
    expect(twoSum().length).to.equal(0)
  })
});

const chai = require('chai');
const dirtyChai = require('dirty-chai');
const { mergeSort } = require('./index');
chai.use(dirtyChai);
const { expect } = chai;

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe('mergeSort()', () => {
  it('should sort an array', () => {
    expect(mergeSort(getArray())).to.eql(getSortedArray());
  });
});

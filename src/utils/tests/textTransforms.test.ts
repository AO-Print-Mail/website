import * as transforms from '../src/text-transforms'

describe('camelCase transform', () => {
  it('changes a string into camelCase', () => {
    const camelized = transforms.toCamelCase('Five Camels Please')
    expect(camelized).toMatch('fiveCamelsPlease')
  })
})

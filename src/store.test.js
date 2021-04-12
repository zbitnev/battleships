import { reducer } from './store'

const INITIAL_STATE = {
  layout: [
    { ship: "carrier", positions: [[2,9], [3,9], [4,9], [5,9], [6,9]], hits: [] },
    { ship: "battleship", positions: [[5,2], [5,3], [5,4], [5,5]], hits: [] },
  ],
  misses: []
}

describe('battleships store', () => {
  let result

  describe('when there is a miss', () => {
    beforeEach(() => {
      result = reducer(INITIAL_STATE, { type: 'hit', payload: [1, 1]})
    })

    it('adds miss position to a miss array', () => {
      expect(result.misses).toStrictEqual([[1, 1]])
    })
  })

  describe('when there is a hit', () => {
    beforeEach(() => {
      result = reducer(INITIAL_STATE, { type: 'hit', payload: [5, 3]})
    })

    it('adds hit position to a hits array of a ship', () => {
      const ship = result.layout.find(s => s.ship === 'battleship')
      expect(ship.hits).toStrictEqual([[5, 3]])
    })

    it('doesnt add hits position to a miss array', () => {
      expect(result.misses).toStrictEqual([])
    })
  })
})
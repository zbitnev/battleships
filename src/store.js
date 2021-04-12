import { createStore } from 'redux'

export const FIELD_SIZE = 10
const INITIAL_STATE = {
  shipTypes: {
      carrier: { size: 5, count: 1 },
      battleship: { size: 4, count: 1 },
      cruiser: { size: 3, count: 1 },
      submarine: { size: 3, count: 1 },
      destroyer: { size: 2, count: 1 }
  },
  layout: [
      { ship: "carrier", positions: [[2,9], [3,9], [4,9], [5,9], [6,9]], hits: [] },
      { ship: "battleship", positions: [[5,2], [5,3], [5,4], [5,5]], hits: []  },
      { ship: "cruiser", positions: [[8,1], [8,2], [8,3]], hits: []  },
      { ship: "submarine", positions: [[3,0], [3,1], [3,2]], hits: [] },
      { ship: "destroyer", positions: [[0,0], [1,0]], hits: [] }
  ]
}

function eq(pos1, pos2) {
  return pos1[0] === pos2[0] && pos1[1] === pos2[1]
}

export const reducer = (state = INITIAL_STATE, { type, payload }) => {
  if (type === 'hit') {
    const hitShipIndex = state.layout.findIndex(s => s.positions.some(pos => eq(pos, payload)))
    if (hitShipIndex !== -1) {
      const hitShip = { ...state.layout[hitShipIndex], hits: [ ...state.layout[hitShipIndex].hits, payload ]}
      const layout = [ ...state.layout ]
      layout.splice(hitShipIndex, 1, hitShip)
      
      return {
        ...state,
        layout
      }
    } else {
      const misses = [ ...state.misses, payload ]
      return {
        ...state,
        misses
      }
    }
  }

  return state;
}

export const store = createStore(reducer)
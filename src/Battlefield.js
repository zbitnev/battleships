import React, { useCallback } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { FIELD_SIZE, selectField } from './store'

import styles from './Battlefield.module.css'

export const Battlefield = ({ className }) => {
  const dispatch = useDispatch()
  const field = useSelector(selectField)

  const onCellClick = useCallback(({ target }) => {
    const x = +target.dataset.x
    const y = +target.dataset.y
    dispatch({ type: 'hit', payload: [x, y] })
  })

  const cells = []
  for (let y = 0; y < FIELD_SIZE; y++) {
    for (let x = 0; x < FIELD_SIZE; x++) {
      cells.push(<button
        key={`${x}_${y}`}
        data-x={x}
        data-y={y}
        onClick={onCellClick}
        disabled={field[x][y] !== null}
        className={classNames(styles.cell, {
          [styles.miss]: field[x][y] === 'miss',
          [styles.hit]: field[x][y] === 'hit',
        })}
      />)
    }
  }
  return (<div className={classNames(styles.wrapper, className)}>
    <div className={styles.grid}>
      {cells}
    </div>
  </div>)
}
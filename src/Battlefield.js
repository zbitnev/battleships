import React from 'react'
import classNames from 'classnames'
import { FIELD_SIZE } from './store'

import styles from './Battlefield.module.css'

export const Battlefield = ({ className }) => {
  const cells = []
  for (let y = 0; y < FIELD_SIZE; y++) {
    for (let x = 0; x < FIELD_SIZE; x++) {
      cells.push(<button
        key={`${x}_${y}`}
        data-x={x}
        data-y={y}
      />)
    }
  }
  return (<div className={classNames(styles.wrapper, className)}>
    <div className={styles.grid}>
      {cells}
    </div>
  </div>)
}
import React from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { selectShips } from './store'

import styles from './GameStats.module.css';

export const GameStats = ({ className }) => {
  const ships = useSelector(selectShips)

  return (<div className={classNames(styles.wrapper, className)}>
    <ul className={styles.ships}>
      {ships.map(ship => {
        return (
          <li className={classNames(styles.ship, {[styles.sunk]: ship.sunk})}>{ship.name} {ship.hits}/{ship.total}</li>
        )
      })}
    </ul>
  </div>)
}
import React from 'react'
import classNames from 'classnames'

import styles from './GameStats.module.css';

export const GameStats = ({ className }) => {
  return (<div className={classNames(styles.wrapper, className)}>
    <ul className={styles.ships}>
      <li className={styles.ship}>Ship #1 - 2/2</li>
      <li className={styles.ship}>Ship #2 - 0/3</li>
      <li className={styles.ship}>Ship #3 - 0/4</li>
      <li className={styles.ship}>Ship #1 - 2/2</li>
    </ul>
  </div>)
}
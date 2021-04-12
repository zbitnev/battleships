import React from 'react'

import styles from './ShipStatus.module.css';

export const ShipStatus = ({ ship }) => {
  return (<span>{ship.hits}/{ship.total}</span>)
}
import React from 'react';
import css from './card.module.css';

const classes = `card ${css.cardExtra}`;
export default function Card({ children }) {
  return <div className={classes}>{children} </div>;
}

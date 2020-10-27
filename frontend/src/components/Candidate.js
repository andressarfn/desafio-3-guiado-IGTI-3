import React from 'react';
import Info from './Info';
import Name from './Name';
import Percentege from './Percentege';
import Picture from './Picture';
import Popularity from './Popularity';
import Position from './Position';
import Votes from './Votes';
import css from './candidate.module.css';
import { formatNumber, formatPercentage } from './helpers/formatHelpers';

export default function Candidete({ candidate, position }) {
  const { id, name, votes, percentage, popularity } = candidate;

  const imageSource = `${id}.jpg`;
  return (
    <div className={css.flexRow}>
      <Position>{position} </Position>
      <Picture imageSource={imageSource} descripiton={name} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} />
        <Percentege>{formatPercentage(percentage)}</Percentege>
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}

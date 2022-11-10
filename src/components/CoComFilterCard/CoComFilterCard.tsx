import React, { FC } from 'react';
import styles from './CoComFilterCard.module.css';

interface CoComFilterCardProps {}

const CoComFilterCard: FC<CoComFilterCardProps> = () => (
  <div className={styles.CoComFilterCard} data-testid="CoComFilterCard">
    CoComFilterCard Component
  </div>
);

export default CoComFilterCard;

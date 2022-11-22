import React, { FC } from 'react';
import styles from './CardDropdown.module.css';

interface CardDropdownProps {}

const CardDropdown: FC<CardDropdownProps> = () => (
  <div className={styles.CardDropdown} data-testid="CardDropdown">
    CardDropdown Component
  </div>
);

export default CardDropdown;

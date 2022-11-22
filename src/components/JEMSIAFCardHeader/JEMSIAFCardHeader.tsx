import React, { FC } from 'react';
import styles from './JEMSIAFCardHeader.module.css';

interface JEMSIAFCardHeaderProps {}

const JEMSIAFCardHeader: FC<JEMSIAFCardHeaderProps> = () => (
  <div className={styles.JEMSIAFCardHeader} data-testid="JEMSIAFCardHeader">
    JEMSIAFCardHeader Component
  </div>
);

export default JEMSIAFCardHeader;

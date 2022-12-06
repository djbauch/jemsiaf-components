import React, { FC } from 'react'
import Card from 'react-bootstrap/Card'
import CardCloseButton from '../CardCloseButton/CardCloseButton'
import 'bootstrap/dist/css/bootstrap.min.css'

interface JEMSIAFCardHeaderProps {}

const JEMSIAFCardHeader: FC<JEMSIAFCardHeaderProps> = () => (
  <Card.Header data-testid="JEMSIAFCardHeader">
    <CardCloseButton/> JEMSIAFCardHeader Component
  </Card.Header>
);

export default JEMSIAFCardHeader;

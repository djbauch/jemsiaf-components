import React, { FC } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css'

interface CardDropdownProps {}

const CardDropdown: FC<CardDropdownProps> = () => (
  <DropdownButton id="CDDC" title="Dropdown" data-testid="CardDropdown">
    <Dropdown.Item>Action 1</Dropdown.Item>
    <Dropdown.Item variant="success">Action2</Dropdown.Item>
  </DropdownButton>
);

export default CardDropdown;

import React, { FC } from "react";
import {
  Container,
  UncontrolledTooltip,
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Row,
} from "reactstrap";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faCheckSquare,
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import JEMSIAFCardHeader from "../JEMSIAFCardHeader/JEMSIAFCardHeader";
import CardDropdown from "../CardDropdown/CardDropdown";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import styles from "./CoComFilterCard.module.css";

export type CoComFilterCardProps = {
};

const CoComFilterCard: FC<CoComFilterCardProps> = () => {
  const ccs = useAppSelector((state) => state.combatantCommands.value);
  return (
    <div className={styles.CoComFilterCard} data-testid="CoComFilterCard">
      <CheckboxTree nodes={ccs} />
    </div>
  );
};

export default CoComFilterCard;

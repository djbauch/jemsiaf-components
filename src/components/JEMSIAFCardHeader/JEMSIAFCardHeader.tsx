import React, { FC } from "react";
import CardHeader from "@mui/material/Card";
import CardCloseButton from "../CardCloseButton/CardCloseButton";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";

interface JEMSIAFCardHeaderProps {
  title?: string
}

const JEMSIAFCardHeader: FC<JEMSIAFCardHeaderProps> = ({title}) => {
  const [isFilterActive, setFilterActive] = React.useState(true);
  title = title || 'Untitled Card'
  return (
    <CardHeader data-testid="JEMSIAFCardHeader">
      <CardCloseButton /> {title}
      <Tooltip title={isFilterActive ? 'Disable Filter': 'Enable Filter'}>
        <Switch
          checked={isFilterActive}
          onChange={() => setFilterActive(!isFilterActive)}
          color="primary"
          aria-label="Enable/Disable Filter"
        />
      </Tooltip>
    </CardHeader>
  );
};

export default JEMSIAFCardHeader;

import React from "react";
import { Chip } from "@mui/material";
import LabelIcon from '@mui/icons-material/Label';

type Props = {
    label: string;
    color?: "primary" | "secondary" | "error" | "success" | "info" | "warning";
};

export const Label: React.FC<Props> = ({ label, color}) => {
  return (
    <Chip
      icon={<LabelIcon />}
      label={label}
      color={color}
      variant="outlined"
      style={{ margin: "4px" }}
    />
  );
};

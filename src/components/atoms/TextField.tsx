import React from "react";
import { TextField as MUITextField } from '@mui/material';  // MUIのTextFieldコンポーネントに別名を付ける

type Props = {
    label : string;
    value: string;
};

export const TextField: React.FC<Props> = ({label,value}) => {
    return (
        <MUITextField
            label={label}
            value={value}
            variant="outlined"
        />
    );
}
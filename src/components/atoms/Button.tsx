import React from "react";
import { Button as MUIButton } from '@mui/material';  // MUIのButtonコンポーネントに別名を付ける


type Props = {
    onClick?: (e: React.MouseEvent) => void;
    action: "add" | "edit" | "delete";
    children: string;
};

export const Button: React.FC<Props> = ({onClick,action,children}) => {
    const getColor = (action: Props['action']) => {
        switch (action) {
            case "add":
                return "primary";
            case "edit":
                return "secondary";
            case "delete":
                return "error";
        }
    }

    return (
        <MUIButton
            variant="contained"
            color={getColor(action)}
            onClick={onClick}
        >
            {children}
        </MUIButton>
    );
}

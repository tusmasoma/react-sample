import React from 'react';
import { Button } from 'components/atoms/Button';
import { Card } from '@mui/material';

type Props = {
    title: string;
};

export const TaskItem: React.FC<Props> = ({ title }) => {
    return (
        <Card>
            <p>{title}</p>
            <Button action="edit">編集</Button>
        </Card>
    )
}
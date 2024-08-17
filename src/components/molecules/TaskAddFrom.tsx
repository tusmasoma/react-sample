import { Button } from "components/atoms/Button";
import { TextField } from "components/atoms/TextField";
import { Label } from "components/atoms/Label";

export const TaskAddForm: React.FC= () => {
    return (
        <div>
            <TextField label="タスク名" value="" />
            <Button action="add">追加</Button>
            <Label label="未完了" color="error" />
            <Label label="完了" color="success" />
        </div>
    );
};
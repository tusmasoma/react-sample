import React, { useState } from 'react';
import { Container, Box, List, ListItem, ListItemText, Checkbox,Typography,Button,Modal,TextField,Select, MenuItem, InputLabel, FormControl} from '@mui/material';

type Task ={
    id: number;
    title: string;
    detail: string;
    dueDate: string;
    priority: string;
}

export const TodoListPage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [taskDetail, setTaskDetail] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');
    const [todoList, setTodoList] = useState<Task[]>([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCreateTask = () => {
        // タスク作成ロジックをここに追加
        const newTask = {
            id: todoList.length + 1, // IDはタスク数をもとに設定
            title: taskName,
            detail: taskDetail,
            dueDate: dueDate,
            priority: priority,
        };

        setTodoList([...todoList, newTask]);

        setTaskName('');
        setTaskDetail('');
        setDueDate('');
        setPriority('');

        handleClose();
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ height: '100vh', padding: 2 }}>
                <Typography variant="h3">
                    Todo List
                </Typography>
                <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 8 }}
                onClick={() => handleOpen()}
                >
                    タスクを作成
                </Button>
                <List>
                    {todoList.map(todo => (
                        <ListItem key={todo.id} dense button>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                            />
                            <ListItemText primary={todo.title} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="create-task-modal"
                aria-describedby="modal-to-create-todo-task"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '8px'
                    }}
                >
                    <Typography id="create-task-modal" variant="h6" component="h2">
                        新しいタスクを作成
                    </Typography>
                    <TextField
                        label="タスク名"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                    <TextField
                        label="タスク詳細"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        value={taskDetail}
                        onChange={(e) => setTaskDetail(e.target.value)}
                    />
                    <TextField
                        label="締め切り"
                        type="date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="priority-label">優先度</InputLabel>
                        <Select
                            labelId="priority-label"
                            id="priority-select"
                            value={priority}
                            label="優先度"
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <MenuItem value="低">低</MenuItem>
                            <MenuItem value="中">中</MenuItem>
                            <MenuItem value="高">高</MenuItem>
                        </Select>
                    </FormControl>
                    <Box mt={2} display="flex" justifyContent="flex-end">
                        <Button variant="contained" color="primary" onClick={handleCreateTask}>
                            作成
                        </Button>
                        <Button onClick={handleClose} sx={{ ml: 2 }}>
                            キャンセル
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Container>
    );
};

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TodoListPage } from 'pages/TodoListPage';

export const App: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoListPage />} />
                {/* 他のルートもここに追加 */}
            </Routes>
        </Router>
    )
}
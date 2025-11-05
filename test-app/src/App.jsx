// src/App.jsx
import './App.css';
import Greeting from './Greeting'; // импортируем наш компонент
import UserCard from "./UserCard.jsx";
import TaskList from "./TaskList.jsx";

function App() {
    return (
        <div className="App">
            {/* используем компонент как HTML-тег */}
            <Greeting />

            {/* Используем UserCard и передаём ему props */}
            <UserCard
                name="Иван Иванов"
                role="Администратор"
                avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s"
                isOnline={true}
            />

            {/* Используем UserCard и передаём ему props */}
            <UserCard
                name="Пётр Петров"
                role="Менеджер"
                avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s"
                isOnline={false}
            />

            {/* добавляем компонент списка задач */}
            <TaskList />
        </div>
    );
}

export default App;
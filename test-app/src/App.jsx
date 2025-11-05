// src/App.jsx
import './App.css';
import Greeting from './Greeting'; // импортируем наш компонент

function App() {
    return (
        <div className="App">
            {/* используем компонент как HTML-тег */}
            <Greeting />
        </div>
    );
}

export default App;
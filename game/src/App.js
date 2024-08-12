
import "./App.css";
import Board from "./Components/Board";
import Square from "./Components/Square";
//oimport Square from "/components/Square" // Import the Board component from the correct path

function App() {
    return (
        <div className="App">
            <Board />
            <Square></Square>
        </div>
    );
}


export default App;



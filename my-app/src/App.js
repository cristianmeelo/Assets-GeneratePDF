import './App.css';
import { jsPDF } from "jspdf";

const doc = new jsPDF();


function GeneratePDF () {
  // Default export is a4 paper, portrait, using millimeters for units
  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
}

function App() {
  return (
    <div className="App">
      <button onClick={GeneratePDF}> Generate Pdf</button>
    </div>
  );
}

export default App;

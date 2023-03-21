import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MessageBar,
  CompanionChatTable,
  Footer,
  InputAndSend,
  Message,
  MessageSend,
} from "./components/componentfile";
import Card from "./components/Card.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/raf" element={<CompanionChatTable />} />
        <Route path="/daf" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;

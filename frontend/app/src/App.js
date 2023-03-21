import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MessageBar,
  CompanionChatTable,
  Footer,
  InputAndSend,
  Message,
  MessageSend,
} from "./components/componentfile";
import MenuCards from "./components/MenuCards.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/raf" element={<CompanionChatTable />} />
        <Route path="/daf" element={<MenuCards />} />
      </Routes>
    </Router>
  );
}

export default App;

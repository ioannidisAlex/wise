import MessageBar from "./MessageBar";
import Footer from "./Footer";
import "./CompanionChatTable.css";

function CompanionChatTable(props) {
	return (
		<div className="home">
			<div className="container">
				<MessageBar />
				<Footer />
			</div>
		</div>
	);
}

export default CompanionChatTable;

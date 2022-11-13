import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./InputAndSend.css";

function InputAndSend() {
	return (
		<div className="text-wrapper">
			<Avatar>H</Avatar>
			<TextareaAutosize
				className="textInput"
				maxRows={4}
				placeholder="message..."
			/>
			<IconButton aria-label="Example">
				<SendIcon />
			</IconButton>
		</div>
	);
}

export default InputAndSend;

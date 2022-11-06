import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./InputAndSend.css";

function InputAndSend() {
	return (
		<TextareaAutosize
			className="textauto"
			maxRows={4}
			aria-label="maximum height"
			style={{ width: 200 }}
		/>
	);
}

export default InputAndSend;

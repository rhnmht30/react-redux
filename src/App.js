import React from "react";
import styled from "styled-components";

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	justify-content: center;
	align-items: center;
`;
const StyledButton = styled.button`
	border: ${(props) =>
		props.type === "primary" ? "none" : "2px solid #a92456"};
	border-radius: 5px;
	background-color: ${(props) =>
		props.type === "primary" ? "#e78e9e" : "#ffffff"};
	color: #a92456;
	padding: 10px;
	font-size: 2em;
	margin: 10px;

	&:hover {
		background-color: #a92456;
		color: #e78e9e;
	}
`;

function App() {
	return (
		<StyledApp className="App">
			<StyledButton type="primary">Hi There!!</StyledButton>
			<StyledButton type="secondary">Hi There!!</StyledButton>
		</StyledApp>
	);
}

export default App;

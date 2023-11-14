import { useState } from "react";
import styled from "styled-components";

interface StyledTextProps {
	isColored: boolean;
}

export const StyledOnlineToggle = () => {
	const [isColored, setIsColored] = useState(false);

	const ToggleColorButton = styled.button`
		background-color: lightblue;
		padding: 10px;
		margin-top: 10px;
		cursor: pointer;
	`;

	const StyledText = styled.p<StyledTextProps>`
		color: ${(props) => (props.isColored ? "green" : "black")};
	`;
	return (
		<>
			<div>
				<h2>Toggle Text Color Example</h2>
				<ToggleColorButton onClick={() => setIsColored(!isColored)}>
					Toggle Color
				</ToggleColorButton>
				<StyledText isColored={isColored}>
					This text changes color!
				</StyledText>
			</div>
		</>
	);
};

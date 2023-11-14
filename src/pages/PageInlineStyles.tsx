import { InlineOnlineToggle } from "../components/InlineOnlineToggle";
import { InlineResizeBox } from "../components/InlineResizeBox";
import { Wrapper } from "../components/Wrapper";

export const PageInlineStyles = () => {
	return (
		<>
			<Wrapper title="Toggle Button">
				<InlineOnlineToggle />
			</Wrapper>
			<Wrapper title="Resize Box">
				<InlineResizeBox />
			</Wrapper>
		</>
	);
};

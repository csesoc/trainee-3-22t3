import styled from 'styled-components';
import FontItem from "./FontItem";

const Font = () => {
	const FontCatalogue = styled.div`
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: .5rem;
		text-align: center;
		margin-bottom: 1rem;
	`;
	return (
		<div>
			<h1>Font</h1>
			<FontCatalogue>
				<FontItem fontFamily="Arial" />
				<FontItem fontFamily="serif" />
				<FontItem fontFamily="monospace" />
			</FontCatalogue>
		</div>
	)
}

export default Font;
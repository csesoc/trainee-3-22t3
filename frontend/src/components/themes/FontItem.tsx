import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { globalStyles } from '../../recoil_state';

interface FontItemProps {
	fontFamily: string
}

const FontItem = (props: FontItemProps) => {
	const [font, setFont] = useRecoilState(globalStyles);
	
	const changeFontBody = () => {
		const currentStyles = { ...font };
		currentStyles.fontFamily = props.fontFamily;
		setFont(currentStyles);
	}

	const FontItem = styled.div`
		border-radius: 10px;
		padding: 1rem .5rem;
		font-family: ${props.fontFamily};
		&:hover {
			background-color: rgba(0, 0, 0, .15);
    	transition: .25s;
		}
		h2 {
			font-size: 2rem;
			margin: 0;
			font-weight: normal;
		}
		p {
			font-size: .75rem;
    	margin: 0;
		}
	`;

	return (
		<FontItem onClick={changeFontBody}>
			<h2>Aa</h2>
			<p>{props.fontFamily}</p>
		</FontItem>
	)
}

export default FontItem;

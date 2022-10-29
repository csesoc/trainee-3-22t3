import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMoon,
	faStar,
} from "@fortawesome/free-regular-svg-icons";
import styled from 'styled-components';
import { globalStyles } from "../../recoil_state";
import { useRecoilState } from "recoil";

const Mode = () => {
	const [mode, setMode] = useRecoilState(globalStyles);

	const changeMode = (modeString: 'light' | 'dark') => {
		const currentStyles = { ...mode };
		if (currentStyles.theme !== modeString) {
			currentStyles.theme = modeString;
			setMode(currentStyles);
		}
	}

	const ModeCatalogue = styled.div`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		text-align: center;
	`;

	const ModeItem = styled.div`
		border-radius: 10px;
		padding: 1rem .5rem;
		&:hover {
			background-color: rgba(0, 0, 0, .15);
			transition: .25s;
		}
		p {
			font-size: .75rem;
    	margin: 0;
		}
	`;

	return (
		<div>
			<h1>Themes</h1>
			<ModeCatalogue>
				<ModeItem onClick={() => changeMode('dark')}>
					<FontAwesomeIcon icon={faMoon} />
					<p>Dark Mode</p>
				</ModeItem>
				<ModeItem onClick={() => changeMode('light')}>
					<FontAwesomeIcon icon={faStar} />
					<p>Light Mode</p>
				</ModeItem>
			</ModeCatalogue>
		</div>
	)
}

export default Mode;
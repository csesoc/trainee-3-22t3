import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMoon,
	faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { globalStyles } from "../../recoil_state";
import { useRecoilState } from "recoil";

interface TargetAdditionalKey {
	customUrl: {
		value: string
	}
}

type ChangeBackgroundFormInterface = EventTarget & TargetAdditionalKey;

async function checkImageUrl(url: string){
	return new Promise((resolve) => {
		const img = new Image();
		img.src = url;
		img.onload = () => resolve(true);
		img.onerror = () => resolve(false);
	});
}

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

	const handleOnSubmit : any = async (event: Event) => {
		event.preventDefault();
		const currentStyles = { ...mode };
		const customUrl = (event.target as ChangeBackgroundFormInterface).customUrl.value;
		if (await checkImageUrl(customUrl)) {
			currentStyles.backgroundImage = `url(${customUrl})`;
			setMode(currentStyles);
		}
	}

	const CustomBgForm = styled.form`
		display: flex;
		justify-content: center;
		width: 100%;
		margin-bottom: 1rem;
		h2 {
			text-align: left;
			font-size: .75rem;
		}
		input[type = "text"] {
			border-right: none !important;
			border-width: 1px;
			border-style: solid;
			padding: 10px;
			&:focus, &:active {
				outline: none;
			}
		}
		button {
			background-color: transparent;
			border-width: 1px;
			border-style: solid;
			border-left: none !important;
			padding: 10px;
			color: gray;
			&:focus, &:active {
				outline: none;
			}
		}
	`; 

	return (
		<div>
			<h1>Themes</h1>
			<CustomBgForm onSubmit={handleOnSubmit}>
				<input name="customUrl" type="text" placeholder='Input image URL...'/>
				<button><FontAwesomeIcon icon={faSearch} /></button>
			</CustomBgForm>
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
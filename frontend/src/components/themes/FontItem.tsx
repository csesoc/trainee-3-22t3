import { useRecoilState } from 'recoil';
import { globalStyles } from '../../recoil_state';
import { FontItemDiv } from './SettingsStyled';

interface FontItemProps {
  fontFamily: string
}

const FontItem = (props: FontItemProps) => {
  const [font, setFont] = useRecoilState(globalStyles);
  
  const changeFont = () => {
    const currentStyles = { ...font };
    currentStyles.fontFamily = props.fontFamily;
    setFont(currentStyles);
  }
  
  return (
    <FontItemDiv onClick={changeFont} fontFamily={props.fontFamily}>
      <h2>Aa</h2>
      <p>{props.fontFamily}</p>
    </FontItemDiv>
  )
}

export default FontItem;

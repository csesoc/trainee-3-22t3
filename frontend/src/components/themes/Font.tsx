import FontItem from "./FontItem";
import { FontCatalogueDiv } from './SettingsStyled';

const Font = () => {
  return (
    <div>
      <h1>Font</h1>
      <FontCatalogueDiv>
          <FontItem fontFamily="Arial" />
          <FontItem fontFamily="serif" />
          <FontItem fontFamily="monospace" />
      </FontCatalogueDiv>
    </div>
  )
}

export default Font;
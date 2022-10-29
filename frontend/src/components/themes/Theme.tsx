import "./Theme.css";
import FontItem from "./FontItem";
import ThemeItem from "./ThemeItem";

const Theme = () => {
    return (
        <div className="theme-container">
            <div className="font">
                <h1>Font</h1>
                <div className="font-items">
                    <FontItem fontFamily="Arial" />
                    <FontItem fontFamily="serif" />
                    <FontItem fontFamily="monospace" />
                </div>
            </div>
            <div className="theme">
                <h1>Themes</h1>
                <div className="theme-items">
                    <ThemeItem mode="dark"></ThemeItem>
                    <ThemeItem mode="light"></ThemeItem>
                </div>
            </div>
        </div>
    )
}

export default Theme;
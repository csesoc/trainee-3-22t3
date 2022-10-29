interface ThemeItemProps {
    mode: 'dark' | 'light'
}

const ThemeItem = (props: ThemeItemProps) => {
    const changeMode = () => {
        const root = document.querySelector<HTMLElement>(':root');
        if (root) {
            root.style.colorScheme = props.mode; 
        }
    }
    return (
        <div className="theme-item" onClick={changeMode}>
            <span className={`dot ${props.mode}`}></span>
            <p>{props.mode.charAt(0).toUpperCase() + props.mode.slice(1)} Mode</p>
        </div>
    );
}

export default ThemeItem;
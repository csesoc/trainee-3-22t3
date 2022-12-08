import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRecoilState } from "recoil"
import { navbarButtonState } from "../../recoil_state"
import { NavbarButtonProps, ButtonStates } from "./NavbarStyled"

const NavbarButton = (props: NavbarButtonProps) => {
  const [toggleBtn, setToggleBtn] = useRecoilState(navbarButtonState)

  const handleOnClick = (key: keyof ButtonStates) => {
    const existingStates = { ...toggleBtn }
    existingStates[key] = !existingStates[key]
    setToggleBtn(existingStates)
  }

  return (
    <span>
      <FontAwesomeIcon
        className='btn'
        style={{ opacity: toggleBtn[props.name] ? 1 : 0.7 }}
        onClick={() => handleOnClick(props.name)}
        icon={props.icon}
        size='lg'
      />
    </span>
  )
}

export default NavbarButton

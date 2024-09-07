import Image from 'next/image'
import './CommonButton.scss'

/**COMMON BUTTON WITH DYNAMIC PROPS */
const CommonButton = (props: any) => {
  return (
    <button
      onClick={props?.onClick}
      type={props?.type}
      className={`btn-style ${props.className} ${props.fluid ? 'w-100' : ''} ${props.transparent ? 'transparent' : ''}`}
      disabled={props?.disabled}
    >
      {props.onlyIcon && <span className="onlyIcon">{props.onlyIcon}</span>}
      {props.text}
      {props.btnIcon && <Image src={props.btnIcon} alt="icon" className="" />}
    </button>
  ) 
}

export default CommonButton

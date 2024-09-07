import './CommonHeading.scss'
import { ReactNode } from 'react'

const CommonHeading = ({ heading, centered, text }: { text?: string | ReactNode; heading?: string | ReactNode; centered?: boolean }) => {
  return (
    <div className={`common_heading ${centered ? 'text-center' : ''}`}>
      {heading && <h2>{heading}</h2>}
      {text && <p>{text}</p>}
    </div>
  )
}

export default CommonHeading

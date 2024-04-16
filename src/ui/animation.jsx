import Image from "next/image"
export default function Lord(props) {
  return (
  <lord-icon
  src={props.src}
  trigger="hover"
  colors="primary:#4f1091,secondary:#109173"
  style={{width:"150px", height:"150px"}} /> 
  )
}
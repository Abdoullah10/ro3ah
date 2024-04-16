import Image from "next/image"
export default function Gif(props) {
  return (<Image src={props.src} alt={props.alt} width={120} height={120} />
    
  )
}

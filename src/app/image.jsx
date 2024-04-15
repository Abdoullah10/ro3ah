import Image from "next/image"
export default function Img() {
  return (
    <div className=" hover:">
      <Image
        src="/image.avif"
        alt="background image"
        layout="fill"  // Ajoutez cette propriété pour remplir l'élément parent
        objectFit="cover"
        quality={100}
        //className="blur-sm"
      />
      </div> );}
      

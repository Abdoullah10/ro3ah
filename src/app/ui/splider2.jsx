import Slider from "react-slick";
import Image from "next/image";

export default function Splider2() {
const data =[
  {
      "url": "https://www.vision2030.gov.sa/ar/",
      "imageUrl": "https://storage.rooaatt.com/uploads/4c306736-90eb-4388-8039-34ad319df36b.jpg"
  },
  {
      "url": "https://www.spoilz.studio/",
      "imageUrl": "https://storage.rooaatt.com/uploads/45a9d562-9a43-4449-8e8c-ea394dce0d57.jpg"
  },
  {
      "url": "https://3kchocolate.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/1fde6287-aa71-4879-82e5-0305ce497d76.jpg"
  },
  {
      "url": "https://conf.sa",
      "imageUrl": "https://storage.rooaatt.com/uploads/a0fa40cf-262e-42a0-b4c2-a4755ccd8c3d.png"
  },
  {
      "url": "https://hayhom.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/8ae2eff7-927f-4761-ab84-339dade61345.jpg"
  },
  {
      "url": "http://www.mpluses.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/48c9a3f2-4b4e-40c2-966b-7bdc3b0dec66.jpg"
  },
  {
      "url": "https://shttle.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/f1c42be3-a238-4bf2-9906-845bfeab609e.png"
  },
  {
      "url": "https://www.bin-saedan.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/34485962-ced5-47d8-a91c-939cd3493a96.png"
  },
  {
      "url": "https://subarashiisama.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/8e0b6d89-50d5-4804-afe8-57973c8e03c3.png"
  },
  {
      "url": "https://ceo.sa.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/f7bc27b6-3698-45c2-8a44-d22ed23993d1.png"
  },
  {
      "url": "https://tanami.org.sa/",
      "imageUrl": "https://storage.rooaatt.com/uploads/45c7d4e6-ee75-4f89-b204-b6794d7e42d8.png"
  },
  {
      "url": "https://www.the-space.me/",
      "imageUrl": "https://storage.rooaatt.com/uploads/912135fe-6a3f-4637-883c-c7eda909f021.png"
  },
  {
      "url": "https://beehive.com.sa/",
      "imageUrl": "https://storage.rooaatt.com/uploads/71e7c35d-dc4b-4d96-b8b8-fd0108aea41f.png"
  },
  {
      "url": "https://kenayah.sa/",
      "imageUrl": "https://storage.rooaatt.com/uploads/94c8bfbc-24f8-47d9-9dac-e45c559f6187.png"
  },
  {
      "url": "https://wakkl.com/ar/home",
      "imageUrl": "https://storage.rooaatt.com/uploads/969d270b-4976-4cb9-bd04-869e7c37346d.jpg"
  },
  {
      "url": "https://rhinewater.net/",
      "imageUrl": "https://storage.rooaatt.com/uploads/f469f4a7-80fc-42ba-b9e2-aa756b89239e.jpg"
  },
  {
      "url": "https://wazi.sa/",
      "imageUrl": "https://storage.rooaatt.com/uploads/8fbc4d58-65a4-4ba2-86be-1a6f40d1645a.jpg"
  },
  {
      "url": "https://tashgeel.sa/ar/",
      "imageUrl": "https://storage.rooaatt.com/uploads/237b27ab-cf76-41b2-a806-37c53e1fa91c.png"
  },
  {
      "url": "https://alharamplaza.com/ar/",
      "imageUrl": "https://storage.rooaatt.com/uploads/8a063bbe-08a8-40a5-bb67-d7022e09d945.jpg"
  },
  {
      "url": "https://techtiqueint.com",
      "imageUrl": "https://storage.rooaatt.com/uploads/6d9d80a9-97b9-49f4-bd89-fdb8507722eb.jpg"
  },
  {
      "url": "http://rehlacar.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/d2c97ce7-e831-44fd-a52b-f1e2d236b0e0.jpg"
  },
  {
      "url": "https://www.gea.gov.sa/",
      "imageUrl": "https://storage.rooaatt.com/uploads/5062ca9c-197c-47d4-8193-b0da8f0b92c3.jpg"
  },
  {
      "url": "https://www.palmlab.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/be14a0b3-d170-4042-8d03-d4b057c618d7.png"
  },
  {
      "url": "https://azzam.app",
      "imageUrl": "https://storage.rooaatt.com/uploads/26021f74-41c0-4353-b8f3-60dde316be29.jpg"
  },
  {
      "url": "https://www.kinona.sa/ar",
      "imageUrl": "https://storage.rooaatt.com/uploads/eec0195d-8947-4ab4-a6a4-db3ef8309ae0.jpg"
  },
  {
      "url": "https://studio1727.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/ff0a22bf-106f-401b-817d-872ad0a3ebdd.jpg"
  },
  {
      "url": "https://fwwaah.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/2fbb9172-d43e-4a99-9bc3-de3c848fd5a8.jpg"
  },
  {
      "url": "https://lendmesa.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/0b15cb17-8e51-4c3c-a309-2c423018ec08.jpg"
  },
  {
      "url": "https://takamolholding.com/ar/",
      "imageUrl": "https://storage.rooaatt.com/uploads/7074b42a-a803-41de-9732-46943692ac3a.jpg"
  },
  {
      "url": "https://azeeema.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/a975d94b-61fa-489b-bd78-3bf47609bc9e.png"
  },
  {
      "url": "https://www.instagram.com/booxartt/?igshid=MzRlODBiNWFlZA%3D%3D",
      "imageUrl": "https://storage.rooaatt.com/uploads/74eb6ed9-612e-443d-91ef-2a7d262b7498.jpg"
  },
  {
      "url": "https://www.morniksa.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/a98e7c35-e28f-4e68-bcd1-c5e7ea76c478.jpg"
  },
  {
      "url": "https://walaplus.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/5f2e8244-e818-43c3-a4eb-63ff0fe1eb1d.jpg"
  },
  {
      "url": "https://www.vision2030.gov.sa/ar/",
      "imageUrl": "https://storage.rooaatt.com/uploads/4c306736-90eb-4388-8039-34ad319df36b.jpg"
  },
  {
      "url": "https://www.spoilz.studio/",
      "imageUrl": "https://storage.rooaatt.com/uploads/45a9d562-9a43-4449-8e8c-ea394dce0d57.jpg"
  },
  {
      "url": "https://3kchocolate.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/1fde6287-aa71-4879-82e5-0305ce497d76.jpg"
  },
  {
      "url": "https://conf.sa",
      "imageUrl": "https://storage.rooaatt.com/uploads/a0fa40cf-262e-42a0-b4c2-a4755ccd8c3d.png"
  },
  {
      "url": "https://hayhom.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/8ae2eff7-927f-4761-ab84-339dade61345.jpg"
  },
  {
      "url": "http://www.mpluses.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/48c9a3f2-4b4e-40c2-966b-7bdc3b0dec66.jpg"
  },
  {
      "url": "https://shttle.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/f1c42be3-a238-4bf2-9906-845bfeab609e.png"
  },
  {
      "url": "https://www.bin-saedan.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/34485962-ced5-47d8-a91c-939cd3493a96.png"
  },
  {
      "url": "https://subarashiisama.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/8e0b6d89-50d5-4804-afe8-57973c8e03c3.png"
  },
  {
      "url": "https://ceo.sa.com/",
      "imageUrl": "https://storage.rooaatt.com/uploads/f7bc27b6-3698-45c2-8a44-d22ed23993d1.png"
    }
]

  var settings = {
  dots: true,
  infinite: true,
  speed: 500,

  slidesToShow: 5,
  slidesToScroll: 1,
  rtl: true,
  arrows: false,
  appendDots: dots => (
    <div>
      <ul className="flex justify-center -space-x-0.5"> {dots} </ul>
    </div>
  ),
};


  return (
    <div className="mx-24 ">
      <Slider {...settings}>
        {data.map((element) => {
          return (
              
                  <Image src={element.imageUrl} className="rounded-full" width={160} height={150}  />
        
                );
        })}
        
      </Slider>
    </div>
  );
}

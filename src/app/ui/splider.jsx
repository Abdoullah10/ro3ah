import Slider from "react-slick";
import Image from "next/image";

let data = [
  {
    "title": "اكاديمية ليدر الرياضية",
    "description": "نحن اكاديمية ليدر الرياضية، نسعى لتوفير بيئة خصبة وجذابة للاحتراف وتطوير المهارات الرياضية بكرة القدم في جميع الجوانب ال...",
    "image": "https://storage.rooaatt.com/uploads/3642d9a1-b32b-4c5c-a4c5-41bb3047d838.jpg",
    "url": "/platform/slug/اكاديمية-ليدر-الرياضية"
  },
  {
    "title": "مهرجان بطولات - IFAF.",
    "description": "مهرجان بطولة - IFAF . بمشاركة أقوى الأكاديميات السعودية لكرة القدم ( 2024 ) أكبر تجمع رياضي للأبطال الرياضيين اكثر من ع...",
    "image": "https://storage.rooaatt.com/uploads/b5e59c90-f162-4536-bcc4-ad68838d0329.png",
    "url": "/platform/slug/مهرجان-بطولة-ifaf"
  },
  {
    "title": "بطولة كرة الشبكة الاسيوية 2024 للسيدات",
    "description": "تعتبر لعبة كرة الشبكة لعبة نسائية و اعلنت اللجنة الاولمبية عن انشاء اللجنة السعودية لكرة الشبكة عام 2021 بتوصية من ولي ا...",
    "image": "https://storage.rooaatt.com/uploads/ddb952c7-35ec-475a-b60b-1d059e14ddf3.jpg",
    "url": "/platform/slug/بطولة-كرة-الشبكة-الاسيوية-2024-للسيدات"
  },
  {
    "title": "هاكاثون هندس",
    "description": "مسابقة جماعية سنوية توظف المبادئ الهندسية لإيجاد حلول إبداعية لمشكلات تخصصية خلال ثماني ساعات من قبل متخصصين.الأهداف:- ت...",
    "image": "https://storage.rooaatt.com/uploads/a0923064-ff6b-4802-8018-e6a8ff755884.jpg",
    "url": "/platform/slug/هاكاثون-هندس"
  },
  {
    "title": "حفل اطلاق تطبيق سعودي",
    "description": "حدث جديد سيتم فيه افتتاح تطبيق سعودي بحضور العديد من الشخصيات الملهمه من مختلف المجالات، ستتم اتاحة الفرصة للحضور بالتفا...",
    "image": "https://storage.rooaatt.com/uploads/fb66049f-fa95-43fb-b09c-d77b8cd7deab.jpg",
    "url": "/platform/slug/حفل-اطلاق-تطبيق-سعودي"
  }
];
export default function Splider() {
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  rtl: true,
  arrows: true,
};


  return (
    <div className="mx-24">
      <Slider {...settings}>
        {data.map((element) => {
          return (
            <div key={element.title} className="w-64 h-96 py-10 bg-white shadow-lg hover:shadow-2xl hover:scale-x-110">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 ">
                  <Image src={element.image} alt={element.title} className="rounded-full" width={200} height={200}  />
                </div>
                <h1>{element.title}</h1>
                <br />
                <p>{element.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

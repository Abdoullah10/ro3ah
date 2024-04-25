"use client"
import Logo from "./ui/logo";
import Br from "./ui/brain";
import Lord from "./ui/animation";
import Icon from "./ui/icon";
import Splider from "./ui/splider";
import Splider2 from "./ui/splider2";
export default function Home() {
 
  return (
    <div>
      <div className="fixed top-0 z-50 w-full h-20  px-10  bg-white shadow-md bg-opacity-95  flex justify-between items-center space-x-5 " >
        <div className="hidden  lg:flex pl-14    space-x-4  font-bold  font-mont text-sm   items-center  ">

          <button className="bg-violet-800 py-2 px-2.5 rounded-lg text-white hover:bg-violet-700   " >تسجيل الدخول</button>
          <button className="bg-teal-600 py-2 px-2.5 rounded-lg text-white hover:bg-teal-500   ">أضف إعلانك</button>
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden items-center pb-2  "><button className="text-5xl font-black items-center text-center">=</button></div>
        <div className="xl:pr-14 2xl:pr-14 flex space-x-7  items-center ">
        <div className="hidden xl:flex space-x-7 text-xs  font-extrabold text-violet-800 font-mont   items-center ">
          <h1 className="hover:text-violet-600  " >سجل كراعي محتمل</h1>
          <h1 className="hover:text-violet-600  " >الخدمات</h1>
          <h1 className="hover:text-violet-600  " >المدونة</h1>
          <h1 className="hover:text-violet-600  " >استكشف الفرص</h1>
          <h1 className="hover:text-violet-600  " >اللإعلان</h1>
          <h1 className="hover:text-violet-600  " >الفئات المستهدفة</h1>
          <h1 className="hover:text-violet-600  " >من نحن</h1>
          </div>
          <div>
          <Logo />
          </div>
        </div>
      </div>

      <div className=" flex justify-around  mt-20 w-full h-120  bg-violet-800  px-24   content-center items-center   ">
        <div className="hidden lg:block"><Br /></div>
        <div className=" space-y-4 font-mont text-white grid justify-items-end   ">
          <h1 className="text-2xl  font-black text-right " >طريقك الأسرع للحصول على الرعاية التسويقية</h1>
          <p className="text-lg text-right"> المنصة العربية الأولى المتخصصة في الشراكات وتسويق فرص الرعايات التجارية لجميع الأنشطة <br />والأحداث المختلفة </p>
          <br />
          <div className="flex space-x-2 font-bold justify-end   ">

            <button className="bg-teal-600 py-3 px-3 rounded-lg text-lg text-center text-white hover:bg-teal-500 ">ابحث</button>
            <input className=" text-right font-mont text-black w-3/4 mr-0  rounded-lg " type="text" placeholder="بحث عن فرص رعاية " />

          </div>

        </div>



      </div>
      <div className="flex justify-center items-center  h-120     bg-gray-100"><video width={700} height={700} controls src="/v.mp4" type="video/mp4" />
      </div>
      <div className="flex flex-col items-center py-10 space-y-16">
        <h1 className="flex text-center text-6xl font-black  text-violet-800 font-mont ">مزايا رعاة</h1>
        <div className="flex flex-row-reverse  text-center px-28 justify-between space-x-5 w-full">
          <div className="flex flex-col    items-center"><Lord icon="puzzle" /><br /><h1 className="font-mont font-semibold text-2xl">السهولة</h1><h1 className="mt-2 font-mont font-medium text-lg" >بخطوات بسيطة يمكنك إنشاء إعلانك لطلب <br />الرعاية</h1></div>
          <div className="flex flex-col    items-center"><Lord icon="superstar" /><br /><h1 className="font-mont font-semibold text-2xl">الشفافية</h1><h1 className="mt-2 font-mont font-medium text-lg">تواصل مع الرعاة بشكل مباشر وبدون وجود<br />وسطاء وبدون عمولة</h1></div>
          <div className="flex flex-col    items-center"><Lord icon="stars" /><br /><h1 className="font-mont font-semibold text-2xl">الانتشار</h1><h1 className="mt-2 font-mont font-medium text-lg"> لك وصول اعلانك لأكبر عدد ممكن من<br />الرعاة المحتملين</h1></div>
        </div>
  </div>
      <div className="flex flex-col  py-10 space-y-16">
        <div className="flex justify-between px-24 ">
          <div className="flex items-center space-x-3">
            <Icon/><h1 className="font-mont font-medium text-lg text-violet-800">عرض المزيد</h1></div>
            <h1 className="font-mont font-extrabold text-2xl text-violet-800">أحدث الإعلانات</h1></div>
        <Splider/>  
        </div>
        <div  className="flex flex-col mt-14 py-10 space-y-16">
        <h1 className=" text-center text-7xl font-extramax   text-violet-800 font-mont ">شركائنا</h1>
        <Splider2/>
        
        <div  className="flex flex-col mt-14 py-10 space-y-16">
        <h1 className="text-center text-5xl font-extramax   text-violet-800 font-mont ">كيف تعمل المنصة؟</h1>
        <div className="flex flex-col justify-center space-y-24 items-center">
        <h1 className="flex justify-center items-center text-white bg-violet-800 rounded-full font-medium  w-12 h-12 font-mont text-2xl transition ease-in-out duration-500 delay-150   hover:w-32 hover:h-32 hover:skew-y-12 hover:text-5xl hover:rounded-lg hover:translate-x-12">1</h1>
        <h1 className="flex justify-center items-center text-white bg-violet-800 rounded-full font-medium  w-12 h-12 font-mont text-2xl">2</h1>
        <h1 className="flex justify-center items-center text-white bg-violet-800 rounded-full font-medium  w-12 h-12 font-mont text-2xl">3</h1>
        <h1 className="flex justify-center items-center text-white bg-violet-800 rounded-full font-medium  w-12 h-12 font-mont text-2xl">4</h1>
        <h1 className="flex justify-center items-center text-white bg-violet-800 rounded-full font-medium  w-12 h-12 font-mont text-2xl">5</h1>
        
        
        
        
        
        </div>
        
        </div>
        
        
        
        </div>


       
    </div>
  );
}

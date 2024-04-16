import Logo from "../ui/logo";
import Br from "../ui/brain";
import C from "../ui/logo";
import Gif from "@/ui/gif";
export default function Home() {
  return (
    <div>
  <div className="fixed top-0  w-full h-20  px-10  bg-white shadow-md bg-opacity-95  flex justify-evenly items-center space-x-5 " >
   <div className="flex    space-x-4  font-bold  font-kufi text-sm   items-center ">
    
    <button className="bg-violet-800 py-2 px-2.5 rounded-lg text-white hover:bg-violet-700   " >تسجيل الدخول</button>
    <button className="bg-teal-600 py-2 px-2.5 rounded-lg text-white hover:bg-teal-500   ">أضف إعلانك</button>
    </div> 
  <div className="flex    space-x-7 text-xs  font-extrabold text-violet-800 font-kufi   items-center ">
    <h1 className="hover:text-violet-600  " >سجل كراعي محتمل</h1>
    <h1 className="hover:text-violet-600  " >الخدمات</h1>
    <h1 className="hover:text-violet-600  " >المدونة</h1>
    <h1 className="hover:text-violet-600  " >استكشف الفرص</h1>
    <h1 className="hover:text-violet-600  " >اللإعلان</h1>
    <h1 className="hover:text-violet-600  " >الفئات المستهدفة</h1>
    <h1 className="hover:text-violet-600  " >من نحن</h1>
    <Logo/>    
    </div>
  </div>
  
  <div className="mt-20 h-120  bg-violet-800 flex justify-around px-24   content-center items-center ">
  <div className=""><Br/></div> 
    <div className=" space-y-4 font-kufi text-white grid justify-items-end   ">
    <h1 className="text-2xl  font-black " >طريقك الأسرع للحصول على الرعاية التسويقية</h1>
    <p className="text-lg text-right"> المنصة العربية الأولى المتخصصة في الشراكات وتسويق فرص الرعايات التجارية لجميع الأنشطة <br/>والأحداث المختلفة </p>
    <br/>
    <div className="flex space-x-2 font-bold justify-end   ">
    
  <button className="bg-teal-600 py-3 px-3 rounded-lg text-lg text-center text-white hover:bg-teal-500 ">ابحث</button>
  <input className="text-right w-3/4 mr-0 rounded-lg " type="text"  placeholder="بحث عن فرص رعاية "/>
  
</div>
    
    </div>
    
   
               
    </div>
    <div className="flex justify-center items-center  h-120   bg-gray-100"><video width={700} height={700} controls src="/v.mp4" type="video/mp4"/>
  </div>
  <div className="flex flex-col items-center py-10 space-y-16">
    <h1 className="flex text-center text-6xl font-black  text-violet-800 font-kufi ">مزايا رعاة</h1>
    <div className="flex flex-row-reverse  text-center px-28 justify-between space-x-5 w-full">
      <div className="flex flex-col    items-center"><Gif src="/facile.gif" alt="facile"/><br/><h1 className="font-kufi font-bold text-2xl">السهولة</h1><h1 className="mt-2 font-kufi font-medium text-lg" >بخطوات بسيطة يمكنك إنشاء إعلانك لطلب <br/>الرعاية</h1></div>
      <div className="flex flex-col    items-center"><Gif src="/c.gif" alt="الشفافية"/><br/><h1 className="font-kufi font-bold text-2xl">الشفافية</h1><h1 className="mt-2 font-kufi font-medium text-lg">تواصل مع الرعاة بشكل مباشر وبدون وجود<br/>وسطاء وبدون عمولة</h1></div>
      <div className="flex flex-col    items-center"><Gif src="/e.gif" alt="الإنتشار"/><br/><h1 className="font-kufi font-bold text-2xl">الانتشار</h1><h1 className="mt-2 font-kufi font-medium text-lg"> لك وصول اعلانك لأكبر عدد ممكن من<br/>الرعاة المحتملين</h1></div>
    </div>



  </div>
    
    </div>
  );
}

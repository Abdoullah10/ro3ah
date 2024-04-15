import Logo from "./logo";
import Br from "./brain";
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
    <div className="flex justify-center py-5 bg-gray-100"><video className="w-1/3" /*width="400" height="1000"*/ controls src="/v.mp4" type="video/mp4"/>
  </div>
    
    </div>
  );
}

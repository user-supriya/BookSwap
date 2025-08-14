import Book from '../Assets/book.svg'

function authpage() {
  return (
    <div className="border border-2 border-black bg-gray-600 border-primary rounded-lg p-4 m-20 ml-[25%] mr-32 h-[520px] w-[50%]">
     <div className="text-center text-white text-3xl font-serif mt-20">
      Set up your profile
      </div> 
      <div className=" h-20 w-20 border border-[1px] ml-[42%] mt-5 border-black">
      <img src={Book}/>
      </div>
    
    </div>
  );
}
export default authpage;

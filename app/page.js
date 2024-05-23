import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-300">
      <div className="mx-8 px-10">
        <h1 className="text-center pt-12 font-bold text-3xl schoolbell">Welcome to the school</h1>
        <nav className=" p-6">
          <ul className="flex schoolbell font-bold text-lg justify-between  items-center">
            <li>About</li>
            <li>Methodology</li>
            <li>Admission</li>
            <li>Facilities</li>
            <li>Know us</li>
            <input className="w-1/5 border-2 border-black rounded-sm " />
          </ul>
        </nav>
        <div className="bg-violet-400 border-2 border-black text-center h-screen my-3">
          <div>
            <h1 className="schoolbell text-fuchsia-500 bordertext font-bold fontxbold">REGISTRATION <span className="text-yellow-300">OPEN</span></h1>
            <h1 className="schoolbell fontxbold text-white bordertext font-bold">UNTILL JULY 30</h1>
            <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd </p>
            <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd d sdhfshc</p>
            <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd d sdhfshc dsc sdoc dsc dsc</p>
          </div>
        </div>
      </div>
      <div className="mx-8 px-10 h-screen">
        <div className="mx-6">
          <div className="pt-6 schoolbell">
            <h1 className="text-fuchsia-500 bordertext font-bold fontxbold">Know our</h1>
            <h1 className="text-yellow-300 bordertext font-bold fontxbold ">Methodology</h1>
          </div>

          <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd </p>
          <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd d sdhfshc</p>
          <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd d sdhfshc dsc sdoc </p>
          <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd d sdhfshc</p>
        </div>
        <button className="bg-black mx-6 px-8 text-2xl font-bold text-white p-2  schoolbell">Read More</button>
      </div>
      <div className="h-screen  m-auto  flex justify-center items-center">
        <div className="bg-violet-400 w-2/5 h-3/4 border-4 border-black">
          <div className="text-center m-5 p-5 schoolbell">
            <h2 className="text-yellow-300 bordertext font-bold fontxbold"><span className="text-fuchsia-500 bordertext font-bold fontxbold">sign up</span>  for our</h2>
            <h2 className="text-yellow-300 bordertext font-bold fontxbold">parents workshop</h2>
          </div>
          <div className="flex justify-center flex-col items-center gap-5 m-5 p-5">
            <input className="border-2 border-black bg-zinc-300" />
            <input className="border-2 border-black bg-zinc-300" />
            <button className="bg-black text-white rounded-md p-2 my-5 schoolbell">sign up</button>
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-teal-400 w-full mx-8 ">
          <h2 className="mx-6 text-yellow-300 bordertext font-bold fontxbold schoolbell">2nd</h2>
          <div className="mx-6 font-bold text-xl schoolbell">
            <h2 className="text-fuchsia-500 bordertext font-bold fontxbold ">REGISTRATION</h2>
            <h2 className="text-fuchsia-500 bordertext font-bold fontxbold my-7">PERIOD</h2>
          </div>
          <div className="flex flex-col mx-6 font-bold text-xl">
            <span >ALL GRADES OF EDUCATION</span>
            <span >2021-2022 CYCLE</span>
          </div>
        </div>
      </div>
      <div className="h-screen text-center schoolbell text-teal-400 bordertext font-bold fontxbold ">
        Take advantage
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-yellow-300 border-2 border-black w-full mx-8" >
          {/* <div className="text-center">
            <h2 className="schoolbell text-fuchsia-500 bordertext font-bold fontxbold ">sign up</h2>
            <span className="schoolbell text-teal-400 bordertext font-bold fontxbold ">TAKE ADVANTAGE OF</span>
            <span className="schoolbell text-teal-400 bordertext font-bold fontxbold">OUR PROMOTIONS</span>
            <p>nkkddd d sd ld dd dlda ddaldshda ksv kshfksdh </p>
            <p>nkkddd d sd ld dd dlda ddaldshda ksv kshfksdh dksvisdis</p>
            <p>nkkddd d sd ld dd dlda ddaldshda ksv kshfksdh dksv</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-5 m-5 p-5">
            <input className="border-2 border-black bg-zinc-300" />
            <input className="border-2 border-black bg-zinc-300" />
            <button className="bg-black text-white rounded-md p-2 my-5 schoolbell font-bold text-xl">sign up</button>
          </div> */}
          <div className="flex justify-center flex-col gap-2 schoolbell">
            <span className=" text-fuchsia-500 bordertext font-bold fontxbold">sign up</span>
            <span className=" text-teal-400 bordertext font-bold fontxbold">TAKE ADVANTAGE OF</span>
            <span className="schoolbell text-teal-400 bordertext font-bold fontxbold">OUR PROMOTIONS</span>
            <p>nkkddd d sd ld dd dlda ddaldshda ksv kshfksdh </p>
            <p>nkkddd d sd ld dd dlda ddaldshda ksv kshfksdh dksvisdis</p>
            <p>nkkddd d sd ld dd dlda ddaldshda ksv kshfksdh dksv</p>
            <input className="bg-zinc-300 text-black" placeholder="email" />
            <button className="bg-teal-400 text-black font-bold text-2xl">sign up</button>
          </div>
        </div>
      </div>
      <div className="h-1/2 flex justify-center items-center">
        <div className="bg-black text-white w-full m-8 ">
          <h2 className="text-center mt-8 schoolbell font-bold fontxbold">welcome to the school</h2>
          <div className="flex justify-between">
            <ul className="gap-2 m-6 p-6 schoolbell font-bold text-2xl">
              <li className="p-4">About</li>
              <li className="p-4">Methodology</li>
              <li className="p-4">facilities</li>
              <li className="p-4">Admission</li>
              <li className="p-4">know us</li>
            </ul>
            <div className="flex justify-center flex-col gap-2 schoolbell">
              <span className=" text-yellow-300 bordertext font-bold fontxbold">sign up</span>
              <span className=" text-yellow-300 bordertext font-bold fontxbold">for our newsletter</span>
              <input className="bg-zinc-300 text-black" placeholder="email" />
              <button className="bg-teal-400 text-black font-bold text-2xl">sign up</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

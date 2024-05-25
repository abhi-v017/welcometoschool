import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-200">
      {/* first section */}
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
        <div className="bg-violet-400 border-4 flex flex-col justify-between border-black text-center h-screen my-3">
          <div className="flex justify-between">
            <img width={300} height={200} src="./vector_3.png" />
            <img className="" width={400} height={400} src="./vector_2.png" />
          </div>
          <div>
            <h1 className="schoolbell text-fuchsia-500 bordertext font-bold fontxbold">REGISTRATION <span className="text-yellow-300">OPEN</span></h1>
            <h1 className="schoolbell fontxbold text-white bordertext font-bold">UNTILL JULY 30</h1>
            <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd </p>
            <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd d sdhfshc</p>
            <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd d sdhfshc dsc sdoc dsc dsc</p>
          </div>
          <div className="flex justify-between mb-0">
            <img width={300} height={250} src="./vector_4.png" />
            <img className="overflow-hidden " width={650} src="./vector_.png" />
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="mx-8 px-10 ">
        <div className="flex justify-between">
          <div className="mx-6 flex flex-col justify-between gap-40">
            <div className="pt-14 mt-14 schoolbell">
              <h1 className="text-fuchsia-500 bordertext font-bold fontxbold">Know our</h1>
              <h1 className="text-yellow-300 bordertext font-bold fontxbold ">Methodology</h1>
              <div className="my-4 py-4 text-xl font-semibold">
                <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd </p>
                <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd d sdhfshc</p>
                <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd d sdhfshc dsc sdoc </p>
                <p>vkfvsfj kvbsbvds vbsjbvxbs vhdsbvkd d sdhfshc</p>
              </div>

              <button className="bg-black  px-8 text-2xl font-bold text-white p-2  schoolbell">Read More</button>
            </div>
            <div>
              <img width={500} src="./box.png" />
            </div>
          </div>
          <div className="flex flex-col gap-40">
            <img className="my-8" width={500} src="./vector_5.png" />
            <img width={600} src="./vector_6.png" />
          </div>
        </div>
      </div>
      {/* section */}
      <div className="flex justify-center items-center">

        <div className="mt-14 mb-14 bg-violet-400 border-4 border-black flex justify-center items-center flex-col">
          <div className="text-center m-5 p-5 schoolbell">
            <h2 className="text-yellow-300 bordertext font-bold fontxbold"><span className="text-fuchsia-500 bordertext font-bold fontxbold">sign up</span>  for our</h2>
            <h2 className="text-yellow-300 bordertext font-bold fontxbold">parents workshop</h2>
          </div>
          <div className="flex justify-center flex-col items-center gap-5 m-5 p-5">
            <input className="border-2 border-black bg-zinc-300" />
            <input className="border-2 border-black bg-zinc-300" />
            <button className="font-bold text-xl px-6 bg-black text-white rounded-md p-2 my-5 schoolbell">sign up</button>
          </div>
        </div>
        <div>
          <img className="-mx-8" src="./shape.png" />
        </div>
      </div>
      {/* section */}
      <div className=" flex items-center justify-center">
        <div className="bg-teal-400 w-full mx-8 border-4 border-black flex justify-between">
          <div className="">
            <h2 className="mx-10 my-4 text-yellow-300 bordertext font-bold fontxbold schoolbell">2nd</h2>
            <div className="mx-10 my-4 font-bold text-xl schoolbell">
              <h2 className="text-fuchsia-500 bordertext font-bold fontxbold ">REGISTRATION</h2>
              <h2 className="text-fuchsia-500 bordertext font-bold fontxbold my-7">PERIOD</h2>
            </div>
            <div className="flex flex-col mx-10 font-bold text-xl">
              <span className="underline">ALL GRADES OF EDUCATION</span>
              <span className="underline" >2021-2022 CYCLE</span>
              <img className="mt-14" width={600} src="./box.png" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <img width={600} className="rotate-180 mx-10" src="./vector_6.png"/>
            <img className="mx-8" src="./rectangle.png"/>
          </div>
        </div>
      </div>
      <div className="mx-10 my-12 gap-4 text-center schoolbell text-teal-400 bordertext font-bold fontxbold flex justify-between">
        <div className="flex flex-col">
          <span>Take</span>
          <span>advantage</span>
        </div>
        <div className=" image-container relative ">
          <img src="./shape7.png" />
          <div className="text-overlay absolute left-40 top-64 p-4">
            <div className="flex flex-col">
              <span className="text-yellow-300">25 <span className="text-3xl text-yellow-300">% OFF</span></span>
              <span className="text-2xl text-fuchsia-500">DURING THE</span>
              <span className="text-2xl text-fuchsia-500">WHOLE MONTH</span>
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="flex justify-center items-center">
        <div className="bg-yellow-300 border-4 border-black w-full mx-8 flex justify-between " >
          <div className="">
            <img src="./shape8.png" />
          </div>
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
          <div className="">
            <img src="./vector_4.png" />
          </div>
        </div>
      </div>
      {/* secton */}
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
              <span className=" text-yellow-300 bordertext font-bold fontxbold">sign up for</span>
              <span className=" text-yellow-300 bordertext font-bold fontxbold">our newsletter</span>
              <input className="bg-zinc-300 text-black" placeholder="email" />
              <button className="bg-teal-400 text-black font-bold text-2xl">sign up</button>
            </div>
            <div>
              <img src="./vector_10.png" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

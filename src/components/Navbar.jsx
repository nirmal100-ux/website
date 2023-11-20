import { useState } from "react"
const Navbar = () => {
  let [open, setopen] = useState(false)
  const menus = [
    { name: "About" },
    { name: "Our Service" },
    { name: "Contact Us" },
    { name: "Online admisson" },
    { name: "Course" },
  ]
  return (
    <nav className="flex items-center justify-between pt-5">
      <img src={open ? "./src/assets/icon-close.svg" : "./src/assets/icon-hamburger.svg"} className="md:hidden  fixed right-5 cursor-pointer z-20 top-6" onClick={() => setopen(!open)} />
      <div className="px-5">
        <h1 className="text-3xl  text-green-900">Imagine InfoTech</h1></div>

      <ul className={` backdrop-blur-md msm:bg-blue-gray-200 md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>
        {
          menus.map((menu, index) => (
            <li key={index} className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
              <a className="   text-green-900 cursor-pointer font-Barlow font-normal text-xl inline-block md:py-5 py-3">
                <span className="font-bold text-3xl "></span>  {menu.name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
export default Navbar
// const Header = () => {
//   return (
//     <div className="h-20 py-9 bg-white text-green-900">
//       <div className="flex sm:gap-60 msm:gap-2 ">
//         <h1 className="sm:px-20  sm:text-2xl msm:text sm:font-bold">Imagine </h1>
//         <div className="  flex sm:gap-20 sm:text-xl msm:text-sm sm:font-bold msm:gap-3">
//           <h1>About</h1>
//           <h1>Service</h1>
//           <h1>Online</h1>
//           <h1>Course</h1>
//           <h1>Contact</h1>
//         </div>
//       </div>



//     </div>
//   )
// }
// export default Header
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const nav = useNavigate();

  const [show, setShow] = useState(false);
  return (
    <div>
      <header className="bg-white  text-green-900 flex  px-14 py-10 justify-between pt-5">
        <div>
          <NavLink to='/' replace><h1 className='text-3xl font-bold'>Imagine InfoTech</h1>
          </NavLink>
        </div>

        {show && <nav className=" msm:flex hidden flex-col space-y-2 ">
          <NavLink className="" to=''><h1 className=' font-bold'>About</h1></NavLink>
          <NavLink className="font-bold " to=''>Our Service</NavLink>
          <NavLink className="font-bold" to=''>Contact Us</NavLink>
          <NavLink className="font-bold" to=''>Online admisson</NavLink>
          <NavLink className="font-bold" to=''>Course</NavLink>
        </nav>
        }

        <button onClick={() => setShow(!show)}>
          {show ? <i className="fa-solid fa-xmark hidden msm:flex"></i> : <i className="fa-solid fa-bars hidden msm:flex"></i>}
        </button>
        <nav className="msm:hidden space-x-5 flex items-center  ">
          <NavLink className="font-bold" to=''>About</NavLink>
          <NavLink className="font-bold" to=''>Our Service</NavLink>
          <NavLink className="font-bold" to=''>Contact Us</NavLink>
          <NavLink className="font-bold" to=''>Online Admision</NavLink>
          <NavLink className="font-bold" to=''>Course</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header

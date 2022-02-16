import React from 'react'

const Footer = () => {
  return (
      <div className="flex w-full space-x-20 mt-32 justify-evenly items-center  text-slate-200 py-10 bg-priBg">
          <div className=" cursor-pointer  text-sm">
              <div>Book A Call</div>
              <div>Terms</div>
              <div>Academy</div>
              <div>Login/Sign Up</div>
          </div>
          <div className=" text-sm">
              <div>Terms Of Use</div>
              <div>Privacy Policy</div>
          </div>
      </div>
  )
}

export default Footer
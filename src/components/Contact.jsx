import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://www.linkedin.com/in/tusharamritfale/" className="items">
            <FaLinkedin className='icons'/>
          </a>
          <a href="https://github.com/tushar0807?tab=repositories" className="items">
            <FaGithub className='icons'/>
          </a>
          <a href="mailto:tusharsng@gmail.com" className="items">
            <IoIosMail className='icons'/>
          </a>
          <a href="https://www.instagram.com/amritfale_tushar_/" className="items">
            <FaInstagramSquare className='icons'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
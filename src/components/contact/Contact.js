import React from "react"
import {
    FaFacebookF
} from "react-icons/fa"
import {
    AiTwotoneMail,
    AiFillPoundCircle,
    AiTwotonePhone,
    AiFillInfoCircle
} from "react-icons/ai"

import woodhouse from "../../woodhouse.png"
import "./contact.css"

const Contact = () => {

    const logo = <img src={woodhouse} alt="logo"></img>

    return (
        <section className="contact-container">
            <div className="logo left">
                {logo}
            </div>
            <div className="contact">
                <h1>Contact</h1>
                <ul>
                    <li><p><AiFillInfoCircle /> The Woodhouse Quality Furnishings</p></li>
                    <li><p><AiTwotonePhone /> Phone: 07717 167765</p></li>
                    <li><p><AiTwotoneMail /> Email: thewoodhouseqf@gmail.com</p></li>
                    <li><p><FaFacebookF /> Facebook: <a href="https://www.facebook.com/The-Wood-House-QF-107318274784533" rel="noreferrer" target="_blank">The Woodhouse</a></p></li>
                    <li><p><AiFillPoundCircle /> Etzy: <a href="www.etzy.com">The Woodhouse Shop</a></p></li>
                </ul>
            </div>
            <div className="logo left">
                {logo}
            </div>
        </section>
    )
}
export { Contact }
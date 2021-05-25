import React from "react"

import { ExpandingInfo } from "./ExpandingInfo"
import table from "../../../table.jpg"
import smallTable from "../../../smallTable.jpg"
import lamp from "../../../lamp.jpg"

import "./homeGallery.css"

const header1 = "Upcycled Furniture"
const header2 = "Uniquely Designed"
const header3 = "Commissions Accepted"

const desc1 = "Delightful hand-crafted furniture that's repurposed from old and unloved wood"
const desc2 = "Every design is a WoodHouse original, crafted with love and in opposition to conformity"
const desc3 = "Got an idea for the perfect piece of furniture? Get in touch and let me make it a reality!"

const HomeGallery = () => {
    return (
        <div className="gallery-container">
            <section className="gallery">
                <div className="image-and-info">
                    <img src={table} alt={"lewis"}></img>
                    <ExpandingInfo heading={header1} info={desc1} />
                </div>
                <div className="image-and-info">
                    <img src={lamp} alt={"lewis"}></img>
                    <ExpandingInfo heading={header2} info={desc2} />
                </div>
                <div className="image-and-info">
                    <img src={smallTable} alt={"lewis"}></img>
                    <ExpandingInfo heading={header3} info={desc3} />
                </div>
            </section>
        </div>
    )
}
export { HomeGallery }
import { GallerySection } from "./gallerySection/GallerySection"
import largeTable from "./galleryAssets/table1.jpg"
import smallTable1 from "./galleryAssets/table2.jpg"
import smallTable2 from "./galleryAssets/table3.jpg"
import smallTable3 from "./galleryAssets/table4.jpg"

import lamp1 from "./galleryAssets/lamp1.jpg"
import lamp2 from "./galleryAssets/lamp2.jpg"
import lamp3 from "./galleryAssets/lamp3.jpg"
import lamp4 from "./galleryAssets/lamp4.jpg"


import "./gallery.css"


const desc = "This is a table, made to the highest quality standards. Is it made of gold? Does it have diamonds? All these questions and more will be answered if you buy it. It's like a mystery box where the box is also a table. Who doesn't want that? Not me, that's for sure. Or.. yes me.. Double negatives are confusing. "
const desc2 = "This is a beautiful lamp I made - I call it the wood lamp because it is made out of wood. Buy the wood lamp, it's wooden, made out of wood, and it has varnish on it. I would recommend this lamp to anyone who needs a lamp, especially a wooden one. Or just a regular one. Either is fine for a recommendation."

const Gallery = () => {

    const imageSet1 = [
        largeTable,
        smallTable1,
        smallTable2,
        smallTable3
    ]
    const imageSet2 = [
        lamp1,
        lamp2,
        lamp3,
        lamp4
    ]

    return (
        <section className="main-gallery-container">

            <GallerySection
                direction="left"
                imageSet={imageSet1}
                description={desc}
            />
            <GallerySection
                direction="right"
                imageSet={imageSet2}
                description={desc2}
            />
        </section>
    )
}
export { Gallery }
import table from "../../table.jpg"
import smallTable from "../../smallTable.jpg"
import lamp from "../../lamp.jpg"
import "./gallery.css"

const Gallery = () => {
    return (
        <div className="gallery-container">
            <section className="gallery">
                <div className="image-and-info">
                    <img src={table} alt={"lewis"}></img>
                    <div className="info">
                        <div className="inner">
                            <span>i</span>
                            <h1>Upcycled Table</h1>
                            <p>Delightful hand-crafted furniture that's repurposed from old and unloved wood</p>
                        </div>
                    </div>
                </div>
                <div className="image-and-info">
                    <img src={lamp} alt={"lewis"}></img>
                    <div className="info">
                        <div className="inner">
                            <span>i</span>
                            <h1>Upcycled Table</h1>
                            <p>Delightful hand-crafted furniture that's repurposed from old and unloved wood</p>
                        </div>
                    </div>
                </div>
                <div className="image-and-info">
                    <img src={smallTable} alt={"lewis"}></img>
                    <div className="info">
                        <div className="inner">
                            <span>i</span>
                            <h1>Upcycled Table</h1>
                            <p>Delightful hand-crafted furniture that's repurposed from old and unloved wood</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export { Gallery }
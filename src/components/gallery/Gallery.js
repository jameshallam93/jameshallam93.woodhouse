import table from "../../table.jpg"
import smallTable from "../../smallTable.jpg"
import lamp from "../../lamp.jpg"
import "./gallery.css"

const Gallery = () => {
    return (
        <div className="gallery-container">
            <section className="gallery">
                <img src={table} alt={"lewis"}></img>
                <img src={lamp} alt={"lew2"}></img>
                <img src={smallTable} alt={"lew2"}></img>
            </section>
        </div>
    )
}
export { Gallery }
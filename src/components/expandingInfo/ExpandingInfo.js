import { InfoInner } from "./InfoInner"
import "./expandingInfo.css"
const title = "Another product"
const desc = "This is one more product which I am testing out which is sure to make you happy!"

const ExpandingInfo = () => {
    return (
        <section className="info-container">
            <div className="info left">
                <div className="inner">
                    <span>i</span>
                    <h1>Upcycled Table</h1>
                    <p>Delightful hand-crafted furniture that's repurposed from old and unloved wood</p>
                </div>
            </div>
            <div className="info mid">
                <div className="inner">
                    <span>i</span>
                    <h1>Raw Lamp</h1>
                    <p>A great way to light up a room, and show some personality at the same time!</p>
                </div>
            </div>
            <div className="info right">
                <div className="inner">
                    <span>i</span>
                    <h1>Commissions accepted</h1>
                    <p> Got an idea for something special? Get in touch and let us make it a reality!</p>
                </div>
            </div>
        </section>
    )
}

export { ExpandingInfo }
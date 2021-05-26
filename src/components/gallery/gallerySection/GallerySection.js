import { useState, useEffect } from "react";
import "./gallerySection.css"

const GallerySection = (props) => {

    const { direction, imageSet, description } = props

    const [currentImage, setCurrentImage] = useState(imageSet[0])
    const [availableImages, setAvailableImages] = useState([])

    useEffect(() => {
        setAvailableImages([...imageSet])
    }, [imageSet])

    const handleImageChange = (index) => {
        setCurrentImage(availableImages[index])
    }
    const returnIsActive = (index) => {
        if (availableImages[index] === currentImage) {
            return "active"
        }
        return "inactive"
    }
    return (
        <div className={`gallery-section ${direction}}`}>
            <div className={`active-image ${direction}`}>
                <div className="active-image-container">
                    <img src={currentImage} alt="large-table"></img>
                </div>
                <div className="product-description">
                    <p>{description}</p>
                </div>
            </div>
            <div className={`small-images ${direction}`}>
                <img src={availableImages[0]} className={returnIsActive(0)} alt="smallTable1" onClick={() => handleImageChange(0)}></img>
                <img src={availableImages[1]} className={returnIsActive(1)} alt="smallTable2" onClick={() => handleImageChange(1)}></img>
                <img src={availableImages[2]} className={returnIsActive(2)} alt="smallTable3" onClick={() => handleImageChange(2)}></img>
                <img src={availableImages[3]} className={returnIsActive(3)} alt="smallTable3" onClick={() => handleImageChange(3)}></img>
            </div>
        </div>
    )
}

export { GallerySection }
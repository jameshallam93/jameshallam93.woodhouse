
import { HomeGallery } from "./homeGallery/HomeGallery"
import "./home.css"
import { AboutMe } from "./aboutme/AboutMe"

const Home = () => {
    return (
        <section className="Home">
            <HomeGallery />
            <AboutMe />
        </section>
    )
}
export { Home }
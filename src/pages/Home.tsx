import BuyerSays from "../components/BuyerSays";
import Footer from "../components/Footer";
import HeroSection from "../components/Herosection";
import LatestBooks from "../components/LatestBooks";
import NavBar from "../components/Navbar";


const Home = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <LatestBooks />
            <BuyerSays />
            <Footer />
        </>
    )
}

export default Home
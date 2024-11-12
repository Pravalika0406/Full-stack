import HomeCurousel from "../components/HomeCarousel"
import HomeCards from "../components/HomeCards"

import SocialCard from "../components/SocialCard"



const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-start gap-8 w-screen h-full">
                <HomeCurousel/>
                <HomeCards/>
                <SocialCard/>
            </div>
        </>
    )
}

export default Home
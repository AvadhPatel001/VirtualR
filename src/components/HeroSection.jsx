import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
                    {" "}for developers
                </span>
            </h1>
            <p className="mt-5 text-neutral-500 max-w-4xl text-lg text-center">
                Empower your creativity and bring your VR app ideas to life with our intuative development tools. Get started today and turn your imagination into immersive reality!
            </p>

            <div className="flex items-center justify-center my-10">
                <a href="#" className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 mx-3 rounded-md">
                    Start For Free
                </a>
                <a href="#" className="px-3 py-2  mx-3 border rounded-md hover:border-orange-500 transition duration-300">
                    Documentation
                </a>
            </div>
            <div className="flex justify-center mt-10">
                <video autoPlay muted loop className="w-1/2 rounded-xl border-orange-700 shadow-orange-400 border mx-2 my-4">
                    <source src={video1} type="video/mp4" />
                    Your Browser does not support the video tag.
                </video>
                <video autoPlay muted loop className="w-1/2 rounded-xl border-orange-700 shadow-orange-400 border mx-2 my-4">
                    <source src={video2} type="video/mp4" />
                    Your Browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default HeroSection
import { features } from "../constants";
const Features = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-16" id="features">
            <div className="bg-neutral-900 text-sm w-fit h-fit p-2 rounded-2xl text-orange-500">
                <span>Features</span>
            </div>
            <h1 className="text-4xl lg:text-7xl sm:text-5xl mt-16">Easily build <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">your code</span></h1>

            <div className="flex flex-wrap lg:mt-20 mt-10">
                {features.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex mx-7 w-10 h-10 bg-neutral-900 text-orange-600 p-2 rounded-full">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl mt-1 mb-5">{item.text}</h3>
                                <p className="text-md text-neutral-500 p-2 mb-20">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full border-b border-neutral-800"></div>
        </div>
    )
}

export default Features 
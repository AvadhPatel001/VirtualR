import { testimonials } from "../constants";
const Testimonials = () => {
    return (
        <div className="mt-20" id="testimonials">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-10">What people are saying</h1>

            <div className="flex flex-wrap justify-center">
                {testimonials.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="border border-neutral-800 rounded-xl p-6 tracking-tight">
                            <p className="text-neutral-400 text-justify">{item.text}</p>
                            <div className="flex items-start mt-8">
                                <img src={item.image} alt={item.user} className="w-12 h-12 rounded-full border border-neutral-400"/>
                                <div className="mx-5 mt-1">
                                    <h4 className="text-neutral-400">{item.user}</h4>
                                    <p className="text-neutral-600 text-sm italic">{item.company}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";
const Pricing = () => {
    return (
        <div className="mt-20" id="pricing">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center my-10">Pricing</h1>

            <div className="flex flex-wrap">
                {pricingOptions.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-500 rounded-2xl">
                            <p className="text-4xl mb-8">
                                {item.title}
                                {item.title == "Pro" &&
                                    <span className="mx-2 text-xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">(Most Popular)</span>
                                }
                            </p>
                            <p className="mb-6">
                                <span className="text-5xl">
                                    {item.price}
                                </span>
                                <span className="text-neutral-500 ml-2">
                                    /Month
                                </span>
                            </p>

                            <ul className="mt-10">
                                {item.features.map((feature, index) => (
                                    <li key={index} className="flex my-8">
                                        <CheckCircle2 />
                                        <span className="px-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex justify-center items-center border border-orange-800 text-center  w-full py-3 rounded-xl hover:bg-orange-800 transition duration-200">Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing
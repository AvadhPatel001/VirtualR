import codeimg from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
import {checklistItems} from "../constants";
const Workflow = () => {
  return (
    <div className="mt-20 sm:mt-16" id="workflow">
        <h1 className="text-center text-4xl lg:text-6xl sm:text-5xl">Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">coding workflow.</span></h1>

        <div className="flex flex-wrap justify-center mt-10">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeimg} alt="code" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index)=>(
                    <div key={index} className="flex mb-10">
                        <div className="text-green-500 w-10 h-10 flex justify-center items-center p-2 mx-6 bg-neutral-900 rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h3 className="text-xl mt-1 mb-3">{item.title}</h3>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow
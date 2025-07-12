import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
    return (
        <footer className="mt-20 border-t pb-10 border-neutral-800">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="mt-10">
                    <h3 className="text-md font-semibold mb-5">Resources</h3>
                    <ul className="space-y-3">
                        {resourcesLinks.map((item, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-10">
                    <h3 className="text-md font-semibold mb-5">Platform</h3>
                    <ul className="space-y-3">
                        {platformLinks.map((item, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-10">
                    <h3 className="text-md font-semibold mb-5">Community</h3>
                    <ul className="space-y-3">
                        {communityLinks.map((item, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

const Footer = () => {

    const pages = [
        {
            display:"Home",
            link:"/"
        },
        {
            display:"Portofolio",
            link:"/portofolio"
        },
        {
            display:"Price Calculator",
            link:"/price-calculator"
        }
    ]

    return(
        <div className="flex w-full flex-col">
            <div className="flex flex-row w-full">
                <div className="flex flex-col">
                
                </div>
                <div className="flex flex-col">
                
                </div>
            </div>
            <div className="flex flex-row w-full text-white justify-center border-t-1 border-white p-6">
                Copyright @ Crusadevs 2025
            </div>
        </div>
    )
}

export default Footer
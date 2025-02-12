import { useSpring,animated } from "@react-spring/web";
import { Parallax,ParallaxLayer} from "@react-spring/parallax";
import Logo from "../../assets/logoTransparent.svg"
import Software from "../../assets/SOFTWARE.svg"
import Development from "../../assets/DEVELOPMENT.svg"
import Planet from "../../assets/planet.svg"
import { useEffect, useRef } from "react";
import "animate.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "../../components/contact-form";
import Footer from "../../components/footer";

const Home = () => {
    const [planetStyle,planetApi] = useSpring(() => ({
        from:{
            transform:"rotate(0deg)"
        },
        config:{
            duration:750,
        }  
    }))

    useEffect(() => {
        planetApi.start({
            to:{
                transform:"rotate(360deg)"
            }
        })
    },[])

    const domains = [
        {
            title:"Full Stack Web Development",
            icons:[
                {
                    name:"React",
                    icon:"fa-brands fa-react",
                    },
                {
                    name:"Angular",
                    icon:"fa-brands fa-angular",
                    },
                {
                    name:"NodeJS",
                    icon:"fa-brands fa-node",
                    },
                {
                    name:"Flask/Django",
                    icon:"fa-brands fa-python"
                }
            ]
        },
        {
            title:"Android & iOS Development",
            icons:[
                {
                    name:"React Native",
                    icon:"fa-brands fa-react"
                },
                {
                    name:"Firebase",
                    icon:"fa-solid fa-fire"
                }
            ]
        },
        {
            title:"Automation and AI Solutions",
            icons:[
                {
                    name:"Custom AI Solutions",
                    icon:"fa-solid fa-robot"
                },
                {
                    name:"AI API Implementation",
                    icon:"fa-solid fa-code-branch"
                },
                {
                    name:"Process automation",
                    icon:"fa-solid fa-oil-can"
                }
            ]
        }
    ]

    return(
    <>
        <Parallax pages={3} >
            <ParallaxLayer
            offset={0}
            speed={-1.5}
            className="flex content-center justify-center absolute w-full h-screen">
                <animated.img
                className="w-[30%] object-contain relative left-[1%] p-[3%] animate__animated animate__fadeInUp"
                src={Software}
                style={{}}/>
                <animated.img
                className="w-[30%] ml-[-72px] mr-[-64px] animate__animated animate__fadeInUp"
                src={Logo}
                style={{}}/>
                <animated.img
                className="w-[30%] object-contain animate__animated animate__fadeInUp"
                src={Development}
                style={{}}
                />
            </ParallaxLayer>
            <ParallaxLayer
            offset={0}
            speed={-1}>
                <animated.img
                src={Planet}
                className="absolute right-12 top-12"
                style={{...planetStyle}}
                />
            </ParallaxLayer>
            <ParallaxLayer
            className="bg-[url(./assets/landscape.svg)] bg-left-bottom z-3"
            style={{backgroundRepeat:"repeat-x"}}
            >
            </ParallaxLayer>
            <ParallaxLayer
            offset={1}
            className="bg-[#343434]"></ParallaxLayer>
            <ParallaxLayer
            offset={1}
            speed={-.25}
            className="">
                <div className="w-full h-full flex absolute pt-[10%] pb-[10%]">
                    <div className="w-1/2 h-full p-5 border-r border-white">
                        <h2 className="text-white w-full text-center text-4xl p-6">Services</h2>
                        {domains.map((domain,i) => (
                            <div className="p-2" key={i}>
                                <h2 className="p-2 text-white w-full text-center text-2xl">{domain.title}</h2>
                                <div className="w-full flex justify-center">
                                    {domain.icons.map((tech,i) =>(
                                        <FontAwesomeIcon icon={tech.icon} key={i} className="p-1 text-5xl teansition-all text-[#fa4171]"/>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-1/2 h-full border-l border-white flex content-end items-end">
                        <h2 className="text-white w-full text-center text-4xl p-6">See our team & portofolio</h2>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
            offset={1}
            speed={0}
            className="flex flex-col"
            >
                <div className="bg-[url(./assets/rocks.svg)] w-full h-[50%] rotate-180 "></div>
                <div className="bg-[url(./assets/rocks.svg)] w-full h-[50%] "></div>
            </ParallaxLayer>
            <ParallaxLayer
            offset={1}
            speed={.75}>
                <animated.img
                src={Planet}
                className="absolute left-12 top-64 transition-all duration-1000 hover:rotate-360"
                />
            </ParallaxLayer>
            <ParallaxLayer
            offset={2}
            className="bg-[#414141] flex flex-col justify-center items-center">
                <Contact />
                <Footer />
            </ParallaxLayer>
        </Parallax>
    </>
    )
}

export default Home;
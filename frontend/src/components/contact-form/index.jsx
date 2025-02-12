import Vines from "../../assets/vine_long.png"
import Bird from "../../assets/bird.png"
import { animated } from '@react-spring/web'
import { useSpring } from "@react-spring/web"

const Contact = () => {
    const vinesStyles = useSpring({
        from: { transform: "translateX(0px)" },
        to: async (next) => {
          while (true) {
            await next({ transform: "translateX(20px)" });
            await next({ transform: "translateX(0px)" });
          }
        },
        config: { tension: 20, friction: 10 },
        loop: true,
      });

      const birdsStyles = useSpring({
        from: { transform: "rotate(0deg)" },
        to: async (next) => {
          while (true) {
            await next({ transform: "rotate(20deg)" });
            await next({ transform: "rotate(-20deg)" });
          }
        },
        config: { tension: 40, friction: 10 },
        loop: true,
      });

    return(
        <>
        <h2 className="w-full text-center text-[#fa4171] text-6xl font-bold p-16">Contact Us</h2>
        <div id="contact" className="w-[70%] h-[65%] flex justify-center items-center mb-[5%]">
            <div className="bg-[#343434] w-[70%] h-full relative rounded-b-[32px] flex flex-col">
                <div className="bg-[#292929] w-[112.5%] absolute h-20 translate-x-[-5.5%] z-3">
                    <animated.img
                    src={Bird}
                    className="absolute translate-y-[-97%]"
                    style={birdsStyles} />
                </div>
                <div className="w-full h-full pl-[15%] pr-[15%] pt-[15%] pb-[10%] flex flex-col gap-10 overflow-hidden">
                    <animated.img
                    src={Vines}
                    className="h-full object-cover absolute left-[-13%] top-16"
                    style={vinesStyles}/>
                    <animated.img
                    src={Vines}
                    className="h-[80%] object-cover absolute right-[-5%] top-16"
                    style={vinesStyles}/>
                    <input className="bg-[#414141] text-white p-4 w-full" type="text" placeholder="Name" />
                    <input className="bg-[#414141] text-white p-4 w-full" type="text" placeholder="Email" />
                    <input className="bg-[#414141] text-white w-full grow p-4" type="text" placeholder="Message" />
                    <div className="text-white bg-yellow-600 px-10 py-6 absolute right-0 bottom-0 rounded-br-4xl cursor-pointer transition-all hover:px-14 z-3">
                        <animated.img
                        src={Bird}
                        className="absolute translate-y-[-97%] translate-x-[-18px] top-0 scale-x-[-1]"
                        style={birdsStyles} />
                        Send
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;
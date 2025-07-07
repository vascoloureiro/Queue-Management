import './CSS/Home.css'

import Header from "./Header.jsx"
import Footer from "./footer.jsx"

import { FcConferenceCall, FcBullish } from "react-icons/fc";
import { IoQrCodeSharp } from "react-icons/io5";


export default function HomeIndex() {
    return (<>
        <Header />
        <div className="element-one" id="one">
            <div className="element-one-children">
                <h1 className="title" id="red">Queue</h1>
                <h1 className="title">Management</h1>
                <p>We improve yout custom expirence</p>
                <div className="gtk-box">
                    <button className="gtk-btn" >Get To Know Us</button>
                </div>
            </div>

            <div className="element-one-children-circle">
                <div className="circle">
                </div>
            </div>
        </div>

        <div className="element-two">
            <div className="element-two-children">
                <h1 className="title-center">How we improve customer service</h1>
            </div>
            <div className="services" >
                <div id="space">
                    <IoQrCodeSharp size="60px" />
                    <p>E-Ticket</p>
                </div>

                <div id="space">
                    <FcBullish size="60px" />
                    <p>States</p>
                </div>

                <div id="space">
                    <FcConferenceCall size="60px" />
                    <p>Queue Management</p>
                </div>

                <div id="space">
                    <FcConferenceCall size="60px" />
                    <p>Queue Management</p>
                </div>
            </div>
        </div>
        
        <section id="changeAnimation">
            <div className="element-one">
                <div className="element-three-children" id="padin-not0">
                    <h1 className="title">
                        <span id="blue">AD:</span>
                        <span >Queue</span>
                    </h1>
                    <div id="space">
                        <p>Qube is a smart queue management system that swiftly organizes services’  waiting lines. Remarkably adaptable to services where time is priceless  and must have a quick and efficient response.</p>
                        <p>A smart solution to elevate the service experience to a whole new level.</p>
                    </div>
                    <div className="gtk-box">
                        <button className="gtk-btn">Know More</button>
                    </div>
                </div>

                <div className="element-one-children-circle">
                    {/* <div className="circle" id="background-blue">
                       
                    </div> */}
                </div>
            </div>
        </section>

        <div className="breakpoint-Canvas-one">
        </div>

        <section id="changeAnimation2">
            <div className="element-one">
                <div className="element-one-children-circle">
                    <div className="circle">

                    </div>
                </div>
                <div className="element-three-children" id="padin-not0">
                    <h1 className="title">
                        <span id="green">QR:</span>
                        <span >Queue</span>
                    </h1>
                    <div id="space" >
                        <p>QR-Queue facilitates a seamless customer journey  combining automation and flexibility to allow customers to wait where  and how they want.Time is priceless!</p>
                    </div>
                    <div className="gtk-box">
                        <button className="gtk-btn">Know More</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="changeModel">
            <div className="element-one">
                <div className="element-three-children" id="padin-not0">
                    <h1 className="title">
                        <span id="red">Y:</span>
                        <span >Queue</span>
                    </h1>
                    <div id="space">
                        <p>Qube is a smart queue management system that swiftly organizes services’  waiting lines. Remarkably adaptable to services where time is priceless  and must have a quick and efficient response.</p>
                        <p>A smart solution to elevate the service experience to a whole new level.</p>
                    </div>
                    <div className="gtk-box">
                       
                        <button className="gtk-btn">Know More</button>
                       
                    </div>
                </div>

                <div className="element-one-children-circle">
                    {/*<div className="circle" id="background-red">
                            <h1>A</h1>
                        </div>*/}
                </div>
            </div>
        </section>

        <div className="breakpoint-Canvas-one">
        </div>

        <div className="element-one">
            <div className="element-three-children" id="padin-zero">
                <h1 className="title" id="center">Partners</h1>
                <div className="banner">
                    <div className="slider">
                        <div className="slide-track">
                            {[...Array(14)].map((_, index) => (
                                <div className="slide" key={index}>
                                    <img
                                        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${(index % 7) + 1}.png`}
                                        height="100"
                                        width="250"
                                        alt={`Partner ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="slider">
                        <div className="slide-track" id="reverse">
                            {[...Array(14)].map((_, index) => (
                                <div className="slide" key={index}>
                                    <img
                                        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${(index % 7) + 1}.png`}
                                        height="100"
                                        width="250"
                                        alt={`Partner ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="slider">
                        <div className="slide-track">
                            {[...Array(14)].map((_, index) => (
                                <div className="slide" key={index}>
                                    <img
                                        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${(index % 7) + 1}.png`}
                                        height="100"
                                        width="250"
                                        alt={`Partner ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="element-one">
        </div>
    <Footer />
</>)
}
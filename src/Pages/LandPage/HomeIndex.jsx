import './CSS/Home.css'

import Header from "./Header.jsx"
import Footer from "./footer.jsx"

import { FcConferenceCall, FcBullish } from "react-icons/fc";
import { IoQrCodeSharp } from "react-icons/io5";


export default function HomeIndex() {
    return (<>
        <Header />
        <div className="container-main" >
            <div className="sub-container-main">
                <span><h1 className='title red'>Queue</h1><h1 className='title'>Manager</h1></span>
                <p>We inovate bla bla bla bla blabla bla blabla bla bla bla bla</p>
                <button
                    className='gtk-btn'

                >Get to Know us</button>
            </div>


            <div className="sub-container-main-right">
                <div className="circle">
                </div>
            </div>
        </div>

        <div className="container-main-horizontal">
            <div className="ontainer-main-horizontal">
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

        <div className="container-main">
            <div className="sub-container-main">
                <span><h1 className='title blue'>AD</h1><h1 className='title'>Queue</h1></span>
                <p>Qube is a smart queue management system that swiftly organizes services’  waiting lines. Remarkably adaptable to services where time is priceless  and must have a quick and efficient response.</p>
                <p>A smart solution to elevate the service experience to a whole new level.</p>

                <button className="gtk-btn">Know More</button>
            </div>

            <div className="element-one-children-circle">
                <div className="circle" id="background-blue">

                </div>
            </div>
        </div>

        <div className=".container-main">
            <div className="sub-container-main-right">
                <div className="circle">

                </div>
            </div>
            <div className="sub-container-main" >
                <span><h1 className='title red'>ST</h1><h1 className='title'>Queue</h1></span>
                <p>Qube is a smart queue management system that swiftly organizes services’  waiting lines. Remarkably adaptable to services where time is priceless  and must have a quick and efficient response.</p>
                <p>A smart solution to elevate the service experience to a whole new level.</p>

                <button className="gtk-btn">Know More</button>
            </div>
        </div>


        <Footer />
    </>)
}

/*


        
       
      
      

        <div id="changeAnimation2">
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
        </div>

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
                        </div>*
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
        </div> /*/
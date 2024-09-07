"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { Container, Navbar } from "react-bootstrap"
import "./landingheader.scss"
import Image from "next/image";
import logo from "../../../public/images/logo.svg"
import { JoinWaitlist } from "../common/Modal/JoinWaitlist/JoinWaitlist";

const LandingHeader = () => {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const toggleClass = () => {
        setIsActive(!isActive);
    };

    const ref: any = useRef();
    const onclick = () => {
        if (ref.current && document.body.clientWidth < 1199) {
            ref.current.click();
        }
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        onclick();  // Close the menu after clicking on the link
    };

    return (
        <>
            <header className={isActive ? 'siteHeader openmenu' : 'siteHeader'}>
                <Navbar expand="xl" className="w-100">
                    <Container className="">
                        <Link href="/" className="brandLogo">
                            <Image src={logo} alt={logo} className="d-inline-block" />
                        </Link>
                        <Navbar.Collapse className="justify-content-end">
                            <Link onClick={() => scrollToSection("#faq")} className="nav-link" href={"#faq"}>
                                FAQ
                            </Link>
                            <Link onClick={() => scrollToSection("#about")} className="nav-link" href={"#About"}>
                                About
                            </Link>
                            <Link onClick={onclick}  href={""} className="nav-link">
                                Launch App
                            </Link>
                        </Navbar.Collapse>
                        {isActive && <div onClick={onclick} className={`${isActive ? 'active' : ''} sidebar_backdrop d-xl-none`} />}
                        <div className="d-flex align-items-center justify-content-between ms-4">
                            <button onClick={() => setShow(true)} className="btn-style">Join Waitlist</button>
                            <Navbar.Toggle ref={ref} onClick={toggleClass} />
                        </div>
                    </Container>
                </Navbar>
            </header>
            <JoinWaitlist show={show} handleClose={() => setShow(false)} />
        </>
    )
}

export default LandingHeader;

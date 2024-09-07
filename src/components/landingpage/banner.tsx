"use client"
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import "./styles/banner.scss"
import { JoinWaitlist } from '../common/Modal/JoinWaitlist/JoinWaitlist';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../../../public/icons/icons';

const Banner = () => { 
    const [show, setShow] = useState(false);
    return (
        <section className="banner">
            <video autoPlay muted loop className="banner-video">
                 <source src="/images/Banner-orbit-background.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
            </video>
            <Container>
                <div className="banner_in">
                    <div className="banner_content">
                        <h1>
                            Introducing 
                        </h1>
                        <p><span>Stable. INRC</span></p>
                        <p className='des'>First CBDC Backed Stablecoin Fully Compliant and Built in India</p>
                       <button onClick={() => setShow(true)}>Join waitlist</button>
                    </div>
                    <ul>
                        <li><Link href={""} rel="noreferrer" target="_blank"><GithubIcon /></Link></li>
                        <li><Link href={""} rel="noreferrer" target="_blank"><TwitterIcon /></Link></li>
                        <li><Link href={""} rel="noreferrer" target="_blank"><DiscordIcon /></Link></li>
                    </ul>
                </div>
            </Container>

            <JoinWaitlist show={show} handleClose={() => setShow(false)} />
        </section>
    )
}

export default Banner

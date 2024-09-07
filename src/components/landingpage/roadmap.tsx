"use client";
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider, { Settings } from 'react-slick'
import "./styles/roadmap.scss"
import { InfraIcon, IntergrationIcon, KYCUsersIcon, LitepaperIcon, MultiChainIcon, OffRampIcon, PartnershipsIcon, RoadmapLeft, RoadmapRight, SecurityAuditingIcon, SmartContractIcon, TeamBuildingIcon, WebsiteIcon } from '../../../public/icons/icons';

const PrevArrow = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button onClick={props.onClick} className={`slick-arrow prev-arrow ${props.className?.includes("disabled") ? "disabled" : ""}`}>
            <RoadmapLeft />
        </button>
    )
}
const NextArrow = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button onClick={props.onClick} className={`slick-arrow next-arrow ${props.className?.includes("disabled") ? "disabled" : ""}`}>
            <RoadmapRight />
        </button>
    )
}

const Roadmap = () => {
    const settings: Settings = {
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    }
    return (
        <section className="roadmap_section">
            <Container>
                <h2>Roadmap</h2>
                {/* {
                    Array.from({ length: 4 }).map((_item, index) => {
                        return (
                            <Col key={index} md={3}>
                                <div className="roadmap_box">
                                    <h3>Feature {index + 1}</h3>
                                </div>
                            </Col>
                        )
                    })
                } */}
                <Slider {...settings}>
                    <div className="roadmap_box_title">
                        <h3><span className='year'>2024</span> Q3</h3>
                    </div>
                    <div className="up">
                        <WebsiteIcon />
                        <h4>Website</h4>
                    </div>
                    <div className="down">
                        <LitepaperIcon />
                        <h4>Litepaper</h4>
                    </div>
                    <div className="up">
                        <TeamBuildingIcon />
                        <h4>Team building</h4>
                    </div>
                    <div className="down">
                        <SmartContractIcon />
                        <h4>Smart Contract </h4>
                    </div>
                    <div className="roadmap_box_title">
                        <h3><span className='year'>2024</span> Q4</h3>
                    </div>
                    <div className="up">
                        <InfraIcon />
                        <h4>Infra</h4>
                    </div>
                    <div className="down">
                        <KYCUsersIcon />
                        <h4>KYC for Users</h4>
                    </div>
                    <div className="up">
                        <IntergrationIcon />
                        <h4>CBDC integration</h4>
                    </div>
                    <div className="down strokeIcon">
                        <MultiChainIcon />
                        <h4>Multi-chain on-boarding </h4>
                    </div>
                    <div className="up">
                        <PartnershipsIcon />
                        <h4>Partnerships</h4>
                    </div>
                    <div className="roadmap_box_title">
                        <h3><span className='year'>FY25</span> Q1</h3>
                    </div>
                    <div className="down strokeIcon">
                        <OffRampIcon />
                        <h4>On-ramp and off-ramp gateways </h4>
                    </div>
                    <div className="up strokeIcon">
                        <SecurityAuditingIcon />
                        <h4>Security Auditing</h4>
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default Roadmap

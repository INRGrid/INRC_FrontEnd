import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import exchange from "../../../public/images/exchange.svg"
import market from "../../../public/images/market-maker.svg"
import web3 from "../../../public/images/web3-plateform.svg"
import Image from 'next/image'
import "./styles/whyChoose.scss"
import CommonHeading from '../common/CommonHeading/CommonHeading'

const WhyChoose = () => {
    const choosebox = [
        {
            img: exchange,
            heading: "Exchanges",
            text: "INRC enables seamless conversion and empowers over one billion digital payment-friendly Indians through trading pairs on both decentralised and centralised exchanges."
        },
        {
            img: market,
            heading: "Market Maker",
            text: "INRC stablecoin provides opportunities across various platforms, including centralised virtual digital assets exchanges, NFT marketplaces, real-world asset tokenization, and decentralised exchanges."
        },
        {
            img: web3,
            heading: "Web3 Platform",
            text: "INRC payment gateway integration facilitates hassle-free on-chain transactions and instant web3 trade settlements.."
        }
    ]
    return (
        <section className='why_choose_section'>
            <Container>
                <div className="why_choose_in">
                    <CommonHeading 
                        heading="Why Businesses Chose INRC ?"
                        centered
                        text="Making Decentralised Finance (DeFi) easy to access for Indian businesses and users."
                    />
                    <Row>
                        {choosebox.map((item: any, index: number) => (
                            <Col xs={12} sm={6} md={4} key={index}>
                                <div className="why_choose_in_box">
                                    <Image
                                    src={item.img}
                                    alt=""
                                    />
                                    <h3>{item.heading}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default WhyChoose

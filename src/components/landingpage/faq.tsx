"use client";
import React from 'react'
import { Accordion, Container, Row, Col } from 'react-bootstrap'
import { RightArrow } from '../../../public/icons/icons'
import "./styles/faq.scss"

const Faq = () => {
    return (
        <section className='faq_section' id="faq">
            <Container fluid>
                <h2>
                    FAQ
                    <span><RightArrow /></span>
                </h2>
                <div className="accordions">
                    <Accordion defaultActiveKey="0">
                        <Row>
                            <Col md={6} className='custom_gap_right'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        What is a stablecoin?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        A stablecoin is a digital asset issued by a company on a public blockchain, which is pegged to an asset like stable fiat currencies and central bank digital currencies (CBDCs), facilitating virtual digital assets (VDAs) transactions.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        How are stablecoins different from other VDAs?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Stablecoins provide stability compared to free-floating VDAs like Bitcoin, Ethereum, Cardano, Solana, etc. They are pegged to assets, while other VDAs vary in value.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        How does INRC stablecoin work?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        INRC maintain a stable value by pegging it to Indian CBDC, offering a bridge between volatile crypto assets and fiat currencies. A user with CBDC (e-₹) and digital asset wallets can mint INRC using CBDC.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        Can stablecoins be pegged to other assets?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Yes, stablecoins can be pegged to various assets, including commodities, VDAs, or a basket of currencies, led by algorithms to adjust supply based on demand. However, these algo stablecoins are riskier than collateralised stables.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Col>
                            <Col md={6} className='custom_gap_left'>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                     Are stablecoins regulated? 
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    Regulation varies from country to country. Because of uncertain regulation, stablecoin poses risks to consumers and markets, considering a stricter global VDA framework.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                       Are stablecoins regulated in India?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                       Stablecoins or Virtual digital assets are not regulated in India as of now. However, registration with the Financial Intelligence Unit (FIU) is mandatory for VDA businesses to operate in the Indian market. FIU has published guidelines for streamlined and compliant operations. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>
                                    Do central banks issue digital currencies?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    Yes, many central banks are exploring central bank digital currencies (CBDCs) on their private blockchain, but they don't interact with public blockchains and other VDAs. E.g., RBI issues e-₹ (CBDC).
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>
                                    Is INRC stablecoin transparent?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    Yes, INRC works on top of the public blockchain where all its transactions are publicly available. 
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Col>
                        </Row>
                    </Accordion>
                </div>
            </Container>
        </section>
    )
}

export default Faq

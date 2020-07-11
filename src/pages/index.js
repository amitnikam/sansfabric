import React from "react"
import Layout from '../components/layout'
import Banner from '../components/banner'
import Subfooter from '../components/subfooter'
import {Row, Col} from 'react-bootstrap'
import SEO from '../components/seo'

export default function Home() {
    return (
        <Layout>
            <SEO title="Home Page - Products" />
            <Banner/>
            <div className="px-5 my-5">
                <h3 className="text-center mt-4 homepagefont">Our Products</h3>
                <hr className="w-25 mb-4"/>
                <Row>
                    <Col md={6} xs={12}>
                        <ul>
                            <li>Defence Army Fabrics</li>
                            <ul>
                                <li>All Types of Parachute Fabrics</li>
                                <li>Army Camouflage Fabric for Baggage and Uniform</li>
                            </ul>
                            <li>Industrial Fabrics</li>
                            <ul>
                                <li>Flame Retardant Fabric</li>
                                <li>Water and Oil Repellent Fabric</li>
                                <li>Industrial Filter Fabric</li>
                            </ul>
                            <li>Re-creational and Sports Fabrics</li>
                            <ul>
                                <li>Paraglide and Parasailing Fabrics</li>
                                <li>Fabric for Tents</li>
                                <li>Fabric for Sleeping Bags</li>
                                <li>Fabric for Shoes</li>
                                <li>Baggage Fabric</li>
                            </ul>
                            <li>Customized Fabric</li>
                            <ul>
                                <li>Cotton and Synthetic Fabric as per Customer's Request</li>
                                <li>Digital / Transfer / Foil Printing, Embossing & Embroidery</li>
                            </ul>
                        </ul>
                    </Col>
                    <Col md={6} xs={12}>
                        <ul>
                            <li>Medical Textiles</li>
                            <ul>
                                <li>PPE Kit</li>
                                <li>Fabric for Three-layer Mask</li>
                                <li>Anti-bacterial PU Coated Fabric</li>
                            </ul>
                            <li>Home Decor and Apparel Fabrics</li>
                            <ul>
                                <li>Home Furnishing Fabric</li>
                                <li>Sheer Curtain Fabric</li>
                                <li>Cotton and Synthetic Clothing Fabric</li>
                                <li>School Uniform Fabric</li>
                                <li>Velvet & Peach Finish Fabric</li>
                                <li>Knitted Fabric</li>
                            </ul>
                            <li>Technical Fabrics</li>
                            <ul>
                                <li>Hose Fabric</li>
                                <li>Conveyor Belt Fabric</li>
                                <li>Mosquito Repellent Finish</li>
                                <li>Breathable PU Coating</li>
                                <li>Bonded Fabric</li>
                            </ul>
                        </ul>
                    </Col>
                </Row>
            </div>
            <Subfooter/>
        </Layout>
    )
}

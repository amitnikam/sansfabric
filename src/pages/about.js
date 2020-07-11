import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Contact() {
    return (
        <Layout>
            <SEO title="About Us" />
            <hr/>
            <div className="roundedborder">
                <h3>About us</h3>
                <hr className="w-25"/>
                <p>SANS FABRIC was started in the year 2015 by our proprietor. We are an {' '}<code>ISO 9001:2015 certified</code>
                    Indian company. We are manufacturers and exporters of all types of fabrics both
                    Greige and finished, and specialise in Parachute Fabrics. We also provide custom
                    made Specialty Textiles as per our client’s requirements and needs, serving the
                    various industrial fabrics products and their technical applications.</p>
                <p>We here at SANS FABRIC strive to create better and advanced fabrics with best
                    gradations through research and development for achieving total customer
                    satisfaction.</p>
                <p>
                    SANS FABRIC with the knowledge, vision and guidance of its proprietor aims to
                    become the most innovative and a complete solution provider for problems of
                    textile industry.</p>
            </div>
            <div className="roundedborder">
                <h3>Our History</h3>
                <hr className="w-25"/>
                <p>Our company’s founder and proprietor{' '}
                    <code>
                        Mr. Satishkumar Nikam
                    </code>{' '}
                    has been actively associated and served in the field of Technical Textiles
                    manufacturing since the year 1990 and has been a promoter and pioneer of various
                    innovative and advanced developments in the field of Technical Textiles
                    manufacturing. He has developed many fabrics with necessary advancements to
                    create products of better specifications and gradation as per their desired
                    applications.</p>
                <p>
                    He started this business to apply his knowledge and expertise of Textiles to
                    meet the ever growing needs and requirements of textile industry. He has been a
                    firm believer that, with application of necessary research and advancement in
                    the techniques of textile manufacturing we can help the textile industry to grow
                    and progress.</p>
            </div>
            <h6 className="text-center">To know more about products or order...
                <a href="/contact" className="somelinks">Contact Us!</a>
            </h6>
        </Layout>
    )
}

import React from 'react'
import Layout from '../components/layout'
import {CardDeck, Card} from 'react-bootstrap'
import phone from '../images/phone.png'
import location from '../images/location.png'
import mail from '../images/mail.png'
import SEO from '../components/seo'

export default function Contact() {
    return (
        <Layout>
            <SEO title="Contact Us"/>
            <hr/>
            <h3 className="text-center mt-5">Contact Us!</h3>
            <hr className="w-25"/>
            <CardDeck className="px-5 mt-4">
                <Card className="text-center" border="info">
                    <Card.Body>
                        <img src={phone} alt="phone"/>
                        <Card.Title className="mt-4 contact">
                            <a href="tel:+919820036100">+91 9820036100</a><br/><br/>
                            <a href="tel:+919769664166">+91 9769664166</a>
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card className="text-center" border="info">
                    <Card.Body>
                        <img src={mail} alt="email"/>
                        <Card.Title className="mt-4 contact"><br/>
                            <a href="mailto:sansfabrics@gmail.com">sansfabrics@gmail.com</a>
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card className="text-center" border="info">
                    <Card.Body>
                        <img src={location} alt="address"/>
                        <Card.Title className="mt-4">D3145, Oberoi Garden Premises, Chandivali, Mumbai-400072</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Layout>
    )
}

import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBullseye, FaEye, FaStar } from 'react-icons/fa';
import BackgroundImage from '../../assets/images/BackgroundImage.png';
import rocketIcon from '../../assets/images/icon/rocket.svg';
import bulbIcon from '../../assets/images/icon/bulb.svg';
import threeSixtyIcon from '../../assets/images/icon/360.svg';
import BreadCrumb from '../../components/layouts/BreadCrumb';
function About() {

    const aboutFocus = [
        {
            id: "1",
            title: "Our Mission",
            icon: rocketIcon,
            content:"ISVIR is a non-profit making society of Interventional Radiologists. It has been floated to provide a for educational and training for its members. It also provides opportunities for exchange of ideas and information regarding clinical practice, patient care and future of endovascular and interventional radiology."
        },
        {
            id: "2",
            title: "Our Vission",
            icon: bulbIcon,
                    content:"ISVIR was formed in Trivandrum on November 9, 1997.Our vision is to take the complete care of our  and provide the best services in the field of Interventional Radiology with the use of best treatment and meeting the satisfaction needs of the patients. Also to develop training opportunities for the residents and budding interventional radiologists.."
        },
        {
            id: "3",
            title: "Our Values",
            icon: threeSixtyIcon,
                    content:"We strive for excellence in patient care, research, education, and the advancement of our field. Through continuous learning, collaboration, and the application of cutting-edge technologies, we aim to provide the highest quality of care to those who entrust their well-being to us."
        }
    ]
    return (
        <>
            <BreadCrumb title={"About Us"} />

            <section className="about-main py-5 sectionPadding">

                <Row>
                    <Col>
                        <Card className="about-card  p-4 mb-5" style={{ boxShadow: '0 4px 20px ##5F2DED26' }}>
                            <h4 className="mb-3 fw-bold text-center title position-relative">About Us</h4>

                            <p className="text-black content">
                                The practice of Cardiovascular and Interventional Radiology (CVIR) in India began in the early 1970s at a few isolated centres of excellence providing tertiary care. Non-availability of hardware and trained personnel, lack of familiarity with techniques and international facilities were major obstacles to its growth in those early years.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                            <p className="text-black content">
                                Even though the first organized effort to establish the Indian Society of vascular & Interventional Radiology (ISVIR) was conceived in 1988, the society
                                in its present shape was established on November 7th, 1997 with 28 founder members. Since then, we have come a long way. Today, this society
                                has over 1200 members and performs many activities, including creation of a nation-wide network of state branches & zonal chapters, and
                                conducting monthly local, quarterly zonal and annual national level scientific meetings. The Indian society has so far held twenty three successful
                                annual national meetings. All of them had faculty drawn from various parts of the world and included didactic lectures, symposia, workshops and,
                                in most meetings, live case transmissions, from within and outside India, on topics of current interest and cutting edge technology. It also organizes
                                multiple regional CME programs every year on topics of local interest. The society publishes a quarterly newsletter since 1999. It is also engaged in
                                the organization of public awareness programs in different regions on locally relevant subjects. The society conducts short-term postgraduate
                                training fellowships, and provides travel assistance to its members for participating in meetings within the country. It also maintains an
                                interactive website.
                            </p>

                            <p className="text-black content">
                                We also have dedicated Interventional radiology journal named Journal of Clinical Interventional Radiology (JCIR) started in 2017. Total 7 volume
                                published till date
                            </p>
                            <p className="text-black content">
                                The society has also been actively working with the industry to address the issues related to availability, pricing and Governmental policies regarding
                                the custom clearance of various devices. Efforts are also directed towards widening the membership base and affiliation with various international
                                bodies.
                            </p>
                            <p className="text-black content">
                                IR is at cross-roads in India today. There are perpetual shortages of equipment and hardware which is either not available or is mismatched to
                                requirement. Most products are still imported, the prices are steep and not matched to the average per capita income of the Indian households.
                                Indigenization of the hardware technology and their local production is essential to bridge the above gap. We also face turf issues with various
                                other sub-specialties, including those from cardiology, neurology, neuro-surgery, gastro-enterology and vascular surgery. There is also a lack
                                of trained manpower. Most medical colleges in India are still not geared to train radiology post graduates in interventional radiology. The radiology
                                curriculum for post graduate degree needs inclusion of exposure to IR for the latter's optimal development. This factor, along with an increase in
                                public and physician awareness, is the key to handle turf issues that our specialty faces today.
                            </p>
                            <p className="text-black content">
                                Despite above issues, there is a tremendous scope for the practice of interventional radiology in India. The members perform all state-of-the-art
                                techniques available any where in the world and participate in the cutting edge experimental and clinical research, alone and also in collaboration
                                with other national and international institutes. All forms of IR techniques in various organ systems, including the cardiovascular, hepato-biliary,
                                genito-urinary, neurological, abdominal and musculoskeletal systems and other non-vascular locations are performed at various centers
                                across the country. Some key areas of recent individual and collaborative research include gene therapy in vascular disease, stem cell therapy
                                in various disease states, experimental work on tagged stem cell homing by MRI, synthetic venous valves, newer options in vascular recanalization
                                and evolving concepts in endovascular reconstruction among others. IR in India is strategically poised for growth at this time.
                            </p>

                        </Card>
                    </Col>
                </Row>

                <Row className="px-4">

                    {aboutFocus.map((focusCard) => (
                        <Col md={4} sm={6} key={focusCard.id}>
                            <Card className="h-100 about-info-card shadow-sm p-0 mx-3">
                                
                                <div className="content">
                                    <div className="text-center">
                                        <img className='focusIcon' src={focusCard.icon} alt="" srcset="" />
                                        <div className="blue-bar mx-auto mb-3"></div>
                                        <h5 className="fw-bold text-black title">{focusCard.title}</h5>
                                        <p className="text-black">{focusCard.content}</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}


                </Row>

             

            </section>
               <Row className="bg-white py-1 mx-0 my-4 rounded">
                    <Col md={4} className="text-center">
                        <div className="p-3">
                            <FaBullseye size={40} className="text-danger mb-3" />

                            <p className="aboutusbottom mb-0">Years of Experience</p>
                            <h2 className="aboutusnumber text-black mb-1">25+</h2>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="p-3">
                            <FaBullseye size={40} className="text-danger mb-3" />
                            <p className="aboutusbottom mb-0">Members</p>
                            <h2 className="aboutusnumber text-black mb-1">1300+</h2>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="p-3">
                            <FaBullseye size={40} className="text-danger mb-3" />
                            <p className="aboutusbottom mb-0">National Meetings</p>
                            <h2 className="aboutusnumber text-black mb-1">120+</h2>
                        </div>
                    </Col>
                </Row>

        </>
    )
}

export default About;

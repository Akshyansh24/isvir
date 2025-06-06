
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import BreadCrumb from '../../components/layouts/BreadCrumb';

const PresidentialAddress = () => {
    return (
        <>
            <BreadCrumb title={"Presidential Address"} />
            <section className="presidential-address-section sectionPadding">

                <div className="row">
                    <div className="col-lg-4 col-md-5 col-sm-12 mb-4 py-3">
                        <Card className="presidential-address-card shadow-sm rounded">
                            <Card.Img
                                variant="top"
                                src="https://www.isvirindia.org/uploads/profile_image/Shyamkumar-n-keshava-photo.png"
                                alt="President"
                                className="president-img"
                            />
                            <Card.Body>
                                <Card.Title className="fw-bold president-name">
                                    Dr Shyamkumar N. Keshava
                                </Card.Title>
                                <div className="president-details text-black">
                                    <h6>Professor and Head</h6>
                                    <h6>Department of Interventional Radiology</h6>
                                    <h6>Head, Division of Clinical Radiology</h6>
                                    <h6>Christian Medical College Hospital</h6>
                                    <h6>Ida Scudder road, Vellore</h6>
                                    <h6>India. 632004</h6>
                                    <h6>
                                        Email: <a className="text-danger" href="mailto:president@isvirindia.org">president@isvirindia.org</a>
                                    </h6>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-lg-8 col-md-7 col-sm-12 py-3">
                        <div className="doctor-detail">
                            <div className="text text-justify">
                                <h5 className="mb-3 fw-bold">Dear Colleagues,</h5>
                                <p>Interventional radiology (IR) stands as a beacon of innovation and precision, revolutionizing the way many diseases are diagnosed and treated. With its minimally invasive techniques and advanced imaging modalities, IR has emerged as a cornerstone of contemporary healthcare. Though IR’s beginnings were as a clinical referral service, today we are a standalone department, running out-patient and inpatient services managing admissions, offering treatment, discharge and follow up.</p>

                                <p className="mb-2">IR has evolved rapidly over the past few decades, revolutionizing the diagnosis and treatment of a wide range of medical conditions. Despite its significant contributions to patient care, IR has traditionally been viewed as a subspecialty within radiology. However, now IR is being recognized as an independent clinical specialty in many hospitals all over the country.  This means that our health system has begun to acknowledge that IR services has profound effect on healthcare efficiency and patient outcomes. For example, IR offers a cost-effective alternative to traditional surgical procedures as in the case of image-guided biopsies, which facilitate the diagnosis of various cancers and infectious diseases, enabling timely initiation of treatment without the need for complex surgical facilities. Many of these procedures like opening an occluded artery, closing a bleeding artery are lifesaving. While treating "brain attack" time is money. Quick access to IR centres will significantly improve patient outcomes by reducing disability and mortality rates as these procedures are often time-sensitive.</p>
                                <p className="mb-2">Interventional radiologists and their teams need to promote a culture of safety, mitigate risks, and optimize outcomes for patients undergoing IR procedures. We have hence seen the development of distinct clinical pathways, protocols, and quality assurance measures tailored to the unique needs of our patient population. This needs to be an ongoing process that we need to commit to. We need to follow guidelines to keep our patients safe. The interdepartmental meetings help in optimising patient care.</p>
                                <p className="mb-2">Affordability of interventional radiology (IR) services is influenced by various factors, including healthcare system structures, insurance coverage, reimbursement policies, and patient demographics. In the recent times, many comprehensive insurance plans cover a wide range IR procedures as well and reduce out-of-pocket costs for patients. This has been a boon to many patients, therefore increasing the number of patient who benefit from the IR service. Innovative ideas have been successful in bringing down the cost of the consumables.</p>
                                <p className="mb-2">The ISVIR has successfully brought Interventional radiologists together. As a professional body, we play a crucial role in advancing the field of interventional radiology (IR) by providing education, advocacy, research support, professional networking opportunities, and guidance on clinical practice standards.</p>
                                <p className="mb-2">We organize conferences, workshops, webinars, and educational resources to disseminate knowledge and best practices in interventional radiology. We offer continuing medical education (CME) credits and certification programs to support the ongoing professional development of interventional radiologists and our support team such as radiographers and IR nurses.  In the recent times, focussed skill enhancing workshops have become extremely popular. It is an opportunity to learn from each other. The mutual growth of individual members and society is intrinsically linked, each benefiting from the advancement and development of the other." Recognition of members for their contributions to society is emphasized through various awards, which acknowledge achievements for both senior and junior members alike.</p>
                                <p className="mb-2">From vascular interventions and oncologic therapies to pain management and palliative care, IR interventions often require a unique skill set that extends beyond traditional radiology training. Many IR training opportunities have been created at the national level. DM in IR, DNB in IR have been introduced in several medical colleges and hospitals. Generally, fellowships offer training for one or two years. ISVIR offers support to institutions to effectively train the next generation of interventional radiologists, equipping them with the knowledge, skills, and competencies needed to excel in clinical practice, research, and leadership roles within the field.</p>
                                <p className="mb-2">The journal of clinical interventional radiology (JCIR) is one of our valued projects and we are proud that we are recognised as a reputed journal which has been in print for the last 7 years. The JCIR plays a vital role in advancing the practice of interventional radiology by disseminating new knowledge, supporting education and training, facilitating collaboration, and promoting evidence-based practice and quality improvement initiatives within the specialty. It has served as a platform for numerous interventional radiology (IR) professionals to contribute as authors and participate in peer review as reviewers, enriching the content for the benefit of all our readers. <a className="text-danger" href="https://www.thieme.in/jcir" target="_blank" rel="noopener noreferrer">https://www.thieme.in/jcir</a></p>
                                <p className="mb-2">Engaging with other medical professional societies creates mutually beneficial opportunities for collaboration and advancement creating a "win-win" situation. We actively engage with international interventional radiology societies worldwide. ISVIR is a member of Forum of Radiology Associations of India "FORA", a network created by Indian Radiology and Imaging Association (IRIA).</p>
                                <p className="mb-2">At ISVIR, we prioritize community contributions through charitable initiatives and health awareness campaigns. Additionally, we strive to minimize our environmental footprint by promoting eco-friendly practices to the best of our ability.</p>
                                <p className="mb-2">We are committed to fostering positive change in the field of interventional radiology and within our community. We welcome your suggestions and ideas for initiatives that could make a positive impact. Please feel free to approach us with any suggestions you believe would make a difference.</p>
                                <h3 className="m-auto pt-3 fw-bold"><q><i>Innovation is the key to success.</i></q></h3>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default PresidentialAddress;

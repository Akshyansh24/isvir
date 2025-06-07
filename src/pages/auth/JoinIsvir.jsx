import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import BreadCrumb from '../../components/layouts/BreadCrumb';

const JoinIsvir = () => {
    const [selectedMembership, setSelectedMembership] = useState(null);

    const membershipOptions = [
        {
            id: 1,
            title: "Provisional / Life / Full Membership (PFM / FM / LM)",
            amount: "RS 9000",
            gst: "RS 1620",
            total: "RS 10620",
            description: "Provisional Full Membership is granted to any person who is a residential Indian citizen possessing an MBBS or equivalent degree in Modern Medicine recognized by the Medical Council of India (MCI) and is holding a diploma/degree in Radiology (such as MD, DNB, DMRD) recognized by the Medical Council of India (MCI) or any equivalent National Statutory Body formed by the Government of India. Additionally, the applicant must have training in Interventional Radiology (such as PDCC, training course, DM/DrNB) and/or be practicing Interventional Radiology in India."
        },
        {
            id: 2,
            title: "Student Membership (SM)",
            amount: "RS 1500",
            gst: "RS 270",
            total: "RS 1770",
            description: "Student Membership is granted to any person who is a residential Indian citizen possessing MBBS or equivalent degree in Modern Medicine recognized by Medical Council of India (MCI) and is holding a diploma/degree in Radiology (such as MD., DNB., DMRD) recognized by Medical Council of India (MCI) or any equivalent National Statutory Body formed by Government of India and undergoing training in Interventional Radiology (Such as PDCC, training course, DM/DrNB). Student membership is applicable for five year only."
        },
        {
            id: 3,
            title: "Corporate Life Membership (CM)",
            amount: "RS 10000",
            gst: "RS 1800",
            total: "RS 11800",
            description: "Corporate Life Membership is granted to any person who is a residential Indian citizen actively involved/ conduct business in the field of Interventional Radiology and offers an opportunity for industry and ISVIR to join together to form long-term, quality relationships."
        },
        {
            id: 4,
            title: "Foreign Membership (FM)",
            amount: "USD 250",
            gst: "USD 45",
            total: "USD 295",
            description: "Foreign Membership is granted to any person who is a resident of Any country other than India,Nepal, Bangladesh, Sri Lanka, or the Maldives, possessing an MBBS or equivalent degree in modern medicine recognized by the Medical Council of their respective country, and is holding a diploma or degree in radiology recognized by the Medical Council of their respective country, and/or has training in interventional radiology or is practicing interventional radiology in their country."
        },
        {
            id: 9,
            title: "SAARC Associative Membership (AM)",
            amount: "RS 3000",
            gst: "RS 540",
            total: "RS 3540/Year",
            description: "SAARC Associative Membership is granted to any person who is a resident of Nepal, Bangladesh, Sri Lanka, Bhutan, and Maldives, possessing an MBBS or equivalent degree in modern medicine recognized by the Medical Council of their respective country, and is holding a diploma or degree in radiology recognized by the Medical Council of their respective country, and/or has training in interventional radiology or is practicing interventional radiology in their country."
        }
    ];

    const benefits = [
        "Facilitating Students, Scholars, and Institutions for Research and advancements in Interventional Radiology in all aspects through scholarships, fellowships, grants, endowments, etc.",
        "Members get fellowships, prizes, certificates, diplomas of proficiency in the science of Interventional Radiology either through ISVIR or its associative membership.",
        "Free of cost or at subsidized prices for its official journals, books, periodicals or publications which the society thinks are desirable for the promotion of its objects.",
        "Opportunity to explore digital video Library with webinars and talks from conferences.",
        "Opportunity to its member to participate in Conferences, Lectures, Meetings, Seminars, Symposia, Workshops, Continuing Medical Education Programs, etc.",
        "Opportunity to become members of its Branches / Subspecialty Chapters / Groups / Cells / Committees.",
        "Opportunity to get benefits of beneficiary schemes launch by the ISVIR time to time."
    ];

    return (
        <>
            <BreadCrumb title={"Join ISVIR"} />

            <section className="join-isvir sectionPadding" style={{ background: "#f5f9ff" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="login-form contact-form bg-white p-4 pb-0 pb-lg-4">
                                <h3 className="text-center fw-bold mb-4">ISVIR Membership</h3>

                                <h5 className="fw-bold">Membership Benefits</h5>
                                <ul className="list-group mb-4">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="list-group-item text-success">
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <h5 className="mb-3 fw-bold">Categories of Membership</h5>
                                <div className="mb-4">
                                    <h6 className="mt-4 mb-3 text-dark fw-bold">1. Provisional / Life / Full membership (PFM / FM / LM)</h6>
                                    <p>
                                        Provisional Full Membership is granted to any person who is a residential Indian citizen possessing an MBBS or equivalent degree in Modern Medicine recognized by the Medical Council of India (MCI) and is holding a diploma/degree in Radiology (such as MD, DNB, DMRD) recognized by the Medical Council of India (MCI) or any equivalent National Statutory Body formed by the Government of India. Additionally, the applicant must have training in Interventional Radiology (such as PDCC, training course, DM/DrNB) and/or be practicing Interventional Radiology in India. Upon making the requisite payment, you will be assigned a Provisional Full Membership (PFM) number. Please note that Provisional Full Members do not have voting rights in ISVIR elections. However, all Provisional Members of a particular year will be eligible for conversion to Full Members once the General Body Meeting (GBM) has reviewed and approved the members in ISVIR. At that point, voting rights will be extended to the new Full Members. Furthermore, Life membership will be granted to those who have maintained their status as Provisional or Full Members for a period of 3 years post-joining, and your membership will automatically be converted to Life Membership after this 3-year duration.
                                    </p>

                                    <h6 className="mt-4 mb-3 text-dark fw-bold">2. Student Membership (SM)</h6>
                                    <p>
                                        Student Membership is granted to any person who is a residential Indian citizen possessing MBBS or equivalent degree in Modern Medicine recognized by Medical Council of India (MCI) and is holding a diploma/degree in Radiology (such as MD., DNB., DMRD) recognized by Medical Council of India (MCI) or any equivalent National Statutory Body formed by Government of India and undergoing training in Interventional Radiology (Such as PDCC, training course, DM/DrNB). Student membership is applicable for five year only.
                                    </p>
                                    <p>
                                        Candidate should have a declaration from the respective head of the department regarding his training in interventional radiology.
                                    </p>

                                    <h6 className="mt-4 mb-3 text-dark fw-bold">3. Corporate Life Membership (CM)</h6>
                                    <p>
                                        Corporate Life Membership is granted to any person who is a residential Indian citizen actively involved/ conduct business in the field of Interventional Radiology and offers an opportunity for industry and ISVIR to join together to form long-term, quality relationships.
                                    </p>

                                    <h6 className="mt-4 mb-3 text-dark fw-bold">4. SAARC Associative Membership (AM)</h6>
                                    <p>
                                        SAARC Associative Membership is granted to any person who is a resident of Nepal, Bangladesh, Sri Lanka, Bhutan, and Maldives, possessing an MBBS or equivalent degree in modern medicine recognized by the Medical Council of their respective country, and is holding a diploma or degree in radiology recognized by the Medical Council of their respective country, and/or has training in interventional radiology or is practicing interventional radiology in their country.
                                    </p>

                                    <h6 className="mt-4 mb-3 text-dark fw-bold">5. Foreign Membership (FM)</h6>
                                    <p>
                                        Foreign Membership is granted to any person who is a resident of Any country other than India,Nepal, Bangladesh, Sri Lanka, or the Maldives, possessing an MBBS or equivalent degree in modern medicine recognized by the Medical Council of their respective country, and is holding a diploma or degree in radiology recognized by the Medical Council of their respective country, and/or has training in interventional radiology or is practicing interventional radiology in their country.
                                    </p>
                                </div>

                                <p className="joinisvir-basic-heading fw-bold">Select Membership  (<span className="text-danger">Select anyone *</span>)</p>


                                <Row className="mb-0 mb-lg-4 g-4">
                                    {membershipOptions.map((option) => (
                                        <Col key={option.id} md={6} lg={4} className="mb-3">
                                            <Card
                                                className={`membership-card-joinisvir h-100  shadow-sm ${selectedMembership === option.id ? 'active' : ''}`}

                                                onClick={() => setSelectedMembership(option.id)}
                                            >
                                                <Card.Body className="p-4">

                                                    <div className="mb-1 membership-joinisvir-subcards">
                                                        <div className="membership-joinisvir-icon-container">
                                                            <div className="membership-joinisvir-icon">
                                                                {option.id === 1 && <i className="fas fa-user-md"></i>}
                                                                {option.id === 2 && <i className="fas fa-graduation-cap"></i>}
                                                                {option.id === 3 && <i className="fas fa-building"></i>}
                                                                {option.id === 4 && <i className="fas fa-globe-asia"></i>}
                                                                {option.id === 9 && <i className="fas fa-passport"></i>}
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="join-isvir-subcontent d-flex align-items-start">


                                                        <div>
                                                            <Card.Title className="joinisvir-content-title mb-2 fw-bold">
                                                                {option.title}
                                                            </Card.Title>

                                                            <ul className="list-unstyled mb-3" style={{ fontSize: '0.9rem' }}>
                                                                <li className="mb-1">
                                                                    <i className="fa-solid fa-indian-rupee-sign  me-2 text-danger"></i>Amount: {option.amount}
                                                                </li>
                                                                <li className="mb-1">
                                                                    <i className="fa-solid fa-receipt me-2 text-danger"></i>GST @ 18%: {option.gst}
                                                                </li>
                                                                <li className="mb-1">
                                                                    <i className="fa-solid fa-calculator me-2 text-danger"></i>Total: {option.total}
                                                                </li>
                                                            </ul>


                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <a
                                                                    href="#"
                                                                    className="text-primary"
                                                                    style={{
                                                                        textDecoration: 'none',
                                                                        fontWeight: '500',
                                                                        fontSize: '0.9rem'
                                                                    }}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();

                                                                    }}
                                                                >

                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>



                                {selectedMembership && (
                                    <Form name="form" method="post" id="sectionForm" autoComplete="off" encType="multipart/form-data">
                                        <input type="hidden" name="_token" value="D83JGiqmMIxshdbXGcMlXI8E6Nf87oY1ADsvXg6z" autoComplete="off" />
                                        <input type="hidden" name="membership_type" value={selectedMembership} />


                                        {/* Basic Details Section */}
                                        <Row className="mb-4">
                                            <Col xl={12} lg={12} md={12}>
                                                <section className="joinisvir-basic-detail" id="basicDetail">
                                                    <hr />
                                                    <h6 className="joinisvir-basic-heading fw-bold">Basic Detail <span className="text-danger"> *</span></h6>
                                                    <Row className="form-group">
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="salutation" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Salutation</Form.Label>
                                                                <Form.Select name="salutation" required>
                                                                    <option value="Dr">Dr.</option>
                                                                    <option value="Mr">Mr.</option>
                                                                    <option value="Mrs">Mrs.</option>
                                                                    <option value="Prof">Prof.</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="fname" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>First Name</Form.Label>
                                                                <Form.Control type="text" name="fname" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="middle_name" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Middle Name</Form.Label>
                                                                <Form.Control type="text" name="middle_name" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="lname" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Last name</Form.Label>
                                                                <Form.Control type="text" name="lname" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="email" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Email</Form.Label>
                                                                <Form.Control type="email" name="email" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="phone" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Phone Number</Form.Label>
                                                                <Form.Control type="text" name="phone" maxLength="10" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="alternate_phone" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Alternate Phone Number</Form.Label>
                                                                <Form.Control type="text" name="alternate_phone" maxLength="10" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="gender" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Gender</Form.Label>
                                                                <Form.Select name="gender" required>
                                                                    <option value="M">Male</option>
                                                                    <option value="F">Female</option>
                                                                    <option value="O">Other</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="dob" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Date of Birth</Form.Label>
                                                                <Form.Control type="date" name="dob" max="2004-12-31" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6} id="passport_section" style={{ display: 'none' }}>
                                                            <Form.Group controlId="passport_no" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Passport No.</Form.Label>
                                                                <Form.Control type="text" name="passport_no" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={6} lg={8} md={12}>
                                                            <Form.Group controlId="address" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Address</Form.Label>
                                                                <Form.Control as="textarea" rows={2} name="address" required />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="country" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Country</Form.Label>
                                                                <Form.Select name="country" required>
                                                                    <option value="">Select</option>
                                                                    <option value="99">India</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="state_name" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>State</Form.Label>
                                                                <Form.Control type="text" name="state_name" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="city" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>City</Form.Label>
                                                                <Form.Control type="text" name="city" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={4} md={6}>
                                                            <Form.Group controlId="zip" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Zip Code</Form.Label>
                                                                <Form.Control type="text" name="zip" maxLength="6" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </section>
                                            </Col>
                                        </Row>


                                        <Row className="mb-4">
                                            <Col xl={12} lg={12} md={12}>
                                                <section id="qualificationDetail">
                                                    <hr />
                                                    <h6 className="joinisvir-basic-heading fw-bold">Qualification Details <span className="text-danger"> *</span></h6>
                                                    <Row className="form-group">
                                                        <Col xs={12}>
                                                            <div className="table-responsive">
                                                                <Table bordered id="dynamic_field">
                                                                    <thead>
                                                                        <tr className="text-center">
                                                                            <th>#</th>
                                                                            <th>Degree</th>
                                                                            <th>Year</th>
                                                                            <th>College</th>
                                                                            <th>University</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>1.</td>
                                                                            <td><Form.Control type="text" name="degree[]" required autoComplete="off" /></td>
                                                                            <td><Form.Control type="text" name="year[]" required autoComplete="off" /></td>
                                                                            <td><Form.Control type="text" name="college[]" required autoComplete="off" /></td>
                                                                            <td><Form.Control type="text" name="university[]" required autoComplete="off" /></td>
                                                                            <td><Button variant="success" size="sm"><i className="fa fa-plus"></i></Button></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </section>
                                            </Col>
                                        </Row>


                                        <Row className="mb-4">
                                            <Col xl={12} lg={12} md={12}>
                                                <section id="professionalDetail" style={{ display: 'none' }}>
                                                    <hr />
                                                    <h6 className="joinisvir-basic-heading fw-bold">Professional Details <span className="text-danger"> *</span></h6>
                                                    <Row className="form-group">
                                                        <Col xl={4} lg={6} md={12}>
                                                            <Form.Group controlId="designation" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Current Designation</Form.Label>
                                                                <Form.Control type="text" name="designation" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={6} md={12}>
                                                            <Form.Group controlId="council_no" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Medical Council No.</Form.Label>
                                                                <Form.Control type="text" name="council_no" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={6} md={12}>
                                                            <Form.Group controlId="hospital_name" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Affilated Hospital Name</Form.Label>
                                                                <Form.Control type="text" name="hospital_name" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={6} lg={12} md={12} style={{ display: 'none' }}>
                                                            <Form.Group controlId="speciality" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Select speciality</Form.Label>
                                                                <Form.Select name="speciality" multiple>
                                                                    <option value="Neuro Intervention">Neuro Intervention</option>
                                                                    <option value="Body Intervention">Body Intervention</option>
                                                                    <option value="Peripheral Intervention">Peripheral Intervention</option>
                                                                    <option value="Non vascular Intervention">Non vascular Intervention</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={6} lg={12} md={12}>
                                                            <Form.Group controlId="hospital_address" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Affilated Hospital Address</Form.Label>
                                                                <Form.Control as="textarea" rows={3} name="hospital_address" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={4} md={6}>
                                                            <Form.Group controlId="hospital_city" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>City</Form.Label>
                                                                <Form.Control type="text" name="hospital_city" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={4} md={6}>
                                                            <Form.Group controlId="hospital_state" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>State</Form.Label>
                                                                <Form.Control type="text" name="hospital_state" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={4} md={6}>
                                                            <Form.Group controlId="hospital_zipcode" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Zip Code</Form.Label>
                                                                <Form.Control type="text" name="hospital_zipcode" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </section>
                                            </Col>
                                        </Row>


                                        <Row className="mb-4">
                                            <Col xl={12} lg={12} md={12}>
                                                <section id="trainingDetail">
                                                    <hr />
                                                    <h6 className="joinisvir-basic-heading fw-bold">Training Details <span className="text-danger"> *</span></h6>
                                                    <Row className="form-group">
                                                        <Col xl={4} lg={6} md={12}>
                                                            <Form.Group controlId="irt_designation" className="mb-3">
                                                                <Form.Label className="mb-3" style={{ color: 'black', fontWeight: 'bold' }}>IR Training Designation</Form.Label>
                                                                <Form.Select name="irt_designation" required>
                                                                    <option value="">Select</option>
                                                                    <option value="Senior Resident">Senior Resident</option>
                                                                    <option value="Fellowship/PDCC">Fellowship/PDCC</option>
                                                                    <option value="DM/DrNB">DM/DrNB</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={6} md={12}>
                                                            <Form.Group controlId="training_year" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Training Year</Form.Label>
                                                                <Form.Select name="training_year" required>
                                                                    <option value="">Select</option>
                                                                    <option value="1">1st Year</option>
                                                                    <option value="2">2nd Year</option>
                                                                    <option value="3">3rd Year</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={6} md={12}>
                                                            <Form.Group controlId="training_end_date" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Training End Date</Form.Label>
                                                                <Form.Control type="date" name="training_end_date" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={6} md={12}>
                                                            <Form.Group controlId="declaration_form" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Declaration Form</Form.Label>
                                                                <Form.Control type="file" name="declaration_form" accept=".doc,.docx,.pdf" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={3} lg={6} md={12}>
                                                            <Form.Group controlId="institute_name" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Institute Name</Form.Label>
                                                                <Form.Control as="textarea" rows={3} name="institute_name" required />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={6} lg={12} md={12}>
                                                            <Form.Group controlId="institute_address" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Institute Address</Form.Label>
                                                                <Form.Control as="textarea" rows={3} name="institute_address" required />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={12} lg={12} md={12}>
                                                            <Button variant="success" size="sm" href="uploads/Sample-Declaration-Form.docx" target="_blank">
                                                                <i className="fa fa-download"></i> Download Sample Declaration Form
                                                            </Button>
                                                        </Col>
                                                        <Col xl={4} lg={4} md={6}>
                                                            <Form.Group controlId="training_city" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>City</Form.Label>
                                                                <Form.Control type="text" name="training_city" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={4} md={6}>
                                                            <Form.Group controlId="training_state" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>State</Form.Label>
                                                                <Form.Control type="text" name="training_state" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={4} md={6}>
                                                            <Form.Group controlId="training_zipcode" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Zip Code</Form.Label>
                                                                <Form.Control type="text" name="training_zipcode" required autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </section>
                                            </Col>
                                        </Row>


                                        <Row className="mb-4">
                                            <Col xl={12} lg={12} md={12}>
                                                <section id="corporateDetail" style={{ display: 'none' }}>
                                                    <hr />
                                                    <h6 className="joinisvir-basic-heading fw-bold">Professional Details <span className="text-danger"> *</span></h6>
                                                    <Row className="form-group">
                                                        <Col xl={4} lg={6} md={12}>
                                                            <Form.Group controlId="company_name" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Industry/Company Name</Form.Label>
                                                                <Form.Control type="text" id="company_name" name="company_name" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={6} md={12}>
                                                            <Form.Group controlId="working_position" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Working Position</Form.Label>
                                                                <Form.Control type="text" id="working_position" name="working_position" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={6} lg={12} md={12}>
                                                            <Form.Group controlId="company_address" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Industry/Company Address</Form.Label>
                                                                <Form.Control as="textarea" rows={3} name="company_address" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={6} lg={12} md={12}>
                                                            <Form.Group controlId="company_headquarter_address" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Industry/Company Headquarter Address</Form.Label>
                                                                <Form.Control as="textarea" rows={3} name="company_headquarter_address" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={4} md={6}>
                                                            <Form.Group controlId="company_city" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>City</Form.Label>
                                                                <Form.Control type="text" name="company_city" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={4} md={6}>
                                                            <Form.Group controlId="company_state" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>State</Form.Label>
                                                                <Form.Control type="text" name="company_state" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xl={4} lg={4} md={6}>
                                                            <Form.Group controlId="company_zipcode" className="mb-3">
                                                                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Zip Code</Form.Label>
                                                                <Form.Control type="text" name="company_zipcode" autoComplete="off" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </section>
                                            </Col>
                                        </Row>


                                        <Row className="mb-4">
                                            <Col xl={12} lg={12} md={12}>
                                                <section id="recommendedBy">
                                                    <hr />
                                                    <h6 className="joinisvir-basic-heading fw-bold">Recommended By <span className="text-danger">(Recommendation should be done by Life members of ISVIR only) *</span></h6>
                                                    <div id="recommended1">
                                                        <Row className="form-group">
                                                            <Col xl={12} lg={12} md={12}>
                                                                <span className="text-danger" id="alertMsg" style={{ display: 'none' }}>ISVIR Membership No. not found</span>
                                                            </Col>
                                                            <Col xl={3} lg={4} md={6}>
                                                                <Form.Group controlId="recommended_isvirno_1" className="mb-3">
                                                                    <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>ISVIR Membership No.</Form.Label>
                                                                    <Form.Control type="text" name="recommended_isvirno_1" required autoComplete="off" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col xl={3} lg={4} md={6}>
                                                                <Form.Group controlId="recommended_name_1" className="mb-3">
                                                                    <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Name</Form.Label>
                                                                    <Form.Control type="text" name="recommended_name_1" required autoComplete="off" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col xl={3} lg={4} md={6}>
                                                                <Form.Group controlId="recommended_number_1" className="mb-3">
                                                                    <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Phone Number</Form.Label>
                                                                    <Form.Control type="text" name="recommended_number_1" maxLength="10" required autoComplete="off" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col xl={3} lg={4} md={6}>
                                                                <Form.Group controlId="recommended_email_1" className="mb-3">
                                                                    <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Email</Form.Label>
                                                                    <Form.Control type="email" name="recommended_email_1" required autoComplete="off" />
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div id="recommended2">
                                                        <Row className="form-group">
                                                            <Col xl={3} lg={4} md={6}>
                                                                <Form.Group controlId="recommended_isvirno_2" className="mb-3">
                                                                    <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>ISVIR Membership No.</Form.Label>
                                                                    <Form.Control type="text" name="recommended_isvirno_2" required autoComplete="off" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col xl={3} lg={4} md={6}>
                                                                <Form.Group controlId="recommended_name_2" className="mb-3">
                                                                    <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Name</Form.Label>
                                                                    <Form.Control type="text" name="recommended_name_2" required autoComplete="off" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col xl={3} lg={4} md={6}>
                                                                <Form.Group controlId="recommended_number_2" className="mb-3">
                                                                    <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Phone Number</Form.Label>
                                                                    <Form.Control type="text" name="recommended_number_2" maxLength="10" required autoComplete="off" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col xl={3} lg={4} md={6}>
                                                                <Form.Group controlId="recommended_email_2" className="mb-3">
                                                                    <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Email</Form.Label>
                                                                    <Form.Control type="email" name="recommended_email_2" required autoComplete="off" />
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </section>
                                            </Col>
                                        </Row>


                                        <Row className="mb-4">
                                            <Col xl={12} lg={12} md={12}>
                                                <section id="termsAndCondition">
                                                    <hr />
                                                    <h6 className="joinisvir-basic-heading fw-bold">Terms and condition <span className="text-danger"> *</span></h6>
                                                    <Row className="form-group">
                                                        <Col xs={12}>
                                                            <Form.Check
                                                                type="checkbox"
                                                                id="accept1"
                                                                name="accept1"
                                                                value="Y"
                                                                label="I declare that the information provided by me on the above form is true and correct."
                                                                required
                                                            />
                                                            <div id="accept2_field" style={{ display: 'none' }}>
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    id="accept2"
                                                                    name="accept2"
                                                                    value="Y"
                                                                    label="I understand that ISVIR accepts membership of Radiologists and IRs only."
                                                                />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </section>
                                            </Col>
                                        </Row>


                                        <Row className="mb-4">
                                            <Col xl={4} lg={4} md={6}>
                                                <Button variant="primary" type="submit" name="submit_form" id="submitForm">
                                                    Submit
                                                </Button>
                                            </Col>
                                        </Row>

                                    </Form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default JoinIsvir;













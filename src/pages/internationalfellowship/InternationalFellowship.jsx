import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BreadCrumb from '../../components/layouts/BreadCrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const InternationalFellowship = () => {
    const selectedCandidates = [
        { id: 1, name: "Dr Abhishek Bansal", institution: "Hilicrest Medical Center" },
        { id: 2, name: "Dr Jineesh Valakkada", institution: "Lakeland Regional Medical Center" },
        { id: 3, name: "Dr Raghav Seth", institution: "UT Southwestern Medical Center" },
        { id: 4, name: "Dr Anurag Mehndiratta", institution: "UT Southwestern Medical Center" },
        { id: 5, name: "Dr Dheeraj Shyam Venkat Narayan", institution: "UT Southwestern Medical Center" },
        { id: 6, name: "Dr Varun Yadav", institution: "UT Southwestern Medical Centre" },
        { id: 7, name: "Dr Darshan Thummar", institution: "The Lerner College of Medicine" },
        { id: 8, name: "Dr Dixit Varma", institution: "The Lerner College of Medicine" }
    ];

    return (
        <>
            <BreadCrumb title={"International Fellowship"} />

            <section className="international-fellowship sectionPadding">
                <h6 className="fellowship-title mb-2 mt-2 fw-bold">Selected Candidate : ISVIR SIR International Fellowship 2025</h6>

                <Row className="g-4 mb-0">
                    {selectedCandidates.map((candidate) => (
                        <Col key={candidate.id} xs={12} sm={6} md={4} lg={3}>
                            <Card className="fellowship-card text-center h-100 shadow-sm border-0">
                                <Card.Body className="p-4">
                                    <Card.Title className="fellowship-name h6 fw-bold text-danger mb-2">
                                        {candidate.name}
                                    </Card.Title>
                                    <Card.Text className="fellowship-institution text-dark fw-bold">
                                        <FontAwesomeIcon icon={faUniversity} className="me-2" />
                                        {candidate.institution}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <hr className="my-4 opacity-50" style={{ border: '1px solid grey' }} />

                <Card className="border-0 mb-4">
                    <Card.Body className="p-4">
                        <p>Dear ISVIR members,</p>
                        <p>We are pleased to inform that exchange program for the training of young Interventional radiologists in combined collaboration of ISVIR and various International IR societies are started.</p>

                        <p>ISVIR and the American Society of Interventional Radiology (SIR) has decided to continue the program for 2024-25. We have finalized a unique ISVIR-SIR exchange programme.</p>

                        <h5 className="mt-4 mb-3 text-dark fw-bold">Salient features:</h5>
                        <ol>
                            <li className="mb-2">Total of four members will be selected by ISVIR who will be sent to SIR selected centres for up to 4 weeks Clinical Observership. Two candidates will be sent prior to SIR 2025 conference and two candidates will start observership after attending the SIR conference</li>
                            <li className="mb-2">The observers will get free registration for attending SIR annual conference</li>
                            <li className="mb-2">The society will support the Travel expenses (max 60,000/- Rs per candidate) while the accommodation expenditure will be borne by the candidate</li>
                            <li className="mb-2">The institutes where observership is offered will be decided soon</li>
                            <li className="mb-2">The VISA formalities will be processed by the candidate</li>
                        </ol>

                        <h5 className="mt-4 mb-3 text-dark fw-bold">The eligibility criteria:</h5>
                        <ol>
                            <li className="mb-2">Age: up to 40 yrs (up to 31st dec 2024)</li>
                            <li className="mb-2">Experience in Interventional Radiology after formal Radiology training – minimum of 2 yrs (Should be active member of ISVIR) Two candidates might also be chosen from fellows/trainees (Preferably in 2nd or 3rd Year of DM/DrNB/fellowship) in training of IR (if confirmation for accepting fellows as candidate approved from SIR). Fellows/trainees have to submit a certificate from Department Head of IR, stating that they will be granted leave if they are selected for observership</li>
                            <li className="mb-2">Publications related with Interventional Radiology topics (6 points for each original article (As 1st Author or Corresponding author) and 2 points for case reports)</li>
                            <li className="mb-2">Presentation in Annual Conference of ISVIR in last 5 years (2 point for oral presentation/ Faculty lecture/ Workshop Master and 1 point for poster presentation/ Workshops Facultin)</li>
                        </ol>
                    </Card.Body>
                </Card>
            </section>
        </>
    );
};

export default InternationalFellowship;
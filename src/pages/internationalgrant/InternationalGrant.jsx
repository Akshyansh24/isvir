import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BreadCrumb from '../../components/layouts/BreadCrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faCalendar } from '@fortawesome/free-solid-svg-icons';

const InternationalGrant = () => {
    const selectedCandidates = [
        { name: "Dr. John Doe", institution: "Global Medical Institute", branch: "CIRSE ET 2023" },
        { name: "Dr. Jane Smith", institution: "International Health Center", branch: "CIRSE ET 2023" }
    ];

    return (
        <>
            <BreadCrumb title={"International Travel Grant"} />

            <section className="international-grant sectionPadding py-4">
                <h6 className="grant-title mb-4 mt-2">Grant Recipients for the year 2023 (July-December)</h6>

                <Row className="g-4 mb-0">
                    {selectedCandidates.map((candidate, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <Card className="grant-card text-center">
                                <Card.Body className="p-4">
                                    <Card.Title className="grant-name text-danger">
                                        {candidate.name}
                                    </Card.Title>
                                    <Card.Text className="grant-institution">
                                        <FontAwesomeIcon icon={faUniversity} className="me-2" />
                                        {candidate.institution}
                                    </Card.Text>
                                    <Card.Text className="grant-branch">
                                        <FontAwesomeIcon icon={faCalendar} className="me-2" />
                                        {candidate.branch}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>


                <hr className="my-4 opacity-50" style={{ border: '1px solid grey' }} />

                <Card className="grant-main-content border-0 mb-4">
                    <Card.Body className="grant-sub-content p-2">
                        <p>Dear ISVIR members,</p>
                        <p>The ISVIR International grant is to provide financial assistance for presenting an oral paper or chairing a session or delivering a lecture address in an international conference held and the following:</p>
                        <p>50% of shortest Economy class air-fare, upto max Rs 50,000/- to four persons each for attending CIRSE, SIR, APSCVIR, KSIR, JSIR and PAIRS whose oral paper are accepted.</p>
                        <p>Applications can be submitted at any time throughout the year. However, grants will be awarded twice within a calendar year: in June (for conferences taking place from January to June of the same year) and in December (for conferences taking place from July to December of the same year)</p>
                        <p>We will not accept early or late submission of applications. However, applicant who has already submitted a proposal will not be eligible to apply again.</p>


                        <h5 className="mt-4 mb-3 text-dark fw-bold">The eligibility criteria:</h5>
                        <ol>
                            <li className="mb-2">Applicant should be an ISVIR life member</li>
                            <li className="mb-2">Age &lt; 40 years</li>
                            <li className="mb-2">Applicant should have an invitation letter for oral paper/lecture</li>
                            <li className="mb-2">The applicant should not have availed financial assistance under this Scheme during last five years</li>
                            <li className="mb-2">The conference should be of an international character. Invitation of personal nature such as CME/Workshop/informal training programmes/courses, interviewees, and other relevant observership etc. will not be eligible for support</li>
                        </ol>

                        <h5 className="mt-4 mb-3 text-dark fw-bold">Documents required:</h5>
                        <ol>
                            <li className="mb-2">An endorsement letter duly signed and stamped by authority of the institute</li>
                            <li className="mb-2">A copy of letter of acceptance of the presenting paper (oral/poster) by the organizers</li>
                            <li className="mb-2">A copy of the abstract of the paper to be presented</li>
                        </ol>

                        <h5 className="mt-4 mb-3 text-dark fw-bold">Kindly note,</h5>
                        <ol>
                            <li className="mb-2">The support is provided on reimbursement basis as per actual expenditure incurred by the applicant within the guidelines of the scheme</li>
                            <li className="mb-2">Applicant should not be receiving any scholarship/monetary benefits from conferences/organisers/industry partners</li>
                            <li className="mb-2">If any candidate found to have furnished incorrect / misleading information at any stage, his/her candidature will be cancelled and no reimbursement will be made</li>
                        </ol>

                        <div className="text-start mt-4">
                            <button className="btn btn-danger px-4 py-2 fw-bold">
                                Apply Now
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </>
    );
};

export default InternationalGrant;
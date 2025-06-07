
import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import BreadCrumb from '../../components/layouts/BreadCrumb';

const IRTrainingCenters = () => {
    return (
        <>
            <BreadCrumb title={"IR Training Centers"} />

            <section className="trainingSection sectionPadding">

                <Card className="training-content mb-4 mt-lg-5 mt-1  border-0">
                    <Card.Body className="p-0">
                        <p>This is a list of training centers across India offering Interventional Radiology training. Please note that the information provided has been directly submitted by the centers themselves. The Indian Society of Vascular and Interventional Radiology (ISVIR) does not hold any responsibility for any discrepancies found within these details.</p>
                        <p className="mb-4">It is advisable to contact the centers directly for more detailed information or any queries you may have.</p>
                        <p className="mb-4">The details of various training centers are updated frequently on our list. If you'd like to add your center's seat, please complete the form available at <a href="https://isvirindia.org/fellowshipDetail.php" target="_blank" rel="noopener noreferrer" className="fw-bold text-danger">click here</a>.</p>
                        <p className="mb-4">If you notice any discrepancies or have updates, don't hesitate to reach out to us at <a href="mailto:secretaryisvir@gmail.com" className="fw-bold text-danger">secretaryisvir@gmail.com</a>.</p>
                        <p className="mb-4">Please be aware that ISVIR only serves as a platform for disseminating this information. We do not guarantee the accuracy of the details provided.</p>
                    </Card.Body>
                </Card>

                <Card className="shadow-sm mb-5">
                    <Card.Body className="p-0">
                        <div className="table-responsive">
                            <Table hover responsive className="mb-0 irtrainingtable">
                                <thead className="table-danger">
                                    <tr>
                                        <th width="5%">#</th>
                                        <th width="30%">NAME OF INSTITUTE AND CONTACT DETAIL</th>
                                        <th width="20%">TYPE & DURATION OF COURSE</th>
                                        <th width="15%">SEATS/YEAR</th>
                                        <th width="30%">ADMISSION DETAIL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>AIG hospitals, Hyderabad</td>
                                        <td>Fellowship (1 year)</td>
                                        <td>2 seats</td>
                                        <td>Entrance exam + Interview</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>All India Institute of Medical Sciences, Jodhpur</td>
                                        <td>DM (3 years)</td>
                                        <td>2 seats</td>
                                        <td>INI SS</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>All India Institute of Medical Sciences, Rishikesh</td>
                                        <td>Fellowship (1 year)</td>
                                        <td>2 seats</td>
                                        <td>Entrance exam + Interview (email - aiimsrishikesh.edu.in)</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Apollo Hospital, Greams Road, Chennai</td>
                                        <td>Fellowship (1 year)</td>
                                        <td>2 seats</td>
                                        <td>Interview (Mail - irfellowshipchennai@gmail.com)</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>BJ Govt Medical College, Pune</td>
                                        <td>DM (3 years)</td>
                                        <td>2 seats</td>
                                        <td>Neet SS</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>C K Birla Hospital CMRI, Kolkata</td>
                                        <td>Fellowship (1 year)</td>
                                        <td>2 seats</td>
                                        <td>Interview</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Christian Medical College, Vellore</td>
                                        <td>DM (3 years), Fellowship (2 years)</td>
                                        <td>2 seats (DM), 2 seats (fellowship)</td>
                                        <td>Neet SS, Interview</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Datta Meghe University Jawaharlal Nehru medical college, Wardha</td>
                                        <td>DM (3 years), Fellowship (1 year)</td>
                                        <td>2 seats (DM), 1 seat (fellowship)</td>
                                        <td>NEET SS, Interview</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Dr. D Y Patil Medical college Hospital & research centre, Pimpri, Pune</td>
                                        <td>DM (3 years)</td>
                                        <td>2 seats</td>
                                        <td>Neet SS</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Endovascular Clinic</td>
                                        <td>Fellowship</td>
                                        <td>1 SEAT</td>
                                        <td>Interview only</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>

            </section>
        </>
    );
};

export default IRTrainingCenters;

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import bgbackground from "../../assets/images/findDoctor.png"
import BreadCrumb from '../../components/layouts/BreadCrumb';
import CounterBox from '../home/CounterBox';

function Patient() {

    const diseaseData = [
        {
            title: "Peripheral arterial disease (PAD)",
            description: "Peripheral arterial disease (PAD) is a common condition affecting 1 in 20 Americans age 50 and older. PAD happens when arteries in the legs narrow, reducing or cutting off blood flow",
            tags: ["Peripheral Arterial", "Stenting", "Thrombloysis"],
        },
        {
            title: "Coronary Artery Disease (CAD)",
            description: "Coronary artery disease happens when the arteries that supply blood to heart muscle become hardened and narrowed.",
            tags: ["Heart", "Angioplasty", "Medication"],
        },
        {
            title: "Chronic Kidney Disease (CKD)",
            description: "CKD involves gradual loss of kidney function over time, often leading to kidney failure if untreated.",
            tags: ["Kidney", "Dialysis", "Transplant"],
        },
    ];
    return (
        <>   
        <BreadCrumb title={"For Patient"} />
      
        <div className='patient sectionPadding bg-custom py-4'>
            <div className='headingBox card p-4 text-center'>
                <h4 className='fw-bold position-relative'>Delivering better outcomes</h4>
                <p>An interventional radiologist can work with your doctor or specialist to treat many of today’s toughest medical problems, including cancer, vascular diseases, and men and women’s health conditions.</p>
            </div>

            <div className='mt-4'>
                <Row>
                    <Col lg={6}>
                        <div className='mb-4  contentBoxPatient'>
                            <h4 className='fw-bold '>What is interventional radiology?</h4>
                            <p>Interventional radiology (also known as IR) is a medical specialty that harnesses the power of advanced imaging techniques, such as X-rays, fluoroscopy, CT, MRI or ultrasound, to look inside of the human body and pinpoint the problem. These high-tech imaging modalities are then combined with minimally invasive procedures in real time to treat the problem. IR delivers treatments with reduced risk, less pain and shorter recovery times than open surgery, reducing the length of hospital stays, minimizing potential complications and saving lives.</p>
                        </div>
                        <div className='mt-4 contentBoxPatient'>
                            <h4 className='fw-bold '>Who is an interventional radiologist and what do they treat?</h4>
                            <p>An interventional radiologist is a highly trained physician that incorporates high-tech imaging
                                modalities with minimally invasive procedures to diagnose and treat a wide variety of diseases
                                almost anywhere in the body. </p>
                            <p>Interventional radiologists are on the front lines of clinical advances and work across the body to deliver minimally invasive treatments for a variety of conditions. Review our list below to learn
                                more about the conditions that IRs treat.</p>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-4'>


                    {diseaseData.map((data) => (
                        <Col lg={3}>
                            <div className="card pCardc flex flex-column " style={{ }}>
                                <h5 className='fw-bold mb-4'>{data.title}</h5>
                                <p className='truncate' style={{ WebkitLineClamp: 6, flexGrow:1}}>{data.description}</p>
                                <ul className='tags-list d-flex align-items-center gap-2'>
                                    {data.tags.map((tag, index) => (
                                        <li key={index}>
                                            <a href="">{tag}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    ))}

                    <Col lg={12} className='mt-3 mb-3 text-center'  >
                        <button className='loadMore'>Load More</button>
                    </Col>


                </Row>

                <Col lg={12} className='my-4 d-flex align-items-center justify-content-center'>
                        <div className="card finddoctorBox d-flex align-items-center justify-content-center col-lg-10" style={{background:bgbackground,}}>
                            <h1 className='fw-bold text-white'>Find Doctor</h1>
                            <p className='text-white mb-0 w-50 text-center'>Use SIR's Doctor Finder to search for interventional radiologists in the United States and abroad.</p>

                            <button className='mt-4 findDoctorBtn'>Find Doctor</button>
                        </div>
                </Col>
            </div>
        </div>
        <CounterBox/>

          </>
    )
}

export default Patient
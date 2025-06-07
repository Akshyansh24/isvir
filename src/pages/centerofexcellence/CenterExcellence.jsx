import React, { useState } from 'react';
import CenterExcellenceImage from '../../assets/images/centerexcellenceimg.png'

const CenterExcellence = () => {
    const [formData, setFormData] = useState({
        email_id: '',
        name_of_hospital_institute: '',
        address: '',
        head_of_department: '',
        contact_detail_of_hod_email: '',
        contact_detail_of_hod_mobile: '',
        prerequisites: '',
        criteria: {},
        criteria_monthly: Array(29).fill(''),
        criteria_yearly: Array(29).fill(''),
        remark_or_suggestions: ''
    });

    const criteriaList = [
        "Liver Ablations (RFA,Microwave)",
        "Ablations (IRE,Cryoablation)",
        "TACE",
        "TARE",
        "DIPSS,TIPPS,HV recanalization",
        "BRTO/PARTO",
        "TJLB/HVPG",
        "Portal vein embolization",
        "Gastrostomies",
        "Biliary stenting",
        "Thyroid/parathyroid ablation",
        "Lung ablation",
        "RCC ablation",
        "Aortic aneurysms",
        "Peripheral vascular recanalizations",
        "DVT/Venous recanalization",
        "Varicose vein ablation (RFA/Laser/Venaseal)",
        "Vascular malformations(High flow/slow flow)",
        "Dialysis fistula Interventions",
        "Carotid stenting",
        "Cerebral aneurysm (coiling/flow divertor)",
        "Cerebral AVMs",
        "Joints, tendon injections",
        "Vertebroplasty/kyphoplasty",
        "Osteoid osteoma ablation",
        "Genicular artery embolization",
        "Prostate artery embolization",
        "Fibroid embolization",
        "Lymphatic Interventions"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCriteriaChange = (index, isChecked) => {
        const newCriteria = { ...formData.criteria };
        if (isChecked) {
            newCriteria[index] = criteriaList[index];
        } else {
            delete newCriteria[index];
        }
        setFormData(prev => ({ ...prev, criteria: newCriteria }));
    };

    const handleTextChange = (index, field, value) => {
        const newArray = [...formData[field]];
        newArray[index] = value;
        setFormData(prev => ({ ...prev, [field]: newArray }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formData.criteria).length < 1 || Object.keys(formData.criteria).length > 4) {
            alert('Please select between 1 and 4 procedures');
            return;
        }
        console.log('Form submitted:', formData);
    };

    return (

        <section className="sectionPadding  py-5 center-excellence-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="card shadow" style={{ border: 'none' }}>
                            <div className="card-body p-4">
                                <div className="excellence-main text-center mb-4">
                                    <a href="https://www.isvirindia.org" className="d-block mb-3">
                                        <img src="https://www.isvirindia.org/webtheme/images/isvir_logo.svg" alt="ISVIR" className="img-fluid" style={{ maxHeight: '80px' }} />
                                    </a>
                                    <hr />
                                    <h3 className="excellence-heading mb-3 fw-bold">Centers of Excellence for ISVIR Workshops</h3>
                                    <p className="excellence-content text-start">
                                        From head to toe, IR plays an integral role in managing diverse pathologies creating significant impact and improved clinical outcomes across all specialties of medicine. It is imperative to train an expert younger generation of IRs who will lead our specialty to new heights and greater achievements. Therefore, ISVIR plans to collaborate with various centers of excellence across the country to achieve this goal of providing highly qualified medical expertise and comprehensive patient care to our patients, communities, hospitals and referral physicians. Existing institutions run by experts and stalwarts of interventional radiology performing advanced and pioneer work are apt and well suited to help their junior colleagues and trainees to grow, learn and serve man kind. Henceforth, ISVIR is pleased to invite applications for centers of excellence for various workshops.
                                    </p>
                                </div>
                                <div className="excellence-middle">
                                    <h5 className="excellence-middle-heading mt-5 fw-bold">Prerequisites for a Center of Excellence</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="excellence-middle-content">1. Should be a high-volume center for the intended procedure (see below)</li>
                                        <li className="excellence-middle-content">2. Should have enough space in department to provide hands on training for at least 10-15 delegates</li>
                                        <li className="excellence-middle-content">3. Audio visual system support to run short presentations</li>
                                        <li className="excellence-middle-content">4. More than one person performing the procedure (preferably)</li>
                                        <li className="text-danger fw-bold">5. You can apply for minimum 1 and maximum 4 procedures</li>
                                        <li className="text-danger fw-bold">6. It is mandatory to input both numbers for selected procedures</li>
                                    </ul>
                                </div>
                                <img src={CenterExcellenceImage} className="img-fluid mb-4" alt="Centers of Excellence" />
                                <hr />

                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3 ">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold">Email Id <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" name="email_id" value={formData.email_id} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold">Name of Hospital/Institute <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" name="name_of_hospital_institute" value={formData.name_of_hospital_institute} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Hospital/Institute Address <span className="text-danger">*</span></label>
                                        <textarea className="form-control" name="address" value={formData.address} onChange={handleChange} required rows="3"></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Head of department <span className="text-danger">*</span></label>
                                        <textarea className="form-control" name="head_of_department" value={formData.head_of_department} onChange={handleChange} required rows="3"></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Contact details of coordinator from Department for workshop <span className="text-danger">*</span></label>
                                        <div className="row">
                                            <div className="col-md-6 mb-3 mt-3">
                                                <label className="form-label fw-bold">Email <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" name="contact_detail_of_hod_email" value={formData.contact_detail_of_hod_email} onChange={handleChange} required />
                                            </div>
                                            <div className="col-md-6 mb-3 mt-3">
                                                <label className="form-label fw-bold">Mobile <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" name="contact_detail_of_hod_mobile" value={formData.contact_detail_of_hod_mobile} onChange={handleChange} required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-bold">All prerequisites mentioned above for a Center of Excellence satisfied at your hospital/institute? <span className="text-danger">*</span></label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="prerequisites" value="Yes" checked={formData.prerequisites === 'Yes'} onChange={handleChange} required />
                                            <label className="form-check-label fw-bold">Yes</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="prerequisites" value="No" checked={formData.prerequisites === 'No'} onChange={handleChange} />
                                            <label className="form-check-label fw-bold">No</label>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="mb-4">
                                        <label className="form-label fw-bold">Criteria for high volume centers for workshops <span className="text-danger">*</span></label>
                                        <div className="table-responsive">
                                            <table className="centerexcellencetable table">
                                                <thead className="table-danger">
                                                    <tr>
                                                        <th width="5%">Check</th>
                                                        <th>Procedure</th>
                                                        <th width="25%">Average case monthly</th>
                                                        <th width="25%">Average cases yearly</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {criteriaList.map((criteria, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input border-success"
                                                                    checked={!!formData.criteria[index]}
                                                                    onChange={(e) => handleCriteriaChange(index, e.target.checked)}
                                                                />
                                                            </td>
                                                            <td className="fw-bold">{criteria}</td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-sm"
                                                                    value={formData.criteria_monthly[index]}
                                                                    onChange={(e) => handleTextChange(index, 'criteria_monthly', e.target.value)}
                                                                    readOnly={!formData.criteria[index]}
                                                                    required={!!formData.criteria[index]}
                                                                    style={{ backgroundColor: '#e9ecef', opacity: '1' }}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-sm"
                                                                    value={formData.criteria_yearly[index]}
                                                                    onChange={(e) => handleTextChange(index, 'criteria_yearly', e.target.value)}
                                                                    readOnly={!formData.criteria[index]}
                                                                    required={!!formData.criteria[index]}
                                                                    style={{ backgroundColor: '#e9ecef', opacity: '1' }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-bold">Any remark or suggestions <span className="text-danger">*</span></label>
                                        <textarea className="form-control custom-textarea-height" name="remark_or_suggestions" value={formData.remark_or_suggestions} onChange={handleChange} required rows="3" ></textarea>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary px-5 py-2">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CenterExcellence;
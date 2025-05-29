import React from 'react'
import JuniorCommittee2025 from './JuniorCommittee2025'
import JuniorCommittee2024 from './JuniorCommittee2024'
import Masterclass from './Masterclass'
import BreadCrumb from '../../components/layouts/BreadCrumb'
import Banner from "../../assets/images/juniorWing/banner.png"
// import MasterclassSeries from './MasterclassSeries'
function JuniorWing() {
    return (
        <div>
            <BreadCrumb title={"ISVIR Junior Wing"}/>
            <JuniorCommittee2025 />
            <JuniorCommittee2024 />
            <Masterclass />
            {/* <MasterclassSeries /> */}
            <div className='py-4'>
                  <h1 className="junior-2024-heading mb-4">Upcoming Masterclass Series</h1>
                  <img src={Banner} className='img-fluid' alt="" srcset="" />
            </div>
        </div>
    )
}

export default JuniorWing

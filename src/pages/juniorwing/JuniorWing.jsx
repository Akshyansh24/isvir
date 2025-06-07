import React from 'react';
import JuniorCommittee2025 from './JuniorCommittee2025';
import JuniorCommittee2024 from './JuniorCommittee2024';
import Masterclass from './Masterclass';
import BreadCrumb from '../../components/layouts/BreadCrumb';

function JuniorWing() {
    return (
        <div>
            <BreadCrumb title={"ISVIR Junior Wing"} />
            <JuniorCommittee2025 />
            <JuniorCommittee2024 />
            <Masterclass />

            <div className="py-4 px-4">
                <h1 className="junior-2024-heading mb-4">Upcoming Masterclass Series</h1>
                <video
                    className="w-100 rounded shadow-sm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    style={{ height: '100%', objectFit: 'cover' }}
                >
                    <source src="https://isvirindia.org/uploads/ISVIR-Upcoming-Masterclass.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default JuniorWing;

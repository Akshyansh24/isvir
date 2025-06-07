
// import React, { useEffect, useRef } from 'react';
// import HTMLFlipBook from "react-pageflip";


// const ConstitutionIsvir = () => {
//     const bookRef = useRef(null);
//     const flipRef = useRef(null);
//     const totalPages = 11;

//     const formatPageNumber = (n) => (n < 10 ? `0${n}` : `${n}`);

//     return (
//         <div className="container my-4 d-flex justify-content-center">
//             <HTMLFlipBook
//                 width={400}
//                 height={600}
//                 size="stretch"
//                 minWidth={315}
//                 maxWidth={600}
//                 minHeight={400}
//                 maxHeight={600}
//                 maxShadowOpacity={0.5}
//                 showCover={false}
//                 mobileScrollSupport={true}>
//                 <div className="page cover" data-density="hard">
//                     <div className="d-flex justify-content-center align-items-center h-100">
//                         <h2 className="text-center w-100">ISVIR Constitution</h2>
//                     </div>
//                 </div>
//                 {[...Array(totalPages)].map((_, i) => {
//                     const pageNum = formatPageNumber(i + 1);
//                     return (
//                         <div className="page" key={i}>
//                             <div className="page-content m-4">
//                                 <img
//                                     src={`https://www.isvirindia.org/uploads/constitution_of_isvir/ISVIR-CONSTITUTION-${pageNum}.jpg`}
//                                     alt={`ISVIR Constitution Page ${pageNum}`}
//                                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                                 />
//                             </div>
//                         </div>
//                     );
//                 })}
//             </HTMLFlipBook>
//         </div>
//     );
// };

// export default ConstitutionIsvir;



import React, { useRef } from 'react';
import HTMLFlipBook from "react-pageflip";

const ConstitutionIsvir = () => {
    const flipRef = useRef(null);
    const totalPages = 11;

    const formatPageNumber = (n) => (n < 10 ? `0${n}` : `${n}`);

    const goNext = () => {
        flipRef.current.pageFlip().flipNext();
    };

    const goPrev = () => {
        flipRef.current.pageFlip().flipPrev();
    };

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-center">
                <HTMLFlipBook
                    ref={flipRef}
                    width={400}
                    height={600}
                    size="stretch"
                    minWidth={315}
                    maxWidth={600}
                    minHeight={400}
                    maxHeight={600}
                    maxShadowOpacity={0.5}
                    showCover={false}
                    mobileScrollSupport={true}
                    className="mb-3"
                >
                    <div className="page cover" data-density="hard">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <h2 className="text-center w-100">ISVIR Constitution</h2>
                        </div>
                    </div>
                    {[...Array(totalPages)].map((_, i) => {
                        const pageNum = formatPageNumber(i + 1);
                        return (
                            <div className="page" key={i}>
                                <div className="page-content m-4">
                                    <img
                                        src={`https://www.isvirindia.org/uploads/constitution_of_isvir/ISVIR-CONSTITUTION-${pageNum}.jpg`}
                                        alt={`ISVIR Constitution Page ${pageNum}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </HTMLFlipBook>
            </div>


            <div className="d-flex justify-content-center gap-3 mt-3">
                <button
                    className="btn btn-primary px-4"
                    onClick={goPrev}
                    aria-label="Previous page"
                >
                    Previous
                </button>
                <button
                    className="btn btn-primary px-4"
                    onClick={goNext}
                    aria-label="Next page"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ConstitutionIsvir;
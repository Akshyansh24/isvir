
import React, { useEffect, useRef } from 'react';
import HTMLFlipBook from "react-pageflip";


const ConstitutionIsvir = () => {
    const bookRef = useRef(null);
    const flipRef = useRef(null);
    const totalPages = 11;

    const formatPageNumber = (n) => (n < 10 ? `0${n}` : `${n}`);
    // useEffect(() => {
    //     if (bookRef.current && !flipRef.current) {
    //         flipRef.current = new PageFlip(bookRef.current, {
    //             width: 600,
    //             height: 450,
    //             size: 'fixed',
    //             showCover: true,
    //             mobileScrollSupport: false,
    //             maxShadowOpacity: 0.5,
    //         });

    //         flipRef.current.loadFromHTML(document.querySelectorAll('.my-page'));
    //     }
    // }, []);

    // const nextPage = () => flipRef.current?.flipNext();
    // const prevPage = () => flipRef.current?.flipPrev();

    return (
        // <div className="container my-4 d-flex flex-column align-items-center">
        //     <div id="book" ref={bookRef}>
        //         <div className="my-page" data-density="hard">Page Cover</div>

        //         {[...Array(5)].map((_, i) => (
        //             <div className="my-page" key={i}>
        //                 <img
        //                     src="https://www.isvirindia.org/uploads/constitution_of_isvir/ISVIR-CONSTITUTION-05.jpg"
        //                     alt={`ISVIR Constitution Page ${i + 1}`}
        //                 />
        //             </div>
        //         ))}

        //         <div className="my-page" data-density="hard">End</div>
        //     </div>

        //     <div className="book-controls">
        //         <button onClick={prevPage}>⬅ Previous</button>
        //         <button onClick={nextPage}>Next ➡</button>
        //     </div>
        // </div>
        <div className="container my-4 d-flex justify-content-center">
            <HTMLFlipBook
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
            >
                {/* Cover Page */}
                <div className="page cover" data-density="hard">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <h2 className="text-center w-100">ISVIR Constitution</h2>
                    </div>
                </div>

                {/* Constitution Images */}
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



                {/* End Page */}
                {/* <div className="page end" data-density="hard">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <h4 className="text-center w-100">End of Constitution</h4>
                    </div>
                </div> */}
            </HTMLFlipBook>
        </div>
    );
};

export default ConstitutionIsvir;

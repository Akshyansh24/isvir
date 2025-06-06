
import React, { useRef, useEffect } from 'react';
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

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') goNext();
            else if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="sectionPadding my-4">
            <div className="d-flex justify-content-center flipbook-wrapper">
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
                    className="flipbook"
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
                                <div className="page-content">
                                    <img
                                        src={`https://www.isvirindia.org/uploads/constitution_of_isvir/ISVIR-CONSTITUTION-${pageNum}.jpg`}
                                        alt={`ISVIR Constitution Page ${pageNum}`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </HTMLFlipBook>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                <button className="btn btn-primary px-4" onClick={goPrev}>Previous</button>
                <button className="btn btn-primary px-4" onClick={goNext}>Next</button>
            </div>
        </div>
    );
};

export default ConstitutionIsvir;

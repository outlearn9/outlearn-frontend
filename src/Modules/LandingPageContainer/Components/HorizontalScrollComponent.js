const HorizontalScroll = () => {

    let ary = [1, 2, 3, 4, 5, 4, 23, 2]

    const onRightArrow = () => {
        let i = 0
        const ref = document.querySelector('.hl-1');
        ref.scroll(ref.scrollLeft + 100, 0)
        i = i + 100
        console.log(ref.scrollWidth);
        console.log(ref.scrollLeft + 100);
    
    }

    return <>
        <div className="horizontal-head"><h2 className="m-2">Webinars</h2> <h3 className="m-2">View All</h3></div>
        <div className="horizontal-loop hl-1">
            {
                ary.map(element => (
                    <div className="webinar-card-wrapper">
                        <div className="webinar-card-footer">
                            <div>
                                <h5>Java</h5>
                                <h6> Anurag Patel</h6>
                            </div>
                            <div>
                                <h6> 30 Sep, 5:30pm</h6>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="arrow-icons" onClick={onRightArrow}>
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_928:2600)">
                        <circle cx="36" cy="30" r="24" fill="white"></circle>
                    </g>
                    <path d="M33 23L39.5 29.5L33 36" stroke="#999999" stroke-width="2"></path>
                    <defs>
                        <filter id="filter0_d_928:2600" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                            <feOffset dy="6"></feOffset>
                            <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_928:2600"></feBlend>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_928:2600" result="shape"></feBlend>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    </>

}




export default HorizontalScroll;
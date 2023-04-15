import React from 'react';

import WhyIcon1 from '../../../assets/images/gusd/why-investing-icon2.svg'
import WhyIcon2 from '../../../assets/images/gusd/why-investing-icon1.svg'
import WhyIcon3 from '../../../assets/images/gusd/why-investing-icon4.svg'
import WhyIcon4 from '../../../assets/images/gusd/why-investing-icon3.svg'



const Why = () => {

    return(
        <section id="whyGUSD">
        <h5 className="sectionTitle">Why GUSD?</h5>
        <h5 className="sectionSubtitle">Fight the inflation era always holding USD dollars but with a safe experience backed by diamonds.</h5>
        <div className="squareElementsGrid">
            <div className="squaresRow">
                <div className="darkSquare">
                    
                    <svg className="squareArrow" width="40" height="40" viewBox="0 0 50 50" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.4167 27.0834H33.6875L23.5208 37.2501C22.7083 38.0626 22.7083 39.3959 23.5208 40.2084C24.3333 41.0209 25.6458 41.0209 26.4583 40.2084L40.1875 26.4792C40.3806 26.2865 40.5339 26.0576 40.6384 25.8055C40.743 25.5535 40.7968 25.2833 40.7968 25.0105C40.7968 24.7376 40.743 24.4675 40.6384 24.2154C40.5339 23.9634 40.3806 23.7345 40.1875 23.5417L26.4792 9.79173C26.2863 9.59885 26.0573 9.44585 25.8053 9.34146C25.5533 9.23708 25.2832 9.18335 25.0104 9.18335C24.7376 9.18335 24.4675 9.23708 24.2155 9.34146C23.9635 9.44585 23.7345 9.59885 23.5417 9.79173C23.3488 9.9846 23.1958 10.2136 23.0914 10.4656C22.987 10.7176 22.9333 10.9877 22.9333 11.2605C22.9333 11.5332 22.987 11.8033 23.0914 12.0554C23.1958 12.3074 23.3488 12.5363 23.5417 12.7292L33.6875 22.9167H10.4167C9.27084 22.9167 8.33334 23.8542 8.33334 25.0001C8.33334 26.1459 9.27084 27.0834 10.4167 27.0834Z"
                            fill="white" />
                    </svg>
                    <img src={WhyIcon1} className="squareIcon" alt="" />
                    
                    <h5 className="squareTitle">Stability</h5>
                    <p className="squareText">GUSD is a 1 : 1 stablecoin, pegged to the price of USD in a safe andstable
                        pegging system.</p>
                    <h5 className="squareLearnMore">Learn More</h5>

                </div>
                <div className="darkSquare">
                    <svg className="squareArrow" width="40" height="40" viewBox="0 0 50 50" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.4167 27.0834H33.6875L23.5208 37.2501C22.7083 38.0626 22.7083 39.3959 23.5208 40.2084C24.3333 41.0209 25.6458 41.0209 26.4583 40.2084L40.1875 26.4792C40.3806 26.2865 40.5339 26.0576 40.6384 25.8055C40.743 25.5535 40.7968 25.2833 40.7968 25.0105C40.7968 24.7376 40.743 24.4675 40.6384 24.2154C40.5339 23.9634 40.3806 23.7345 40.1875 23.5417L26.4792 9.79173C26.2863 9.59885 26.0573 9.44585 25.8053 9.34146C25.5533 9.23708 25.2832 9.18335 25.0104 9.18335C24.7376 9.18335 24.4675 9.23708 24.2155 9.34146C23.9635 9.44585 23.7345 9.59885 23.5417 9.79173C23.3488 9.9846 23.1958 10.2136 23.0914 10.4656C22.987 10.7176 22.9333 10.9877 22.9333 11.2605C22.9333 11.5332 22.987 11.8033 23.0914 12.0554C23.1958 12.3074 23.3488 12.5363 23.5417 12.7292L33.6875 22.9167H10.4167C9.27084 22.9167 8.33334 23.8542 8.33334 25.0001C8.33334 26.1459 9.27084 27.0834 10.4167 27.0834Z"
                            fill="white" />
                    </svg>
                    <img src={WhyIcon2} className="squareIcon" alt="" />
                    <h5 className="squareTitle">Real value</h5>
                    <p className="squareText">Over collateralization of diamonds that are safe and screened daily to avoid
                        volatile market risks for investors.</p>
                    <h5 className="squareLearnMore">Learn More</h5>

                </div>
            </div>
            <div className="squaresRow">
                <div className="darkSquare">
                    <svg className="squareArrow" width="40" height="40" viewBox="0 0 50 50" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.4167 27.0834H33.6875L23.5208 37.2501C22.7083 38.0626 22.7083 39.3959 23.5208 40.2084C24.3333 41.0209 25.6458 41.0209 26.4583 40.2084L40.1875 26.4792C40.3806 26.2865 40.5339 26.0576 40.6384 25.8055C40.743 25.5535 40.7968 25.2833 40.7968 25.0105C40.7968 24.7376 40.743 24.4675 40.6384 24.2154C40.5339 23.9634 40.3806 23.7345 40.1875 23.5417L26.4792 9.79173C26.2863 9.59885 26.0573 9.44585 25.8053 9.34146C25.5533 9.23708 25.2832 9.18335 25.0104 9.18335C24.7376 9.18335 24.4675 9.23708 24.2155 9.34146C23.9635 9.44585 23.7345 9.59885 23.5417 9.79173C23.3488 9.9846 23.1958 10.2136 23.0914 10.4656C22.987 10.7176 22.9333 10.9877 22.9333 11.2605C22.9333 11.5332 22.987 11.8033 23.0914 12.0554C23.1958 12.3074 23.3488 12.5363 23.5417 12.7292L33.6875 22.9167H10.4167C9.27084 22.9167 8.33334 23.8542 8.33334 25.0001C8.33334 26.1459 9.27084 27.0834 10.4167 27.0834Z"
                            fill="white" />
                    </svg>
                    <img src={WhyIcon3} className="squareIcon" alt="" />
                    <h5 className="squareTitle">Safety</h5>
                    <p className="squareText">Anti-flash loan and anti-manipulation stablecoin, screened from other market
                        assets and brokers.</p>
                    <h5 className="squareLearnMore">Learn More</h5>

                </div>
                <div className="darkSquare">
                    <svg className="squareArrow" width="40" height="40" viewBox="0 0 50 50" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.4167 27.0834H33.6875L23.5208 37.2501C22.7083 38.0626 22.7083 39.3959 23.5208 40.2084C24.3333 41.0209 25.6458 41.0209 26.4583 40.2084L40.1875 26.4792C40.3806 26.2865 40.5339 26.0576 40.6384 25.8055C40.743 25.5535 40.7968 25.2833 40.7968 25.0105C40.7968 24.7376 40.743 24.4675 40.6384 24.2154C40.5339 23.9634 40.3806 23.7345 40.1875 23.5417L26.4792 9.79173C26.2863 9.59885 26.0573 9.44585 25.8053 9.34146C25.5533 9.23708 25.2832 9.18335 25.0104 9.18335C24.7376 9.18335 24.4675 9.23708 24.2155 9.34146C23.9635 9.44585 23.7345 9.59885 23.5417 9.79173C23.3488 9.9846 23.1958 10.2136 23.0914 10.4656C22.987 10.7176 22.9333 10.9877 22.9333 11.2605C22.9333 11.5332 22.987 11.8033 23.0914 12.0554C23.1958 12.3074 23.3488 12.5363 23.5417 12.7292L33.6875 22.9167H10.4167C9.27084 22.9167 8.33334 23.8542 8.33334 25.0001C8.33334 26.1459 9.27084 27.0834 10.4167 27.0834Z"
                            fill="white" />
                    </svg>
                    <img src={WhyIcon4} className="squareIcon" alt="" />
                    <h5 className="squareTitle">Fast & Reliable</h5>
                    <p className="squareText">An advanced ecosystem with a super performing infrastructure to keep all your
                        focus on investing actions.</p>
                    <h5 className="squareLearnMore">Learn More</h5>

                </div>
            </div>


        </div>
    </section>
    );
}

export default Why;
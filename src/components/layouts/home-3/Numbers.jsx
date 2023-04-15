import React from 'react';

const Numbers = () => {

    return (
        <section id="gusdNumbers">
            <h5 className="sectionTitle">GUSD: towards a safer investment</h5>
            <h5 className="sectionSubtitle">Thanks to the blockchain technology we keep our data safe and with an instant traciability.</h5>
            <div className="rowOfThreeNumbers">
                <div className="numberWrapper">
                    <h5 className="numberTitle">$15B</h5>
                    <h5 className="numberSubtitle">IN CIRCULATION</h5>
                    <h5 className="numberComment">02/04/2023</h5>
                </div>
                <div className="numberSeperator"></div>
                <div className="numberWrapper">
                    <h5 className="numberTitle">15K</h5>
                    <h5 className="numberSubtitle">OF HOLDERS</h5>
                    <h5 className="numberComment">02/04/2023</h5>
                </div>
                <div className="numberSeperator"></div>
                <div className="numberWrapper">
                    <h5 className="numberTitle">$2B</h5>
                    <h5 className="numberSubtitle">24H TRADING VOLUME</h5>
                    <h5 className="numberComment">02/04/2023</h5>
                </div>
            </div>
            <div className="rowOfTwoNumbers">
                <div className="numberWrapper">
                    <h5 className="numberTitle">$7T</h5>
                    <h5 className="numberSubtitle">TOTAL TRANSACTIONS</h5>
                    <h5 className="numberComment">02/04/2023</h5>
                </div>
                <div className="numberSeperator"></div>
                <div className="numberWrapper">
                    <h5 className="numberTitle">24+</h5>
                    <h5 className="numberSubtitle">COUNTRIES SUPPORTING</h5>
                    <h5 className="numberComment">02/04/2023</h5>
                </div>

            </div>
        </section>
    );
}

export default Numbers;
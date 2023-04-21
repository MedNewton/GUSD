import React from 'react';
import PropTypes from 'prop-types'

import SwappingBox from './SwappingBox';
import SwappingV3 from '../../components/layouts/SwappingV3';
import mintingData from '../../assets/fake-data/fakeMintingData'


const SwappingLayout = props => {
    const swappingV3Value = [
        {
            price : 1,
            from : "GUSD",
            to : "USD"
        }
    ];
    const data = props.data
    const modalShow = props.modalShow
    return (
        <div className="swappingPageContainer" >
            <div className="row swappingBoxWrapper centered-axis-x centered-axis-y">
                <SwappingBox data={mintingData} modalShow={modalShow} />
                <SwappingV3 data={swappingV3Value}/>
            </div>
            
        </div>
    );
}

SwappingLayout.propTypes = {
    data: PropTypes.array.isRequired,
    modalSHow: PropTypes.func.isRequired
}

export default SwappingLayout;

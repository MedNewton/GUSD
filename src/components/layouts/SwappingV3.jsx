import React from 'react';
import PropTypes from 'prop-types'

const SwappingV3 = props => {
    const data = props.data;
    console.log(data)
    return(
        <div className='swappingV3GlassBox'>
            <h5 className="swappingV3BoxTitle">GATO Swap</h5>
            <h5 className="swappingV3Data">1 GUSD = $1 {data[0].to.toString()}</h5>
        </div>
    );
}

SwappingV3.propTypes = {
    data: PropTypes.array.isRequired,
}

export default SwappingV3;
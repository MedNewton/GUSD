import React from 'react';
import PropTypes from 'prop-types'

import leaves5 from '../assets/images/minting/Leaves_05.svg'
import leaves7 from '../assets/images/minting/Leaves_07.svg'
import leaves2 from '../assets/images/minting/Leaves_02_minting_box.svg'
import leaves1 from '../assets/images/minting/6.svg'
import { propTypes } from 'react-bootstrap/esm/Image';

import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';

const MintingBox = props => {

    const data = props.data;
    return (
        
        <div className="mintingGlassBox">
            <div className="mintingBoxTitleWrapper">Minting</div>
            <div className="row mintingFormWrapper">
                <div className="col-5 mintDisplayWrapper">
                    <div className="mintPreviewBox">
                        <div className="mintDisplayImage"></div>
                    </div>
                </div>
                <div className="col-7 mintInputsWrapper">
                    <div className="NFTPriceBox">
                        <h5 className='NFTPriceLabel'>Crazy Zoo NFT Price</h5>
                        <h5 className='NFTPrice'>{data[0].NFTPrice.toString()} $ZOO</h5>
                    </div>
                    <div className="mintedProgressBarWrapper">
                        <div className="mintedProgressBarLabelWrapper">
                            <h5 className='mintedLabel'>Minted</h5>
                            <h5 className='mintedData'>{data[0].minted.toString()}/{data[0].totalSupply.toString()}</h5>
                            <ProgressBar min={0} max={data[0].totalSupply} now={data[0].minted} id="mintedProgressBar"/>
                        </div>
                        
                        <div className="animalsProgressBarLabelWrapper">
                            <h5 className='animalsLabel'>Total Animals</h5>
                            <h5 className='animalsData'>{data[0].animals.toString()}/0{data[0].totalAnimals.toString()}</h5>
                            <ProgressBar min={0} max={data[0].totalAnimals} now={data[0].animals} id="animalsProgressBar"/>
                        </div>
                        <div className="totalPriceLabelWrapper">
                            <h5 className='totalPriceLabel'>Total Price</h5>
                            <h5 className='totalPriceData'>{data[0].totalPrice.toString()} $ZOO</h5>
                        </div>
                        <div className="mintBtnWrapper">
                            <Button className="mintBtn">Mint</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

MintingBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default MintingBox;
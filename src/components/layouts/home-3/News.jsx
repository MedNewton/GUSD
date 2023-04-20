import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Article = item => {
    return (
        <div className='article'>
            <div className="articleImage" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="articleDataContainer">
                <h5 className='articleTitle'>{item.title}</h5>
                <h5 className='articleAuthor'>{item.author}</h5>
            </div>
        </div>
    );
}

const News = () => {

    const username = "gatochain"

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    const gatoArticles = [
        {
            id: 0,
            title: "Unlocking the Potential of Gato Chain: A Deep Dive into the Benefits of Proof of Stake and EVM Compatibility",
            author: "GATO CHAIN",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XfW8eknxL6cmU-30K7cu-g.png",
            link: "https://gatochain.medium.com/unlocking-the-potential-of-gato-chain-a-deep-dive-into-the-benefits-of-proof-of-stake-and-evm-9edbef0fd3b7?source=user_profile---------0----------------------------"
        },
        {
            id: 1,
            title: "Revolutionizing Business with Smart Contracts: The Benefits of Using Smart Contracts in Your Business",
            author: "GATO CHAIN",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*X_O0-10eodUnLgyi_M_tig.jpeg",
            link: "https://gatochain.medium.com/revolutionizing-business-with-smart-contracts-a5580576c726?source=user_profile---------1----------------------------"
        },
        {
            id: 2,
            title: "CeFi vs DeFi: A Comparison Between Centralized Finance and Decentralized Finance",
            author: "GATO CHAIN",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Ex7GOr4Vf8V8SqfGjKthbg.png",
            link: "https://gatochain.medium.com/cefi-vs-defi-cbc71b76028a?source=user_profile---------2----------------------------"
        },
        {
            id: 3,
            title: "Don’t Skip This Article If You Are Interested in Blockchain",
            author: "GATO CHAIN",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*vtTz7httkdIdyHZl.jpeg",
            link: "https://gatochain.medium.com/dont-skip-this-article-if-you-have-a-company-8f89632b9035?source=user_profile---------3----------------------------"
        },
        {
            id: 4,
            title: "The Benefits of Implementing the Blockchain: BLOCKCHAIN FOR PRIVATE AND PUBLIC ENTITIES",
            author: "GATO CHAIN",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3FTQwLNMECf_cLUpNL_qHg.jpeg",
            link: "https://gatochain.medium.com/the-benefits-of-implementing-the-blockchain-a1ee7edcb172?source=user_profile---------4----------------------------"
        }
    ]

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
            onMove,
            carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return (
            <div className='articlesArrowRight' onClick={() => onClick()}>
                <svg className="squareArrow" width="30" height="30" viewBox="0 0 50 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.4167 27.0834H33.6875L23.5208 37.2501C22.7083 38.0626 22.7083 39.3959 23.5208 40.2084C24.3333 41.0209 25.6458 41.0209 26.4583 40.2084L40.1875 26.4792C40.3806 26.2865 40.5339 26.0576 40.6384 25.8055C40.743 25.5535 40.7968 25.2833 40.7968 25.0105C40.7968 24.7376 40.743 24.4675 40.6384 24.2154C40.5339 23.9634 40.3806 23.7345 40.1875 23.5417L26.4792 9.79173C26.2863 9.59885 26.0573 9.44585 25.8053 9.34146C25.5533 9.23708 25.2832 9.18335 25.0104 9.18335C24.7376 9.18335 24.4675 9.23708 24.2155 9.34146C23.9635 9.44585 23.7345 9.59885 23.5417 9.79173C23.3488 9.9846 23.1958 10.2136 23.0914 10.4656C22.987 10.7176 22.9333 10.9877 22.9333 11.2605C22.9333 11.5332 22.987 11.8033 23.0914 12.0554C23.1958 12.3074 23.3488 12.5363 23.5417 12.7292L33.6875 22.9167H10.4167C9.27084 22.9167 8.33334 23.8542 8.33334 25.0001C8.33334 26.1459 9.27084 27.0834 10.4167 27.0834Z"
                        fill="white" />
                </svg>
            </div>
        );
    };

    const CustomLeftArrow = ({ onClick, ...rest }) => {
        const {
            onMove,
            carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return (
            <div className='articlesArrowLeft' onClick={() => onClick()}>
                <svg style={{ transform: "rotateY(180deg)" }} className="squareArrow" width="30" height="30" viewBox="0 0 50 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.4167 27.0834H33.6875L23.5208 37.2501C22.7083 38.0626 22.7083 39.3959 23.5208 40.2084C24.3333 41.0209 25.6458 41.0209 26.4583 40.2084L40.1875 26.4792C40.3806 26.2865 40.5339 26.0576 40.6384 25.8055C40.743 25.5535 40.7968 25.2833 40.7968 25.0105C40.7968 24.7376 40.743 24.4675 40.6384 24.2154C40.5339 23.9634 40.3806 23.7345 40.1875 23.5417L26.4792 9.79173C26.2863 9.59885 26.0573 9.44585 25.8053 9.34146C25.5533 9.23708 25.2832 9.18335 25.0104 9.18335C24.7376 9.18335 24.4675 9.23708 24.2155 9.34146C23.9635 9.44585 23.7345 9.59885 23.5417 9.79173C23.3488 9.9846 23.1958 10.2136 23.0914 10.4656C22.987 10.7176 22.9333 10.9877 22.9333 11.2605C22.9333 11.5332 22.987 11.8033 23.0914 12.0554C23.1958 12.3074 23.3488 12.5363 23.5417 12.7292L33.6875 22.9167H10.4167C9.27084 22.9167 8.33334 23.8542 8.33334 25.0001C8.33334 26.1459 9.27084 27.0834 10.4167 27.0834Z"
                        fill="white" />
                </svg>
            </div>
        );
    };

    return (
        <section id="news">
            <h5 className="sectionTitle paddedSectionTitle">In the news</h5>
            <h5 className="sectionSubtitle paddedSectionSubtitle">Discover the latest updates about the first diamonds backed coin by Gatochain Foundation</h5>
            <div className="newsCarouselWrapper">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={false}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        gatoArticles.map((article, index) => {
                            return (
                                <Link key={index} to={article.link} target="_blank">
                                    <div key={index} className='article'>
                                        <div className="articleImage" style={{ backgroundImage: `url(${article.image})` }}></div>
                                        <div className="articleDataContainer">
                                            <h5 className='articleTitle'>{article.title}</h5>
                                            <h5 className='articleAuthor'>by: {article.author}</h5>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </Carousel>;
            </div>
        </section>
    );
}

export default News;
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

function VideoCarouselWidget(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
            <Carousel.Item>
                <iframe width="100%" height="250" src="https://www.youtube.com/embed/JTvXjakGJBs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                {/* <Carousel.Caption>
                    <h3>Short Introduction</h3>
                </Carousel.Caption> */}
            </Carousel.Item>
            {/* <Carousel.Item>
                <iframe width="100%" height="250" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <Carousel.Caption>
                    <h3>Profile work-through</h3>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
}

VideoCarouselWidget.propTypes = {
    showUpcoming: PropTypes.bool.isRequired
}

export default VideoCarouselWidget;

import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss'

index.propTypes = {
    
};

function index(props) {
    const { title, backgroundUrl } = props;

    const bannerStyle = backgroundUrl ? 
    { backgroundImage: `url(${backgroundUrl})`} : {};
    return (
        <div>
            <section className="banner" style={bannerStyle}>
                <h1 className="banner__title">{title}</h1>
            </section>
        </div>
    );
}

export default index;
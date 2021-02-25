import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './PhotoCard.scss'

PhotoCard.propTypes = {
    
};

function PhotoCard(props) {
    const { photo, onEditClick, onRemoveClick } = props;
    const onHandleEditClick = () => {
        if(onEditClick) onEditClick(photo)
    }

    const onHandleRemoveClick = () => {
        if(onRemoveClick) onRemoveClick(photo)
    }
    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title} />
            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>
                <div className="photo__actions">
                    <div>
                        <Button outline size="sm" color="light" onClick={onHandleEditClick}>
                        Edit
                        </Button>
                    </div>

                    <div>
                        <Button outline size="sm" color="danger" onClick={onHandleRemoveClick}>
                        Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;
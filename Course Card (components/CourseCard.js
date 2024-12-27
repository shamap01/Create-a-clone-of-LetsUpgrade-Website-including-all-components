import React from 'react';
import './CourseCard.scss';

const CourseCard = ({ title, description, image }) => {
    return (
        <div className="course-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default CourseCard;

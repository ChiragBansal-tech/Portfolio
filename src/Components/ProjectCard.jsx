import React, { useState, useEffect } from "react";

const Card = ({ ProjectName, ProjectDescription, images, slideDirection }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        const imageChangeInterval = setInterval(() => {
            setIsSliding(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsSliding(false);
            }, 500); // Duration of slide-out animation
        }, 2500); // Interval for image switch

        return () => clearInterval(imageChangeInterval);
    }, [images.length]);

    return (
        <div>
            <div
                className={`aspect-video rounded-lg my-3 overflow-hidden transition-transform duration-500 ease-in-out ${
                    isSliding
                        ? slideDirection === 'top-to-bottom'
                            ? 'transform -translate-y-full opacity-0'
                            : 'transform translate-y-full opacity-0'
                        : 'transform translate-y-0 opacity-100'
                }`}
                style={{ transitionProperty: 'transform, opacity' }}
            >
                <img
                    src={images[currentImageIndex]}
                    alt={`${ProjectName} image`}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-orange1 text-base text-left">{ProjectName}</p>
            <p className="text-white text-md text-left">{ProjectDescription}</p>
        </div>
    );
};

export default Card;

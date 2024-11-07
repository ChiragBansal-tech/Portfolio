import React, { useEffect, useRef } from 'react';
import Card from '../Components/ProjectCard';

const Projects = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let scrollPosition = 0;

        const scrollInterval = setInterval(() => {
            scrollPosition += 2;
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollPosition;
                if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
                    scrollPosition = 0;
                }
            }
        }, 50);
        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className="text-center overflow-hidden">
            <h1 className="text-[50px]">My <span className='text-orange1'>Projects</span></h1>
            <p className="text-lg mt-2">I have worked on various front-end projects, here are some of them</p>
            <div
                className="grid lg:grid-cols-2 gap-10 mt-7 overflow-y-auto"
                ref={scrollContainerRef}
                style={{ scrollbarWidth: 'none' }}
            >
                <div>
                    <Card
                        ProjectName="NorthPole"
                        ProjectDescription="Online Bag Store"
                        images={[
                            "/NP-1.JPG",
                            "/NP-2.JPG",
                            "/NP-3.JPG",
                            "/NP-4.JPG",
                            "/NP-5.JPG",
                            "/NP-6.JPG",
                        ]}
                        slideDirection="top-to-bottom"
                    />
                </div>
                <div>
                    <Card
                        ProjectName="Cleanic"
                        ProjectDescription="Cleaning Service Provider"
                        images={[
                            "/CL-1.JPG",
                            "/CL-2.JPG",
                            "/CL-3.JPG",
                            "/CL-4.JPG",
                            "/CL-5.JPG",
                            "/CL-6.JPG",
                            "/CL-7.JPG",
                            "/CL-8.JPG",
                            "/CL-9.JPG",
                        ]}
                        slideDirection="top-to-bottom "
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;

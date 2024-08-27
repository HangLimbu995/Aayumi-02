import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ project, index }) => {
    const [rotateSide, setRotateSide] = useState(2);

    useEffect(() => {
        if (index % 2 === 0) {
            setRotateSide(index); // Rotate clockwise
        } else {
            setRotateSide(-index); // Rotate anticlockwise
        }
    }, [index]);

 
    useEffect(() => {
        gsap.to(`.service-img-${index}`, {
            rotateZ: `${rotateSide}deg`,
            scrollTrigger: {
                trigger: `.service-img-${index}`,
                start: 'top 70%',
                end: 'top 30%',
                scrub: true,
            }
        });
    }, [rotateSide, index]);

    return (
        <div className="service-card w-full h-full sticky top-5">
            <div className="w-full p-2">
                <div
                    className={`service-img-${index} relative w-full h-[50vh] rounded-xl bg-cover bg-center`}
                    style={{
                        backgroundImage: `url(${project.img})`
                    }}
                >
                    {/* Add an overlay or hover effect */}
                    <div
                        className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"
                        style={{
                            backgroundImage: `url(${project.hoverImg})`
                        }}
                    ></div>
                </div>
                <div className="flex flex-col gap-3 mt-3">
                    <h3 className="font-bold tracking-tight text-[20px]">{project.title}</h3>
                    <div className="flex justify-between text-[16px] font-bold px-2 capitalize">
                        <small>{project.category}</small>
                        <small>{project.location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

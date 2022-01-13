import React from 'react'
import Particles from "react-tsparticles";

function ParticleShape() {

    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className='w-full h-20 -z-10'
                options={{
                    style: { width: '100vw', position: 'relative', height: '100vh' },
                    background: {
                        color: {
                            value: "#ef4444",
                        },
                    },
                    fpsLimit: 150,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 430,
                                duration: 3,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 5,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#fff",
                        },
                        links: {
                            color: "#fff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    )
}

export default ParticleShape

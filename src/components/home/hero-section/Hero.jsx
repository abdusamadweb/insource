import './Hero.scss'
import React, {useState} from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import MyModal from "../../UI/modal/MyModal";

const Hero = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='hero'>
            {modalActive && <MyModal setModalActive={setModalActive} />}
            <div className="hero-bg bg"/>
            <Particles
                id="tsparticles"
                init={particlesInit}
                params={{
                    "fullScreen": {
                        "enable": false,
                        "zIndex": -1,
                    },
                    "particles": {
                        "number": {
                            "value": 70,
                            "density": {
                                "enable": false,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 50,
                                "height": 50
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 0.5,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3.5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 10,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1.3,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "config_demo": {
                        "hide_card": false,
                        "background_color": "#b61924",
                        "background_image": "",
                        "background_position": "50% 50%",
                        "background_repeat": "no-repeat",
                        "background_size": "cover"
                    }
                }}
            />
            <div className="hero__inner">
                <div className="hero__titles">
                    <h2 className="hero__title">Trust the IT professionals</h2>
                    <p className="hero__desc">We offer you Professional IT services for your business!</p>
                </div>
                {/*<button className="hero__btn btn btn-green" onClick={() => setModalActive(true)}>Try for free</button>*/}
            </div>
        </div>
    );
};

export default Hero;

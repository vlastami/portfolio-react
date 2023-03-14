import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"
import "../index.css"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import windows from "../assets/skills/windows.svg"
import cisco from "../assets/skills/cisco.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import bootstrap from "../assets/skills/bootstrap.svg"


export default function Skills() {



    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
      };

    return (
        <div id="skills" className="mt-40 mb-40 text-gray">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-300">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <SkillCard name="javascript" img={javascript} />
                    <SkillCard name="react" img={reactIcon} />
                    <SkillCard name="tailwind" img={tailwind} />
                    <SkillCard name="python" img={python} />
                    <SkillCard name="docker" img={docker} />
                    <SkillCard name="git" img={git} />
                    <SkillCard name="bootstrap" img={bootstrap} />
                </Slider>
            </div>

        </div>
    )
}
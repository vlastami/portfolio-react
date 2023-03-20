import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"
import "../index.css"
import javascript from "../assets/skills/javascript.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
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
        <div id="skills" className="mt-40 mb-40 text-light-500">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>
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
            {/*<h2>Courses</h2>
            <p>Here are courses that I took at the university</p>
            <ul>
                <li>Advanced Statistical Methods</li>
                <li>Algorithms and Programming I</li>
                <li>Algorithms and Programming II</li>
                <li>CCNA 1: Introduction to Networks</li>
                <li>Company´s Economy</li>
                <li>Computer Signal Processing</li>
                <li>Corporate Data Analysis and Visual. I</li>
                <li>Corporate Data Analysis and Visual. II</li>
                <li>Enterprise Information Systems</li>
                <li>Fundamentals of CN and Protocols</li>
                <li>Fundamentals of Comp. Graphics and Mult.</li>
                <li>Fundamentals of Cybersecurity</li>
                <li>Fundamentals of Data Processing</li>
                <li>Fundamentals of Economics</li>
                <li>GUI Programming</li>
                <li>Internet Programming</li>
                <li>Introduction to Machine Learning</li>
                <li>Introduction to Relational Databases</li>
                <li>Introduction to Vue.js</li>
                <li>Introduction to web technologies A</li>
                <li>Mathematical Software</li>
                <li>NoSQL Database Systems</li>
                <li>Numerical Methods</li>
                <li>Object-Oriented Design Patterns</li>
                <li>OLAP and Data Mining</li>
                <li>Operating Systems</li>
                <li>Open Data</li>
                <li>Optimal Decision Making</li>
                <li>Probability and Statistics</li>
                <li>Programming for Mobile Platforms</li>
                <li>Project Management</li>
                <li>Relational Database Systems</li>
                <li>Software Engineering</li>
                <li>Special Programming Languages</li>
                <li>Theoret. Fundamentals of Informatics II</li>
                <li>Time Series</li>
            </ul>*/}

        </div>
    )
}
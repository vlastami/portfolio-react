import React from 'react';
import littlePrince from "../assets/images/little-prince.png"
import dictionary from "../assets/images/dictionary.png"
import snake from "../assets/images/snake.png"
import weatherReact from "../assets/images/weather-react.png"
import weatherApp from "../assets/images/weather.png"
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
      <div id="projects" className="mt-4 text-white">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="font-light text-gray-400">
          Here are some of my projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-5">
          <ProjectCard
            name="Weather App"
            img={weatherApp}
            desc="Built using HTML, an active API, advanced CSS, and React"
            url="https://confident-bhaskara-415747.netlify.app/"
          />
          <ProjectCard
            name="The Little Prince (Little) Project"
            img={littlePrince}
            desc="Built with HTML, CSS, and JavaScript"
            url="https://tender-joliot-120515.netlify.app/"
          />
          <ProjectCard
            name="React Dictionary"
            img={dictionary}
            desc="Built using HTML, an active API, advanced CSS, and React"
            url="https://pedantic-morse-9b52d4.netlify.app/"
          />
        </div>
      </div>
    );
  }
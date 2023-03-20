import React from 'react';
import littlePrince from "../assets/images/little-prince.png"
import dictionary from "../assets/images/dictionary.png"
import github from "../assets/images/github.png"
import moviedb from "../assets/images/moviedb.png"
import pokemon from "../assets/images/pokemon.png"
import edubo from "../assets/images/edubo.png"
import bookshelf from "../assets/images/bookshelf.png"

import weatherReact from "../assets/images/weather-react.png"
import weatherApp from "../assets/images/weather.png"
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
      <div id="projects" className="mt-4 mb-40 text-light-500 justify-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="font-light text-gray-400">
          Here are some of my frontend projects that demonstrate my skills (HTML, CSS, Bootstrap, Tailwind, JavaScript, React, TypeScript, work with APIs and databases)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">

          <ProjectCard
            name="React Weather App"
            img={weatherReact}
            desc="Built using HTML, an active API, advanced CSS, and React"
            url="https://confident-bhaskara-415747.netlify.app/"
          />
          <ProjectCard
            name="React Dictionary"
            img={dictionary}
            desc="Built using HTML, an active API, advanced CSS, and React"
            url="https://pedantic-morse-9b52d4.netlify.app/"
          />

            <ProjectCard
                name="React Movie Database"
                img={moviedb}
                desc="React, Bootstrap, MongoDB - written as a tutorial for ITnetwork"
                url="https://github.com/vlastami/MovieDatabaseApp"
            />
            <ProjectCard
                name="React Pokemon API"
                img={pokemon}
                desc="React, API - written as a tutorial for ITnetwork"
                url="https://hilarious-praline-a9eb3f.netlify.app/"
            />
            <ProjectCard
                name="EDUBO Educational App"
                img={edubo}
                desc="Development in progress, I work on frontend (TypeScript/React) and testing (Cypress)"
            />
            <ProjectCard
                name="JavaScript Weather App"
                img={weatherApp}
                desc="This simple app was built using HTML, advanced CSS ans JavaScript. I used the OpenWeatherMap API to fetch the weather data. You can check out the current weather info and the forecast for the next five days. You can either search the weather via your current location or by using the search engine."
                url="https://zealous-almeida-33f92d.netlify.app/"
            />
            <ProjectCard
                name="The Little Prince (Little) Project"
                img={littlePrince}
                desc="Built with HTML, CSS, and JavaScript"
                url="https://tender-joliot-120515.netlify.app/"
            />
            <ProjectCard
                name="The Bookshelf App"
                img={bookshelf}
                desc="Built with Flask and MongoDB"
                url="https://github.com/vlastami/bookshelf-app"
            />
            <ProjectCard
                name="Other Projects in Python"
                img={github}
                desc="At the university, we mostly work with Python, so I spend a lot of time with various Python libraries such as sqlalchemy, pandas, numpy, flask, dash, pygame or pymongo"
                url="https://github.com/vlastami?tab=repositories"
            />
        </div>
      </div>
    );
  }
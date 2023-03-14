import { useState } from "react";

import profile from "../assets/profile-pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-2 items-center justify-center text-black relative"
      >
        <div className="flex md:p-4 justify-center items-center">
          <div className="md:w-2/6">
            <img
              data-aos="flip-right"
              data-aos-duration="1500"
              data-aos-offset="200"
              src={profile}
              height="300px"
              alt="profile"
              onLoad={() => setLoaded(false)}
            />
          </div>
          <div
            className="md:w-4/6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            <div className="flex flex-col w-100 mt-8">
              <h1 className="text-xl text-gray-400">Ahoj! I'm</h1>
              <h1 className="text-2xl text-50 font-bold">Vlasta Michalcová</h1>
              <p class="text-xl font-bold text-light-500">
                Future Web/Software Developer
              </p>
              <p className="text-xl font-light text-gray-900 ">
                I discovered my passion for programming through my love for
                linguistics. I enjoy inventing and seeking solutions to a
                diverse range of problems, and have found that my perfectionism
                and perseverance can be put to good use in this field. For me,
                programming strikes the perfect balance between creativity and
                methodical thinking.
              </p>
            </div>
            <ul className="flex mt-2 gap-4 items-center">
              <li>
                <a
                  href="https://github.com/vlastami"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon size="2xl" icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/vl__mi"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon size="2xl" icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/vlastami"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

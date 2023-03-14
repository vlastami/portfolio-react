export default function ProjectCard(props) {
    return (
      <a href={props.url}>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="100"
          className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4 shadow-md"
        >
          <img
            src={props.img}
            className="w-full h-70 mx-auto object-cover rounded"
            alt={props.name}
          ></img>
          <div className="mt-2">
            <h1 className="font-bold md:text-xl">{props.name}</h1>
            <p className="font-light text-gray-400">{props.desc}</p>
          </div>
          <div className="text-center mt-4 mb-5">
            <a href={props.url} className="btn-branding-outline" target="_blank">
              Launch Project
            </a>
          </div>
        </div>
      </a>
    );
  }

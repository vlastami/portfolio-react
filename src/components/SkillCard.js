export default function SkillCard(props){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-11/12 text-center justify-center bg-dark-200 rounded-md flex flex-col ">
            <img src={props.img} className="w-20 h-20 mx-auto" alt={props.name}></img>

        </div>
    )
}

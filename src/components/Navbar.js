import resume from "../assets/resume_michalcova.pdf"

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-light-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
            <li className="p-4"><a href="#projects" className="hover:underline">Projects</a></li>
            <li className="p-4"><a href="#certificates" className="hover:underline">Certfications</a></li>
            </ul>
            <a href={resume} rel="noreferrer" target="_blank" className="text-black bg-light-600 rounded-full px-4 py-1 border border-white border border-4">Resume</a>
        </div>
    </div>
    )
}

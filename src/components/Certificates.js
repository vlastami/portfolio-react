import CertCard from "./CertCard.js"

import shecodesReact from "../assets/certs/shecodes-react.png"
import shecodesResponsive from "../assets/certs/shecodes-responsive.png"
import shecodesWeb from "../assets/certs/shecodes-wen.png"
import pandas from "../assets/certs/pandas.pdf"


export default function Certificates(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center mt-4 gap-5">
                <CertCard name="Bootcamp Btech Academy Cloud Engineer" img={shecodesReact} issued="Adinusa" date="Jul 2022" />
                <CertCard name="Mikrotik Certfied Network Associate" img={shecodesResponsive} issued="Mikrotik" date="Jun 2022" />
                <CertCard name="Cloud Practitioner Essentials" img={pandas} issued="Dicoding Indonesia" date="Feb 2022" />
                <CertCard name="Dasar Pemprograman Javascript" img={shecodesWeb} issued="Dicodig Indonesia" date="Mei 2021" />
            </div>
        </div>
    )
}

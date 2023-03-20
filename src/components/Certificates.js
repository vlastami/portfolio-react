import CertCard from "./CertCard.js"

import shecodesReact from "../assets/certs/shecodes-react.png"
import shecodesResponsive from "../assets/certs/shecodes-responsive.png"
import shecodesWeb from "../assets/certs/shecodes-wen.png"
import pandas from "../assets/certs/pandas.png"
import effpython from "../assets/certs/effpython.png"
import datatypes from "../assets/certs/datatypes.png"
import elements from "../assets/certs/certificate-elements-of-ai-cs.png"
import ethics from "../assets/certs/certificate-ethics-of-ai.png"
import cisco from "../assets/certs/Vlasta-Rencova-2021-CCNA2-v7-certificate-1.png"

export default function Certificates(){
    return (
        <div id="certificates" className="mt-4 text-light-500">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my certifications</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="React Development" img={shecodesReact} issued="SheCodes" date="2021" />
                <CertCard name="Responsive Web Development" img={shecodesResponsive} issued="SheCodes" date="2021" />
                <CertCard name="Frontend Development" img={shecodesWeb} issued="SheCodes" date="2021" />
                <CertCard name="Data Manipulation with pandas" img={pandas} issued="DataCamp" date="2022" />
                <CertCard name="Writing Efficient Python Code" img={effpython} issued="DataCamp" date="2022" />
                <CertCard name="Data Types for Data Science in Python" img={datatypes} issued="DataCamp" date="2022" />
                <CertCard name="Elements of AI" img={elements} issued="University of Helsinki" date="2022" />
                <CertCard name="Ethics of AI" img={ethics} issued="University of Helsinki" date="2022" />
                <CertCard name="Switching, Routing, and Wireless Essentials" img={cisco} issued="Cisco Networking Academy" date="2022" />
            </div>
        </div>
    )
}

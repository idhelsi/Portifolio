import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { Social } from "./social"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

type Props = {
    name: string
    prof: string
    description: string
}

export const Hero = ({ name, prof, description }: Props) => {
    return (
        <main className=" mt-48 flex items-center px-2 h-[460px] bg-[url(/images/landm.png)] md:h-[500px] md:m-0 md:px-0 md:bg-[url(/images/land.jpg)] md:rounded-lg lg:bg-[url(/images/landll.jpg)] bg-cover bg-center">
            <div className="max-w-6xl mx-auto -mt-[600px] p-3 rounded-md md:shadow-lg md:p-10 md:m-0 md:ml-20 lg:ml-52 md:bg-[#55423d] ">
                <h2 className="text-2xl font-bold mb-2 text-[#fff3ec]">
                    Olá, me chamo  
                    <span className="text-red-200">
                        {name}
                    </span>
                </h2>
                <h3 className="text-1xl mb-3 font-bold text-[#fff3ec]">
                    Sobre mim
                </h3>
                <p className="mb-4 text-[#fff3ec] text-sm">
                    {prof}
                    <br />
                    {description}
                </p>
                <div className="flex space-x-4">
                    <Social 
                        url="https://www.instagram.com/idhelsi/"
                        icon={faInstagram}
                    />

                    <Social 
                        url="in/douglas-peltier-a982ba28b"
                        icon={faLinkedin}
                    />

                    <Social 
                        url="https://github.com/idhelsi"
                        icon={faGithub}
                    />
                </div>
            </div>

        </main>
    )
}
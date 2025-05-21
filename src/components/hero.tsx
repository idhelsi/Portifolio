import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Social } from "./ui/social"

type Props = {
    name: string
    prof: string
    description: string
}

export const Hero = ({ name, prof, description }: Props) => {
    return (
        <main className=" mt-48 flex items-center px-2 h-[460px] bg-[url(/imagens/landm.png)] md:h-[500px] md:m-0 md:px-0 md:bg-[url(/imagens/land.jpg)]  lg:bg-[url(/imagens/landll.jpg)] bg-cover bg-center">
            <div className=" max-w-6xl mx-auto -mt-[600px] p-3 rounded-3xl md:shadow-lg md:p-10 md:m-0 md:ml-20 lg:ml-44 md:bg-[#25262a] ">
                <h2 className="text-2xl font-bold mb-2 text-[#798189]">
                    Olá, me chamo  
                    <span className="text-[#dfdfe4]">
                        {name}
                    </span>
                </h2>
                <h3 className="text-1xl mb-3 font-bold text-[#dfdfe4]">
                    Sobre mim
                </h3>
                <p className="mb-4 text-[#798189] text-sm">
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
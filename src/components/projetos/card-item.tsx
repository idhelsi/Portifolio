"use client"
 
import { api } from "@/utils/api"
import { useState, useEffect } from "react"

type Projeto = {
  id: number
  name: string
  description: string
  photo: string
  html_url: string
  language: string
  owner: {
    avatar_url: string
  }
}

export const CardItem = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([])

  const loadProjetos = async () => {
    try {
      const projetos = await api.getProjetos()
      setProjetos(projetos)
    } catch ( erro ) {
      console.log("Erro ao buscar os Projetos")
    }
  }

  useEffect(() => {
    loadProjetos();
  }, []);

  return (
    <>
      {projetos.map((item) => (
        <a key={item.id} href={item.html_url} target="_blank" className=" bg-[#55423d] p-4 rounded-lg shadow-lg overflow-hidden">
          <div  className=" text-gray-200">
            <img
              alt={item.name}
              className="mb-4 rounded-lg"
              height="200"
              src={`https://opengraph.githubassets.com/1/idhelsi/${item.name}`}
              width="300"
            />
            <h4 className="text-xl font-bold mb-2 text-titulo">{item.name}</h4>
            <div className="flex flex-wrap gap-2">
              <span className={`bg-[#271c19] text-white px-2 py-1 rounded`}>{item.language}</span>
            </div>

            <p className="mt-2 h-20 text-[#fff3ec] truncate">{item.description}</p>
          </div>
        </a>
      ))}
    </>

        // <div className="relative bg-[#55423d] p-4 rounded-lg shadow-lg text-gray-200">
        //   <img
        //     alt={''}
        //     className="mb-4 rounded-lg"
        //     height="200"
        //     src={''}
        //     width="300"
        //   />
        //   <h4 className="text-xl font-bold mb-2 text-titulo"></h4>
        //   <div className="flex flex-wrap gap-2">
        //     <span className={`${''} text-white px-2 py-1 rounded`}>...</span>
        //   </div>

        //   <p className="mt-2 text-subtitulo">...</p>
        //   <div className="mt-4 absolute bottom-1 right-1  ">
        //     <a href="${projeto.link}" target="_blank" className="">
              
        //     </a>
        //   </div>
        // </div>
  );
};

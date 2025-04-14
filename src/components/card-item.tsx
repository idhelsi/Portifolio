"use client"
 
import { linguagemCores } from "@/data/linguagems"
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
    } catch (erro) {
      console.error("Erro ao buscar os Projetos:", erro)
    }
  }

  useEffect(() => {
    loadProjetos();
  }, []);

  return (
    <>
      {projetos.map((item) => (
        <a key={item.id} href={item.html_url} target="_blank" rel="noopener noreferrer" className="bg-[#17161b] p-4 rounded-lg shadow-lg overflow-hidden">
          <div className="text-[#dfdfe4]">
            <img
              alt={`Imagem do projeto ${item.name}`}
              className="mb-4 rounded-lg"
              height="200"
              src={`https://opengraph.githubassets.com/1/idhelsi/${item.name}`}
              width="300"
            />
            <h4 className="text-xl font-bold mb-2 text-titulo">{item.name}</h4>
            <div className="flex flex-wrap gap-2">
              <span className={`${item.language ? linguagemCores[item.language.toLowerCase()] : 'bg-gray-500'} text-white px-2 py-1 rounded`}>
                {item.language || 'Desconhecida'}
              </span>
            </div>

            <p className="mt-2 h-20 text-[#798189]">{item.description}</p>
          </div>
        </a>
      ))}
    </>
  );
};

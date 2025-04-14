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

// Mapeamento de imagens para projetos
const projetoImagens: { [key: string]: string[] } = {
  "awax-clone": ["/projimg/awax-1.png", "/projimg/awax-2.png", "/projimg/awax-3.png", "/projimg/awax-4.png", "/projimg/awax-5.png", "/projimg/awax-6.png", "/projimg/awax-7.png"],
  "briefing-marca": ["/projimg/bmar-1.png", "/projimg/bmar-2.png"],
  "canvas-checkbox": ["/projimg/canvas-1.png"],
  "clone-twitter-frontend": ["/projimg/tweet-1.png", "/projimg/tweet-2.png", "/projimg/tweet-3.png", "/projimg/tweet-4.png"],
  "e-commerce": ["/projimg/ecome-1.png", "/projimg/ecome-2.png"],
  "expense-tracker": ["/projimg/expense-1.png"],
  "faceda": ["/projimg/fd-1.png", "/projimg/fd-2.png", "/projimg/fd-3.png", "/projimg/fd-4.png"],
  "flappy-bird": ["/projimg/flap-1.png", "/projimg/flap-2.png"],
  "gallery": ["/projimg/gallery-1.png"],
  "irmao-do-jorel": ["/projimg/jorel-1.png"],
  "jogo-da-velha": ["/projimg/jvelha-1.png", "/projimg/jvelha-2.png"],
  "landing-page": ["/projimg/bur-1.png", "/projimg/bur-2.png"],
  "loja-giga-tech": ["/projimg/gt-1.png", "/projimg/gt-2.png"],
  "medicenter-clone": ["/projimg/medc-1.png", "/projimg/medc-2.png"],
  "pnamoro": ["/projimg/pn-1.png", "/projimg/pn-2.png", "/projimg/pn-3.png"],
  "starbuck": ["/projimg/starb-1.png", "/projimg/starb-2.png", "/projimg/starb-3.png", "/projimg/starb-4.png", "/projimg/starb-5.png", "/projimg/starb-6.png"],
  "temperatura-via-cep": ["/projimg/lt-1.png", "/projimg/lt-2.png"],
  
  // Adicione mais projetos e suas imagens aqui
};

const linguagemCores: { [key: string]: string } = {
  javascript: "bg-yellow-500",
  typescript: "bg-blue-600",
  php: "bg-purple-600",
  html: "bg-red-500",
  css: "bg-blue-500",
  tailwind: "bg-cyan-500",
  "c#": "bg-green-600",
  react: "bg-blue-400",
  next: "bg-black",
  node: "bg-green-500",
  laravel: "bg-red-600",
  python: "bg-blue-800",
};

export const CardItem = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [imagemAtual, setImagemAtual] = useState<{ [key: string]: number }>({});

  const loadProjetos = async () => {
    try {
      const projetos = await api.getProjetos();
      setProjetos(projetos);
      const inicial = projetos.reduce((acc: { [key: string]: number }, item: Projeto) => {
        acc[item.name.toLowerCase()] = 0;
        return acc;
      }, {});
      setImagemAtual(inicial);
    } catch (erro) {
      console.error("Erro ao buscar os Projetos:", erro);
    }
  };

  useEffect(() => {
    loadProjetos();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagemAtual((prev) => {
        const novoEstado = { ...prev };
        projetos.forEach((item) => {
          const imagens = projetoImagens[item.name.toLowerCase()];
          if (imagens && imagens.length > 1) {
            novoEstado[item.name.toLowerCase()] = (prev[item.name.toLowerCase()] + 1) % imagens.length;
          }
        });
        return novoEstado;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [projetos]);

  return (
    <>
      {projetos.map((item) => {
        const imagens = projetoImagens[item.name.toLowerCase()];
        const imagemParaMostrar = imagens && imagens.length > 0 
          ? imagens[imagemAtual[item.name.toLowerCase()]] 
          : `https://opengraph.githubassets.com/1/idhelsi/${item.name}`;
        
        return (
          <a key={item.id} href={item.html_url} target="_blank" rel="noopener noreferrer" className="bg-[#17161b] p-3 rounded-lg shadow-lg overflow-hidden">
            <div className="text-[#dfdfe4] w-full">
              <img
                alt={`Imagem do projeto ${item.name}`}
                className="mb-4 rounded-lg w-full"
                height="200"
                src={imagemParaMostrar}
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
        );
      })}
    </>
  );
};



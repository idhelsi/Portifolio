"use client";

import { useState, useEffect } from "react";
import { projetoImagens } from "@/data/projetosimg";
import { api } from "@/utils/api";
import { Pacman } from "@/ui/pacman";

type Projeto = {
  id: number;
  name: string;
  description: string;
  photo: string;
  html_url: string;
  language: string;
  owner: {
    avatar_url: string;
  };
};

// Linguagens e cores
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

// Repositórios fixados (em minúsculo)
export const fixados = ["clone-twitter-frontend", "briefing-marca", "starbuck", "e-commerce"];

export const FixedCardItem = () => {
  const [loading, setLoading] = useState(true);
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [imagemAtual, setImagemAtual] = useState<{ [key: string]: number }>({});

  const loadProjetos = async () => {
    try {
      const todos = await api.getProjetosFixados();
      setProjetos(todos);

      const inicial = todos.reduce((acc: { [key: string]: number }, item: Projeto) => {
        acc[item.name.toLowerCase()] = 0;
        return acc;
      }, {});

      setImagemAtual(inicial);
    } catch (erro) {
      console.error("Erro ao buscar os Projetos Fixados:", erro);
      setProjetos([]);
    } finally {
      setLoading(false);
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
          const nome = item.name.toLowerCase();
          const imagens = projetoImagens[nome];
          if (imagens && imagens.length > 1) {
            novoEstado[nome] = (prev[nome] + 1) % imagens.length;
          }
        });
        return novoEstado;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [projetos]);


  return (
    <>
      {loading &&  <div className="flex justify-center md:-mr-96 lg:-mr-[800px]"><Pacman fill="#ffcc00" size={100}/></div>}

      {projetos.map((item) => {
        const nome = item.name.toLowerCase();
        const imagens = projetoImagens[nome];
        const imagemParaMostrar =
          imagens && imagens.length > 0
            ? imagens[imagemAtual[nome]]
            : `https://opengraph.githubassets.com/1/idhelsi/${item.name}`;

        return (
          <a
            key={item.id}
            href={item.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#17161b] p-3 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="text-[#dfdfe4] w-full">
              <img
                alt={`Imagem do projeto ${item.name}`}
                className="mb-4 rounded-lg w-full h-44 object-cover"
                height="200"
                src={imagemParaMostrar}
                width="300"
              />
              <h4 className="text-xl font-bold mb-2 text-titulo">{item.name}</h4>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`${
                    item.language
                      ? linguagemCores[item.language.toLowerCase()] || "bg-gray-500"
                      : "bg-gray-500"
                  } text-white px-2 py-1 rounded`}
                >
                  {item.language || "Desconhecida"}
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

import { Hero } from "@/components/card/hero"
import { CardItem } from "@/components/projetos/card-item"

const Page = () => {
  return (
    <div className="w-full overflow-hidden">
        <Hero 
          name=" Douglas"
          prof="Software engineer"
          description="Trabalho: JavaScript, TypeScript, PHP, HTML, CSS, Tailwindcss"
        />
        <section className="max-w-6xl mx-auto  mt-2 md:-mt-9">
            <h3 className="ml-5 text-2xl text-red-100 font-bold mb-4">Projetos</h3>
            <div className="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CardItem />
            </div>
        </section>
    </div>
  )
}

export default Page
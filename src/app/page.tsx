import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CardItem } from "@/components/card-item"


const Page = () => {
  return (
    <div className="w-full max-w-6xl min-h-screen mx-auto overflow-hidden">
        <Hero 
          name=" Douglas"
          prof="Software engineer"
          description="Trabalho com JavaScript, TypeScript, HTML, CSS, Tailwindcss, React, Next js, PHP"
        />
        <section className="mt-2 md:-mt-10">
          <h3 className="ml-5 text-2xl text-[#dfdfe4] font-bold mb-4">Projetos</h3>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 lg:px-0">
            <CardItem />
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default Page
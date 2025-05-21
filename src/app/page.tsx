import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CardItem } from "@/components/card-item"
import { FixedCardItem } from "@/components/fixed-card-item"
import { Section } from "@/components/section"


const Page = () => {
  return (
    <div className="w-full  min-h-screen  overflow-hidden">
        <Hero 
          name=" Douglas"
          prof="Desenvolvedor de sites fullStack"
          description="Trabalho com JavaScript, TypeScript, HTML, CSS, Tailwindcss, React, Next js, PHP"
        />

        <Section />
        
        <Footer />
    </div>
  )
}

export default Page
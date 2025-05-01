import { Footer } from "./_components/footer"
import { Hero } from "./_components/hero"
import { ProductCard } from "./_components/product-Card"
import { ProductSection } from "./_components/product-section"


const MarketingPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <Hero/>
            <ProductCard/>
            <ProductSection/>
            <Footer/>
        </div>
    )
}

export default MarketingPage
import { Footer } from "@/app/(marketing)/_components/footer"
import { CheckoutContain } from "../_components/checkout-contain"
import { NavBarProduct } from "../_components/nav-bar"


const CheckoutPage = () => {
    return (
        <div>
            <NavBarProduct/>
            <CheckoutContain/>
            <Footer/>
        </div>
    )
}

export default CheckoutPage
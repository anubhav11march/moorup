
import Navigation from "./Navigation"
import CustomerReviews from "./CustomerReviews"
import Banner from "./Banner"
import ChooseCountry from "./ChooseCountry"
import Introduction from "./Introduction"
import "../css/banner.css"
import "../css/customerReview.css"
import "../css/introduction.css"
import "../css/chooseCountry.css"
function Home()
{
    return (
        <div>
            
            <Banner/>
            <CustomerReviews/>
            <ChooseCountry/>
            <Introduction/>
         
        </div>
    )
}

export default Home
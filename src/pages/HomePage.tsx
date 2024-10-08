import landingImage from "../assets/landing.jpg"
import {  useNavigate } from "react-router-dom"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const HomePage = () => {

    const navigate = useNavigate()

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`,
        })
    }

    const handleButtonClick = () => {
        navigate({
            pathname: "manage-restaurant",
        })
    }
  return (
    <div className="flex flex-col gap-12">
        <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 ">
            <h1 className="text-5xl font-bold tracking-tight text-red-500">
                Order Food from your Fingertips!
            </h1>
            <span className="text-xl">Food is just a click away!</span>
            <SearchBar placeHolder="Search by City or Town" onSubmit={handleSearchSubmit}/>
            <p> Note: Please enter 'Karimnagar' in the search bar when looking for restaurants, as I have created a couple of dummy restaurants for testing purposes.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 ">
            <img src={landingImage}  alt="phones" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Put your Restaurant Online and Earn !
                </span>
                <span className="">
                    You can add your restaurant and let customers order food online !
                </span>
                <Button onClick={handleButtonClick}>Manage My restaurant<ArrowRight size={15} className="ms-2" /></Button>
            </div>
            
        </div>
    </div>
  )
}

export default HomePage
import React, {useState} from "react"
import Heading from "./Heading"
import "./home.css"



function Home(){
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(''); 

  const handleCityChange = (event) => {
    // Update the state variable when the user changes the selection 
    setSelectedCity(event.target.value);
  };

  const handleRoomTypeChange = (event) => {
    // Update the state variable when the user changes the selection 
    setSelectedRoomType(event.target.value);
  };
  const handlePriceChange = (event) => {
    // Update the state variable when the user changes the selection 
    setSelectedPrice(event.target.value);
  };

    return (
        <>
<section className='home'>
          <div className='container'>
            <Heading title='Search For Your Next Hotel Room ' subtitle='Find new & featured hotels located in your local city.' />
  
            <form className='flex'>
              <div className='box'>
                <span>City</span>
                <input type='text' placeholder='Location' value={selectedCity} onChange={handleCityChange}/>
              </div>
              <div className='box'>
                <span>Room Type</span>
                <input type='text' placeholder='Room Type' 
                value={selectedRoomType} onChange={handleRoomTypeChange}/>
                      </div>
              <div className='box'>
                <span>Price Range</span>
                <input type='text' placeholder='Price Range' 
                value={selectedPrice} onChange={handlePriceChange}/>
            </div>
              {/* <div className='box'>
                <h4>Advance Filter</h4>
              </div> */}
              <button className='search-btn'>
                <i className='fa fa-search'></i>
              </button>
            </form>
          </div>
        </section>
      </>
    )
};

export default Home
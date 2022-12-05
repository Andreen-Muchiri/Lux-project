import React from "react"
import Heading from "./Heading"
import "./home.css"



function Home(){
    return (
        <>
<section className='home'>
          <div className='container'>
            <Heading title='Search For Your Next Hotel Room ' subtitle='Find new & featured hotels located in your local city.' />
  
            <form className='flex'>
              <div className='box'>
                <span>City</span>
                <input type='text' placeholder='Location' />
              </div>
              <div className='box'>
                <span>Room Type</span>
                <input type='text' placeholder='Room Type' />
              </div>
              <div className='box'>
                <span>Price Range</span>
                <input type='text' placeholder='Price Range' />
              </div>
              {/* <div className='box'>
                <h4>Advance Filter</h4>
              </div> */}
              <button className='btn1'>
                <i className='fa fa-search'></i>
              </button>
            </form>
          </div>
        </section>
      </>
    )
};

export default Home
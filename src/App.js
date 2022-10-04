import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import img from './olx.png'
import img1 from './olx1.png'
import MopedIcon from '@mui/icons-material/Moped';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import banner from "./img.jpg"
import ad from './img1.jpg'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system'; // Grid version 1
// import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Card from './components/Card';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';
import pic10 from './pic10.jpg';
import pic11 from './pic11.jpg';
import pic12 from './pic12.jpg';
import pic9 from './pic9.jpg';
import pic13 from './pic13.jpg';
import pic14 from './pic14.jpg';
import pic15 from './pic15.svg';
import pic16 from './pic16.svg';
import pic17 from './pic17.svg';
import pic18 from './pic18.jpg';
import pic19 from './pic19.jpg';
import pic20 from './pic20.jpg';
import pic21 from './pic21.jpg';
import pic22 from './pic22.jpg';
// import { useState } from 'react';


// import { render } from '@testing-library/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import React ,{ useEffect, useState } from 'react';

// import {Typography, Card,CardMedia ,CardContent ,Stack } from 'mui/material'
// import Grid from 'mui/material'

// function render(){
//   console.log
// }


function App() {

  const [information,setInformation] = useState([
    {
      src : pic1,
      para : "Single story House in Islamabad",
      heading : "Price : Rs 45000000",
      category : "Houses",
      description :"A Brand New 533 Square Yards house is Available For sale In F-6. "
    },
    {
      src : pic2,
      para : "1, 2 bungalow available in DHA karachi",
      heading : "Price Rs 6500000",
      category : "Houses",
      description: "In Dha Phase 1, 2 kanal fully furnished bungalow. 5 beds with shower bath."
  
    },
    { src : pic3,
    para : "3.5 marla bungalow available in lahore",
    heading : "Price : Rs 85000000",
    category : "Houses",
    description:"Corner 3.5 marla brand new house for sale in R1 Johar town  phase 2"
  ,},
    { src : pic4,
    para : "3 bed dd available in multan",
    heading : "Price : Rs 7000000 ",
    category : "Houses",
    description:"For Rent - Apartment - 3 bedrooms - 2 bathrooms at Wapda town phase 1"
  },
    {
      src : pic5,
      para : "Xiomi Redmi 10",
      heading : "Price : Rs 35,000",
      category : "Mobiles",
      description : '6.5 Inches · 1080 x 2400 Pixels· Corning Gorilla Glass · 90Hz, , sunlight display.'
  
    },
    {
      src : pic6,
      para : "Infinix note 12 ",
      heading : "Price Rs 25,000",
      category : "Mobiles",
      description : '6.7 Inches ,080 x 2400 Pixels (~393 PPI), 128GB Built-in,8GB RAM, microSDXC'
  
    },
    { src : pic7,
    para : "Realme 10",
    heading : "Price : 41,999",
    category : "Mobiles",
    description: 'This is 4 GB RAM / 64 GB internal storage variant of Realme.'
  },
    { src : pic8,
    para : "Honor X8",
    heading : "Price ; Rs 25,000",
    category : "Mobiles",
    description:"Snapdragon 680 4G chipset, 4000 mAh battery, 128 GB storage, 6 GB RAM."
  },
    {
      src : pic9,
      para : "Zircon Rings",
      description : "Wide vareity of rings available in reasonable price",
      heading : "Price : 1000",
      category : "Jewellery"
    },
    {
      src : pic10,
      para : "Earrings",
      heading : "Price Rs 3500",
      category : "Jewellery",
      description: 'Wide range of Hyderabadi Nauratan Earrings'
  
    },
    { src : pic11,
    para : "Necklace",
    heading : "Price : Rs 1000",
    category : "Jewellery",
    description: "Heart style necklace party wear Collection"
    },
  
    { src : pic12,
    para : "Bracelet",
    heading : "Price : 1000",
    description: "Real fine Zircoon necklace available for you ",
    category : "Jewellery"
  },
  
    {
      src : pic18,
      para : "Refrigerator",
      description: "Refrigerator price in Pakistan starting from Rs 22,500.",
      heading : "Price : Rs 22,500",
      category : "Electronic"
    },
    {
      src : pic19,
      para : "Washing Machine",
      description: " Washing Machine prices start from PRs 7,600. Pakistan's most demanding",
      heading : "Price : Rs 7000",
      category : "Electronic"

    },
    { src : pic22,
    para : "LED",
    heading : "Price : Rs 25,000",
    description: 'Buy LED & Plasma TV deals at low prices in Pakistan. New LED & Plasma TV',
    category : "Electronic"


  
  },
    { src : pic21,
    para : "fan",
    description : "Lever Rechargeable and Mist Fan Price. Rs. 3,320 ; Sogo Rechargeable Fan",
    heading : "Price : Rs 3000",
    category : "Electronic"
  },
  ])
  const [allCategory,setAllCategory] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState("")
  const [filterList,setFilterList] = useState([])
  console.log(selectedCategory)

  let categories = () => {
    let li = information.map((x)=> x.category);
    li = [...new Set([...li])];
    setAllCategory([...li])
    
  }
  let searchCategory = (val)=>{
    setSelectedCategory(val)
    console.log(val)
    let filteredList = information.filter((x)=>x.category == val)
    setFilterList([...filteredList])

    

  }
  let searchItem = (val) => {
    setSelectedCategory([])
    let filteredList = information.filter((x)=>{
     if( x.description.toLowerCase().includes(val.toLowerCase())){
      return x
     }
      
    })
    setFilterList([...filteredList])
    // console.log(filteredList);
    // console.log(val);
  }
  

  useEffect(() => {
    categories();
  }, []);


 
  
  return (
    
    
   <div className='hide'>
       <div>
       <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='topDiv'>
             <div className='pt-3'>
             <div className='d-flex'>
            
          <ul value= {selectedCategory}
           >
            {allCategory.map((e,i)=>{
              return <li   className='settingList ' key={i}><button onClick={()=>searchCategory(e)}
               className='btn btn-secondary'>{e}</button></li>
            })
            }
          </ul>
          <input  onChange={(e)=>searchItem(e.target.value)} placeholder='Search item here' className='px-5 ms-5'/>
          
        </div>
              
             </div>

            </div>
          </div>
        </div>
       </div>
        {/* PART 2  */}
        <div className='row'>
          <div className='col-md-12'>
            

        <div className='d-flex justify-content-center'>
        <img className='w-75' src={banner} />
        </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            

        <div className='d-flex justify-content-center mt-3'>
        <img className='w-50' src={ad} />
        </div>
          </div>
        </div>
      <div>
      <div className='mainParent'>
          
          {filterList.map(e=>{
            
            
            return(
              
                <>
                <Card description={e.description} className="pic1" width = "300px" height="300px" src = {e.src}  para= {e.para} heading={e.heading}/>
                </>
              
              
              
            )
            
          })}
          



          </div>
      </div>


       
        <div>
          <div className='mainParent'>
          
          {information.map(e=>{
            
            
            return(
              
                <>
                <Card description={e.description} className="pic1" width = "300px" height="300px" src = {e.src}  para= {e.para} heading={e.heading}/>
                </>
              
              
              
            )
            
          })}
          



          </div>
         
 
<div className='image1'>
          <img src={pic13} />
        </div>
        <div className='footerDiv'>
          <div>
            <img src={pic14}/>
          </div>
          <div>
            <h1>Try the OLX App</h1>
            <p>Buy, sell and find just about anything using</p>
            <p>the app on your mobile.</p>
          </div>
          <div >
            <h3>Get your App Today</h3>
            <div className='app'>
            <img width="100px" height="100px" src={pic15}/>
            <img width="100px" height="100px" src={pic16}/>
            <img width="100px" height="100px" src={pic17}/>
            </div>
          </div>
        </div>
        <div className='footDiv'>
          <div>
            <ul>
              <h4>Popular Categories</h4>
              <p>Flats for rent</p>
              <p>Cars</p>
              <p>Mobile Phone</p>
              <p>Job</p>
            </ul>
          </div>
          <div>
          <ul>
              <h4>Trending Searching</h4>
              <p>Bike</p>
              <p>Watches</p>
              <p>Books</p>
              <p>Dogs</p>
            </ul>
          </div>
          <div>
          <ul>
              <h4>About us</h4>
              <p>About EPMG</p>
              <p>Contact us</p>
              <p>OLX</p>
              <p>About Business</p>
            </ul>
          </div>
          <div>
          <ul>
              <h4>OLX</h4>
              <p>Site Map</p>
              <p>Contact us</p>
              <p>Term of use</p>
              <p>Help</p>
            </ul>
          </div>
          <div>
          <h3>Follow us</h3>
          <div className='icon'>
          <FacebookIcon/>
          <TwitterIcon/>
          <YouTubeIcon/>
          <InstagramIcon/>

          </div>
          
            <div className='app'>
            <img width="100px" height="100px" src={pic15}/>
            <img width="100px" height="100px" src={pic16}/>
            <img width="100px" height="100px" src={pic17}/>
            </div>
          </div>
        </div>
        <div className='foot'>
          <h4>Free Classifieds in Pakistan . © 2006-2022 OLX</h4>
        </div>


        
      </div>
      </div>
    
   </div>
  );
}



export default App;

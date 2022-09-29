import logo from './logo.svg';
import './App.css';
import img from './olx.png'
import img1 from './olx1.png'
import MopedIcon from '@mui/icons-material/Moped';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import banner from "./img.jpg"
import ad from './img1.jpg'
import Grid from '@mui/material/Grid'; // Grid version 1
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
// import { render } from '@testing-library/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

// function render(){
//   console.log
// }

function App() {
  return (
    
      <div>
        <div className='topClass'>
          <div className='part1'>
          <p className='innerClass'><img className="innerClass" src={img} width={"40px"} height={"40px"} />
          <MopedIcon sx={{
           height : "40px",
           width : "40px",
           padding: "20px",

          }} /> 
          <b className='motor'>Motor</b>
          <HomeIcon sx={{
           height : "40px",
           width : "40px",
           padding: "20px",

          }} /> 
          <b className='motor'>Property</b>
          </p>
          </div>
          <div className='part2'>
            <p className='secondline' >
            <img  src={img1} width={"70px"} height={"70px"} />
            <select className='city'>
              <option>Karachi</option>
              <option>Islamabad</option>
              <option>Lahore</option>
              <option>Faisalabad</option>
              <option>Multan</option>
              <option>Hyderabad</option>
              <option>Hyderabad</option>

            </select>
            <input
            
           className='search'/>
            <button className='searchicon'><SearchIcon/></button>
            <button className='login'>LOGIN</button>
            <button className="gin" ><AddIcon className='ok'  /></button>


            </p>
            
            

          </div>
          
          

          
        </div>
        {/* PART 2  */}
        <div className='image'>
          <img src={banner} />
        </div>
        <div className='image1'>
          <img src={ad} />
        </div>
      
        <div>
          
        </div>
        <div>
  <Grid class="mainParent" container spacing={2}>
 <div>
 <Grid >
    <Card width = "300px" height="300px" className="pic1" src={pic4} para= "Samsung watch for Classic " para1="in reasonable price"  heading="24500"/>

    
  </Grid>
 </div>
  <div>
  <Grid>
    
    <Card width = "300px" height="300px"  className="pic1" src={pic1} para= "Furnished home available in lahore " para1="in reasonable price"  heading="450,0000"/>
    
    </Grid>
  </div>
 <div>
 <Grid>
 
 <Card width = "300px" height="300px" className="pic1" src={pic3} para= "Imported Shoes from unisex"  para1="Available in reasonable price" heading="2000"/>
 
   
 </Grid>
 </div>
  <div>
  <Grid>
  <Card width = "300px" height="300px" className="pic1" src={pic2} para= "Now buy 120 yard house in DHA " para1="in reasonable price"  heading="79,5000"/>
    
  </Grid>
  </div>
</Grid>
        </div>
        <Grid class="mainParent" container spacing={2}>
 <div>
 <Grid >
    <Card width = "300px" height="300px" className="pic1" src={pic5} para= "Wide Range of Mobile phones available " para1="in reasonable price" heading="24500"/>

    
  </Grid>
 </div>
  <div>
  <Grid>
    
    <Card width = "300px" height="300px"  className="pic1" src={pic6} para= "Furnished home available in lahore " para1="in reasonable price"  heading="450,0000"/>
    
    </Grid>
  </div>
 <div>
 <Grid>
 
 <Card width = "300px" height="300px" className="pic1" src={pic7} para= "Toyota Corolla Almost Geniune " para1="in reasonable price"  heading="2000000"/>
 
   
 </Grid>
 </div>
  <div>
  <Grid>
  <Card width = "300px" height="300px" className="pic1" src={pic8} para= "Now buy 120 yard house in DHA " para1="in reasonable price"  heading="79,5000"/>
    
  </Grid>
  </div>
</Grid>
        <Grid class="mainParent" container spacing={2}>
 <div>
 <Grid >
    <Card width = "300px" height="300px" className="pic1" src={pic9} para= "Wide Range of Mobile washing machines  " para1="in reasonable price" heading="24500"/>

    
  </Grid>
 </div>
  <div>
  <Grid>
    
    <Card width = "300px" height="300px"  className="pic1" src={pic10} para= "Hyderabadi nauratan earrings " para1="in reasonable price"  heading="450,0000"/>
    
    </Grid>
  </div>
 <div>
 <Grid>
 
 <Card width = "300px" height="300px" className="pic1" src={pic11} para= "Apple Laptop " para1="in reasonable price"  heading="400000"/>
 
   
 </Grid>
 </div>
  <div>
  <Grid>
  <Card width = "300px" height="300px" className="pic1" src={pic12} para= "ladies sandal " para1="in reasonable price"  heading="1650"/>
    
  </Grid>
  </div>
</Grid>
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
    
  );
}


export default App;

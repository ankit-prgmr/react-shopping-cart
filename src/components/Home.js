import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardUI from "./CardUI";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
function Home(){
    return(
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-4'>
            <CardUI imgsrc={img1} id="1" title='Cocooil Body Oil' price="$11.99" />
          </div>
          <div className='col-md-4'>
            <CardUI imgsrc={img2} id="2" title='Maui Moisture' price="$139.99"/>
          </div>
          <div className='col-md-4'>
            <CardUI imgsrc={img3} id="3" title='Barth Body Oil' price="$39.99"/>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-4'>
            <CardUI imgsrc={img4} id="4" title='Facial Spray' price="$34.99"/>
          </div>
          <div className='col-md-4'>
            <CardUI imgsrc={img5} id="5" title='Dose Juice' price="$21.99"/>
          </div>
        </div>
      </div>
    );
}

export default Home;


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="h-top" id="home">
      <div className="top-header">
         <ul className="cl-effect-16 top-nag">
           <li><a href="registration.html" data-hover="Registration">Registration</a></li> 
           <li><a href="about.html" data-hover="About">About</a></li>
           <li><a href="services.html" data-hover="SERVICES">SERVICES</a></li>
           <li><a href="login.html" data-hover="Login">Login</a></li>
           <li><a href="contact.html" data-hover="CONTACT">Contact</a></li>
         </ul>
         <div className="search-box">
             <div className="b-search">
               <form>
                   <input type="text" />
                   <input type="submit"      />
               </form>
             </div>
           </div>

         <div className="clearfix"></div>
       </div>

 <div className="full">
     <div className="col-md-3 top-nav">
            <div className="logo">
           <a href="index.html"><h1>Blogger</h1></a>
         </div>
         <div className="top-menu">
          <span className="menu"> </span>

         <ul className="cl-effect-16">
           <li><a className="active" href="index.html" data-hover="HOME">Home</a></li> 
           <li><a href="about.html" data-hover="About">About</a></li>
           <li><a href="grid.html" data-hover="Grids">Grids</a></li>
           <li><a href="services.html" data-hover="Services">Services</a></li>
           <li><a href="gallery.html" data-hover="Gallery">Gallery</a></li>
           <li><a href="contact.html" data-hover="CONTACT">Contact</a></li>
         </ul>
       
         <ul className="side-icons">
             <li><a className="fb" href="#"></a></li>
             <li><a className="twitt" href="#"></a></li>
             <li><a className="goog" href="#"></a></li>
             <li><a className="drib" href="#"></a></li>
            </ul>
         </div>
     </div>
 <div className="col-md-9 main">
   <div className="banner-section">
      <h3 className="tittle">General <i className="glyphicon glyphicon-picture"></i></h3>
     <div className="banner">
                <div  className="callbacks_container">
         <ul className="rslides" id="slider4">
                <li>
               <img src="images/1.jpg" className="img-responsive" alt="" />

             </li>
             <li>
                <img src="images/2.jpg" className="img-responsive" alt="" />


             </li>
             <li>
              <img src="images/3.jpg" className="img-responsive" alt="" />

             
             </li>
             <li>
              <img src="images/3.jpg" className="img-responsive" alt="" />


             </li>
           </ul>
         </div>
    <div className="clearfix"> </div>
         <div className="b-bottom"> 
           <h5 className="top"><a href="single.html">What turn out consetetur sadipscing elit</a></h5>
           <p>On Aug 25 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>0 </a><a className="span_link" href="#"><span className="glyphicon glyphicon-eye-open"></span>56 </a><a className="span_link" href="single.html"><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
       </div>
      </div>
       <div className="top-news">
       <div className="top-inner">
         <div className="col-md-6 top-text">
            <a href="single.html"><img src="images/pic1.jpg" className="img-responsive" alt="" /></a>
               <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
             <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
               <p>On Jun 25 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>
               0 </a><a className="span_link" href="#">
               <span className="glyphicon glyphicon-eye-open"></span>56 </a>
               <a className="span_link" href="single.html">
               <span className="glyphicon glyphicon-circle-arrow-right"></span></a>
               </p>
          </div>
         <div className="col-md-6 top-text two">
            <a href="single.html"><img src="images/pic2.jpg" className="img-responsive" alt="" /></a>
               <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
             <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
               <p>On Jun 27 <a className="span_link" href="#">
               <span className="glyphicon glyphicon-comment"></span>
               0 </a><a className="span_link" href="#">
               <span className="glyphicon glyphicon-eye-open"></span>56  </a>
               <a className="span_link" href="single.html">
               <span className="glyphicon glyphicon-circle-arrow-right"></span>
               </a>
               </p>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="top-inner second">
         <div className="col-md-6 top-text">
            <a href="single.html"><img src="images/pic3.jpg" className="img-responsive" alt="" /></a>
               <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
             <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
               <p>On Jun 25 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>0 </a><a className="span_link" href="#"><span className="glyphicon glyphicon-eye-open"></span>56 </a><a className="span_link" href="single.html"><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
          </div>
         <div className="col-md-6 top-text two">
            <a href="single.html"><img src="images/pic4.jpg" className="img-responsive" alt="" /></a>
               <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
             <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
               <p>On Jun 27 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>0 </a><a className="span_link" href="#"><span className="glyphicon glyphicon-eye-open"></span>56 </a><a className="span_link" href="single.html"><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
          </div>
          <div className="clearfix"> </div>
        </div>
             </div>
        </div>
     <div className="banner-right-text">
      <h3 className="tittle">News  <i className="glyphicon glyphicon-facetime-video"></i></h3>
      <div className="general-news">
       <div className="general-inner">
         <div className="general-text">
            <a href="single.html"><img src="images/gen1.jpg" className="img-responsive" alt="" /></a>
               <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
             <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
               <p>On Jun 25 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>0 </a><a className="span_link" href="#"><span className="glyphicon glyphicon-eye-open"></span>56 </a><a className="span_link" href="single.html"><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
          </div>
          <div className="edit-pics">
                   <div className="editor-pics">
                    <div className="col-md-3 item-pic">
                      <img src="images/f4.jpg" className="img-responsive" alt="" />

                      </div>
                     <div className="col-md-9 item-details">
                       <h5 className="inner two"><a href="single.html">New iPad App to simulate your Guitar</a></h5>
                        <div className="td-post-date two"><i className="glyphicon glyphicon-time"></i>Feb 22, 2015 <a href="#"><i className="glyphicon glyphicon-comment"></i>0 </a></div>
                      </div>
                     <div className="clearfix"></div>
                   </div>
                   <div className="editor-pics">
                    <div className="col-md-3 item-pic">
                      <img src="images/f1.jpg" className="img-responsive" alt="" />

                      </div>
                     <div className="col-md-9 item-details">
                       <h5 className="inner two"><a href="single.html">New iPad App to simulate your Guitar</a></h5>
                        <div className="td-post-date two"><i className="glyphicon glyphicon-time"></i>Feb 22, 2015 <a href="#"><i className="glyphicon glyphicon-comment"></i>0 </a></div>
                      </div>
                     <div className="clearfix"></div>
                   </div>
                   <div className="editor-pics">
                    <div className="col-md-3 item-pic">
                      <img src="images/f1.jpg" className="img-responsive" alt="" />

                      </div>
                     <div className="col-md-9 item-details">
                       <h5 className="inner two"><a href="single.html">New iPad App to simulate your Guitar</a></h5>
                        <div className="td-post-date two"><i className="glyphicon glyphicon-time"></i>Feb 22, 2015 <a href="#"><i className="glyphicon glyphicon-comment"></i>0 </a></div>
                      </div>
                     <div className="clearfix"></div>
                   </div>
                   <div className="editor-pics">
                    <div className="col-md-3 item-pic">
                      <img src="images/f4.jpg" className="img-responsive" alt="" />

                      </div>
                     <div className="col-md-9 item-details">
                       <h5 className="inner two"><a href="single.html">New iPad App to simulate your Guitar</a></h5>
                        <div className="td-post-date two"><i className="glyphicon glyphicon-time"></i>Feb 22, 2015 <a href="#"><i className="glyphicon glyphicon-comment"></i>0 </a></div>
                      </div>
                     <div className="clearfix"></div>
                   </div>
                 </div>
               <div className="media">	
                <h3 className="tittle media">Media <i className="glyphicon glyphicon-floppy-disk"></i></h3>
                 <div className="general-text two">
                  <a href="single.html"><img src="images/gen3.jpg" className="img-responsive" alt="" /></a>
                   <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
                   <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
                   <p>On Jun 27 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>0 </a><a className="span_link" href="#"><span className="glyphicon glyphicon-eye-open"></span>56 </a><a className="span_link" href="single.html"><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
                 </div>
                  </div>
             <div className="general-text two">
               <a href="single.html"><img src="images/gen2.jpg" className="img-responsive" alt="" /></a>
               <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
             <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
               <p>On Jun 27 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>0 </a><a className="span_link" href="#"><span className="glyphicon glyphicon-eye-open"></span>56 </a><a className="span_link" href="single.html"><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
             </div>
        </div>
     </div>	
    </div>
     <div className="clearfix"> </div>
      <div className="footer">
        <div className="footer-top">
           <div className="col-md-4 footer-grid">
              <h4>Lorem sadipscing </h4>
                 <ul className="bottom">
              <li>Consetetur sadipscing elitr</li>
              <li>Magna aliquyam eratsed diam</li>
            </ul>
           </div>
           <div className="col-md-4 footer-grid">
              <h4>Message Us Now</h4>
                   <ul className="bottom">
                <li><i className="glyphicon glyphicon-home"></i>Available 24/7 </li>
              <li><i className="glyphicon glyphicon-envelope"></i><a href="mailto:info@example.com">mail@example.com</a></li>
              </ul>
           </div>
         <div className="col-md-4 footer-grid">
              <h4>Address Location</h4>
                  <ul className="bottom">
                <li><i className="glyphicon glyphicon-map-marker"></i>2901 Glassgow Road, WA 98122-1090 </li>
              <li><i className="glyphicon glyphicon-earphone"></i>phone: (888) 123-456-7899 </li>
              </ul>
           </div>
         <div className="clearfix"> </div>
        </div>
      </div>
   <div className="copy">
       <p>&copy; 2016 Blogger. All Rights Reserved | Design by <a href="http://w3layouts.com/">W3layouts</a> </p>
   </div>
  <div className="clearfix"> </div>
 </div>
 <div className="clearfix"> </div>
</div> 

   <a href="#home" id="toTop" className="scroll" > 
   <span id="toTopHover" > </span></a>
      </div>
    );
  }
}

export default App;

import "@fortawesome/fontawesome-free/css/all.min.css";




function Template() {
    return (
        <>
          

            {/*header */}
            <header className="header3">
                {/*header-bottom */}
                <div className="header-bottom home2-header-bottom margin-top-20">
                    <div className="container position-relative">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-8 margin-bottom-20">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/images/logo/logo3.png" alt="logo" /></a>
                                </div>
                            </div>
                            <div className="col-lg-7 d-none d-lg-block">
                                <nav id="mobile-menu">
                                    <ul className="main-menu main-menu3">
                                        <li><a href="#">home <span><i className="fas fa-angle-down"></i></span></a>
                                            <ul className="submenu">
                                                <li><a href="index.html">home-1</a></li>
                                                <li><a href="homepage2.html">home-2</a></li>
                                                <li><a href="homepage3.html">home-3</a></li>
                                                <li><a href="homepage4.html">home-4</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">about</a></li>
                                        <li><a href="menu.html">menu</a></li>
                                        <li><a href="#">blog <span><i className="fas fa-angle-down"></i></span></a>
                                            <ul className="submenu">
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="blog-single.html">single blog</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">pages <span><i className="fas fa-angle-down"></i></span></a>
                                            <ul className="submenu">
                                                <li><a href="checkout.html">checkout page</a></li>
                                                <li><a href="single-dish.html">single dish page</a></li>
                                                <li><a href="food-page.html">food page</a></li>
                                                <li><a href="food-page2.html">food page 2</a></li>
                                                <li>
                                                    <a href="shopping-cart.html">shopping cart page</a>
                                                </li>
                                                <li>
                                                    <a href="wishlist.html">wishlist page</a>
                                                </li>
                                                <li>
                                                    <a href="profile.html">profile page</a>
                                                </li>
                                                <li><a href="single-food.html">single food page</a></li>
                                                <li><a href="gallery.html">gallery page</a></li>
                                                <li><a href="login.html">login page</a></li>
                                                <li><a href="signup.html">signup page</a></li>
                                                <li><a href="404.html">404 page</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-3 col-md-9 col-sm-8 col-12">
                                <div
                                    className="customer-area3 d-flex align-items-center justify-content-center justify-content-md-end">
                                    <span className="position-relative">
                                        <a className="shopping" href="shopping-cart.html"><i className="fas fa-shopping-basket"></i></a>
                                        <span className="shop-counter">1</span>
                                    </span>
                                    <a href="#" className="btn2">Membership</a>
                                </div>
                            </div>
                        </div>
                        {/*mobile-menu */}
                        <div className="mobile-menu home2 home3-mobile-menu"></div>
                    </div>
                </div>
            </header>

            {/*snack section */}
            <div className="snack-section margin-top-15 padding-top-150 padding-bottom-150 margin-bottom-120">
                <div className="snack-shapes">
                    <span className="mss1"><img src="assets/images/img/htshape1.png" alt=""/></span>
                    <span className="mss2"><img src="assets/images/img/htshape2.png" alt=""/></span>
                    <span className="mss3"><img src="assets/images/img/htshape2.png" alt=""/></span>
                    <span className="mss4"><img src="assets/images/img/htjuice.png" alt=""/></span>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="snack-left margin-bottom-60">
                                <div className="snack-upper-content d-flex align-items-center margin-bottom-35">
                                    <div className="snack-img">
                                        <img src="assets/images/img/h31.png" alt="" />
                                    </div>
                                    <div className="snack-content">
                                        <h5 className="caveat">Chef Recommendation</h5>
                                        <h5>serve drink passion</h5>
                                    </div>
                                </div>
                                <div className="snack-lower-content common-title-area">
                                    <h1>Snack time<br />
                                        heals <span>all wounds</span></h1>
                                    <div
                                        className="order-box2 d-flex align-items-center flex-wrap justify-content-center justify-content-sm-start margin-top-35">
                                        <div><a href="shopping-cart.html" className="btn2">order now</a></div>
                                        <div className="amount">
                                            <h5>price : <span>$10.50</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="snack-right">
                                <div className="snack-inner-shapes">
                                    <span className="ss1"><img src="assets/images/img/htcane.png" alt="" /></span>
                                    <span className="ss2"><img src="assets/images/img/htleaf.png" alt="" /></span>
                                    <span className="ss3"><img src="assets/images/img/htleaf2.png" alt="" /></span>
                                </div>
                                <img src="assets/images/img/h32.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*features section */}
            <section className="features-section padding-bottom-90 padding-top-120">
                <div className="container position-relative">
                    <div className="fea-shapes">
                        <span className="fs-1 item-bounce"><img src="assets/images/img/htshape7.png" alt="" /></span>
                        <span className="fs-2 item-bounce"><img src="assets/images/img/htshape8.png" alt="" /></span>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-fea">
                                <div className="fea-img">
                                    <img src="assets/images/img/htshape3.png" alt="" />
                                </div>
                                <div className="fea-content text-center text-md-start">
                                    <h5>100% Swiss Quality</h5>
                                    <p>You Have come the right place</p>
                                    <a href="shopping-cart.html">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-fea">
                                <div className="fea-img">
                                    <img src="assets/images/img/htshape4.png" alt="" />
                                </div>
                                <div className="fea-content text-center text-md-start">
                                    <h5>Organic Production</h5>
                                    <p>You Have come the right place</p>
                                    <a href="shopping-cart.html">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-fea">
                                <div className="fea-img">
                                    <img src="assets/images/img/htshape5.png" alt="" />
                                </div>
                                <div className="fea-content text-center text-md-start">
                                    <h5>Food Law Certified</h5>
                                    <p>You Have come the right place</p>
                                    <a href="shopping-cart.html">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-fea">
                                <div className="fea-img">
                                    <img src="assets/images/img/htshape6.png" alt="" />
                                </div>
                                <div className="fea-content text-center text-md-start">
                                    <h5>100% Concentration</h5>
                                    <p>You Have come the right place</p>
                                    <a href="shopping-cart.html">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*softdrink promo */}
            <section className="softdrink-section padding-bottom-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="softdrink-left">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 margin-bottom-30">
                                        <div className="drink-review margin-bottom-30">
                                            <div className="review-img">
                                                <img src="assets/images/img/hticon1.png" alt="" />
                                            </div>
                                            <div className="drink-content">
                                                <div className="reviews">
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                </div>
                                                <h5>5 star rating</h5>
                                                <p>Our All Drink Prodcut Kegs of
                                                    the moment!</p>
                                            </div>
                                        </div>
                                        <div className="s-gallery-1">
                                            <img src="assets/images/img/htimg2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="s-gallery-2 margin-bottom-30">
                                            <img src="assets/images/img/htimg1.jpg" alt="" />
                                        </div>
                                        <div className="s-gallery-3">
                                            <img className="g-shape" src="assets/images/img/htshape10.png" alt="" />
                                            <h4>25 Years+
                                            </h4>
                                            <p>experience skills</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="softdrink-right">
                                <h2>Softdrink Help Your
                                    Harmoneuous &
                                    <span>Relation Health</span>
                                </h2>
                                <p>Christmas is coming! Get your gifts sorted early, then you can sit back and enjoy some
                                    festive beers for yourself!</p>
                                <div className="quote-box d-flex">
                                    <span className="qq"><i className="fas fa-quote-right"></i></span>
                                    <div className="qoute-img">
                                        <img src="assets/images/img/h31.png" alt="" />
                                    </div>
                                    <div className="quote-content">
                                        <h5>They Who Drink Soft
                                            Will think Batter</h5>
                                        <p>Washington Lrving</p>
                                    </div>
                                </div>
                                <a href="shopping-cart.html" className="btn2">shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*timeline section */}
            <section className="timeline-section padding-bottom-100 wow fadeInUp">
                <div className="timeline-shapes">
                    <span className="fs-1 item-bounce"><img src="assets/images/img/htshape2.png" alt="" /></span>
                    <span className="fs-2 item-bounce"><img src="assets/images/img/htshape11.png" alt="" /></span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-timeline">
                                <h2>1999</h2>
                                <h6>Journey now</h6>
                                <p>FoodKhan Softdrink Open! Get your and enjoy some festive for yourself!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-timeline">
                                <h2>2002</h2>
                                <h6>Star Fast Food Menu</h6>
                                <p>FoodKhan Softdrink Open! Get your and enjoy some festive for yourself!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-timeline">
                                <h2>2008</h2>
                                <h6>Star Burger Menu</h6>
                                <p>FoodKhan Softdrink Open! Get your and enjoy some festive for yourself!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-timeline">
                                <h2>2020</h2>
                                <h6>Star Burger Menu</h6>
                                <p>FoodKhan Softdrink Open! Get your and enjoy some festive for yourself!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*drink-items section */}
            <section className="drink-items-section padding-bottom-120 padding-top-110">
                <div className="drink-items-shapes">
                    <span className="fs-1 item-animateOne"><img src="assets/images/img/htshape2.png" alt="" /></span>
                    <span className="fs-2"><img src="assets/images/img/htshape16.png" alt="" /></span>
                    <span className="fs-3 item-animateTwo"><img src="assets/images/img/htshape17.png" alt="" /></span>
                    <span className="fs-4"><img src="assets/images/img/htleaf.png" alt="" /></span>
                </div>
                <div className="container">
                    <div className="common-title-area3 text-center padding-bottom-50 wow fadeInUp">
                        <h2>Explore Our <span>Bottles & Cans</span> </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".2s">
                            <div className="single-dishes home3-single-dishes">
                                <div className="dish-img">
                                    <img src="assets/images/img/htshape12.png" alt="" />
                                </div>
                                <div className="dish-content">
                                    <h5><a href="single-dish.html">Gunna Can
                                    </a></h5>
                                    <p>It is a long established fact that a reader BBQ Chicken.</p>
                                    <span className="price">price :$50.00</span>
                                </div>
                                <span className="badge">hot</span>
                                <div className="cart-opt">
                                    <span>
                                        <a href="#"><i className="fas fa-heart"></i></a>
                                    </span>
                                    <span>
                                        <a href="shopping-cart.html"><i className="fas fa-shopping-basket"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".4s">
                            <div className="single-dishes home3-single-dishes">
                                <div className="dish-img">
                                    <img src="assets/images/img/htshape13.png" alt="" />
                                </div>
                                <div className="dish-content">
                                    <h5><a href="single-dish.html">Dr Pepper Can

                                    </a></h5>
                                    <p>It is a long established fact that a reader BBQ Chicken.</p>
                                    <span className="price">price :$50.00</span>
                                </div>
                                <span className="badge"></span>
                                <div className="cart-opt">
                                    <span>
                                        <a href="#"><i className="fas fa-heart"></i></a>
                                    </span>
                                    <span>
                                        <a href="shopping-cart.html"><i className="fas fa-shopping-basket"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".6s">
                            <div className="single-dishes home3-single-dishes">
                                <div className="dish-img">
                                    <img src="assets/images/img/htshape14.png" alt="" />
                                </div>
                                <div className="dish-content">
                                    <h5><a href="single-dish.html">Ocem Blue
                                    </a></h5>
                                    <p>It is a long established fact that a reader BBQ Chicken.</p>
                                    <span className="price">price :$50.00</span>
                                </div>
                                <span className="badge">new</span>
                                <div className="cart-opt">
                                    <span>
                                        <a href="#"><i className="fas fa-heart"></i></a>
                                    </span>
                                    <span>
                                        <a href="shopping-cart.html"><i className="fas fa-shopping-basket"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 wow fadeIn" data-wow-delay=".8s">
                            <div className="single-dishes home3-single-dishes">
                                <div className="dish-img">
                                    <img src="assets/images/img/htshape15.png" alt="" />
                                </div>
                                <div className="dish-content">
                                    <h5><a href="single-dish.html">Calyps Ocem



                                    </a></h5>
                                    <p>It is a long established fact that a reader BBQ Chicken.</p>
                                    <span className="price">price :$50.00</span>
                                </div>
                                <span className="badge">sale</span>
                                <div className="cart-opt">
                                    <span>
                                        <a href="#"><i className="fas fa-heart"></i></a>
                                    </span>
                                    <span>
                                        <a href="shopping-cart.html"><i className="fas fa-shopping-basket"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto margin-top-30"><a href="food-page.html" className="btn2">See All Cans</a></div>
                    </div>
                </div>
            </section>

            {/*home 3form-area */}
            <section className="form-area home3-form-area padding-bottom-120 wow fadeInUp">
                <div className="ht-form-shapes">
                    <span className="hts1"><img src="assets/images/img/htshape18.png" alt="" /></span>
                    <span className="hts2"><img src="assets/images/img/htshape2.png" alt="" /></span>
                </div>
                <div className="container">
                    <div className="form-box padding-top-110 padding-bottom-80">
                        <div className="form-shapes">
                            <span className="fs-11 item-animateTwo"><img src="assets/images/img/htshape2.png" alt="" /></span>
                            <span className="fs-22"><img src="assets/images/img/htshape17.png" alt="" /></span>
                            <span className="fs-33 item-animateOne"><img src="assets/images/shapes/f-shape-7.png" alt=""/></span>
                            <span className="fs-8"><img src="assets/images/shapes/9.png" alt=""/></span>
                        </div>
                        <div className="common-title-area3 text-center padding-bottom-50">
                            <h2>Table <span>Booking</span> </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 col-md-12">
                                <div className="form-wraper padding-bottom-40">
                                    <form action="#">
                                        <select className="form-item2">
                                            <option value="">4 people</option>
                                            <option value="">3 people</option>
                                            <option value="">2 people</option>
                                            <option value="">1 people</option>
                                        </select>
                                        <input className="form-item2" type="date" />
                                        <select className="form-item2">
                                            <option value="">07:24 pm</option>
                                            <option value="">07:24 pm</option>
                                            <option value="">07:24 pm</option>
                                            <option value="">07:24 pm</option>
                                        </select>
                                        <button type="submit">find table</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*drink-ind section */}
         <section className="drink-ind padding-bottom-90">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 wow fadeInLeft">
        <div className="drink-ind-left margin-bottom-30">
          <img className="drs1 item-bounce" src="assets/images/img/htshape20.png" alt="" />
          <img className="drs2 item-bounce" src="assets/images/img/htshape21.png" alt="" />
          <img className="drs3" src="assets/images/img/htshape22.png" alt="" />
          <img className="drs4 item-animateTwo" src="assets/images/img/htshape2.png" alt="" />
          <img className="drs5" src="assets/images/img/htleaf.png" alt="" />
          {/* main img */}
          <img src="assets/images/img/htshape19.png" alt="" />
        </div>
      </div>
      <div className="col-lg-6 wow fadeInRight">
        <div className="drink-ind-right">
          <div className="common-title-area3 text-center text-md-start">
            <h2>
              Best Ingredients
              Food Juices<span> On Right Handmade</span>
            </h2>
          </div>
          <div className="inner-fea">
            <div className="row margin-top-30">
              <div className="col-lg-6 col-md-6">
                <div className="single-fea">
                  <div className="fea-img">
                    <img src="assets/images/img/htshape3.png" alt="" />
                  </div>
                  <div className="fea-content text-center text-md-start">
                    <h5>Quality Hops</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-fea">
                  <div className="fea-img">
                    <img src="assets/images/img/htshape4.png" alt="" />
                  </div>
                  <div className="fea-content text-center text-md-start">
                    <h5>Premium Malts</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            {/*food-brand section */}
            <section className="food-brand-section padding-bottom-90">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 margin-bottom-60 wow fadeInLeft">
                            <div className="food-brand-left text-center text-md-start">
                                <div className="common-title-area3">
                                    <h2 className="margin-bottom-20">Brand Iced Green
                                        Tea Lemon <span>Juice
                                            Food Included</span> </h2>
                                    <p>Christmas is coming! Get your gifts sorted early, then you can sit back and enjoy some
                                        festive beers for yourself!</p>
                                </div>

                                <div className="inner-brand margin-bottom-30 margin-top-30">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-4">
                                            <div className="single-percentage">
                                                <h6>Extact Juice</h6>
                                                <h3>15%</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-4">
                                            <div className="single-percentage">
                                                <h6>Alcohol</h6>
                                                <h3>0%</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-4">
                                            <div className="single-percentage">
                                                <h6>Vitamin A-Z</h6>
                                                <h3>90%</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="shopping-cart.html" className="btn2">shop now</a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-sm-block offset-lg-1 wow fadeInRight">
                            <div className="food-brand-right margin-bottom-30">
                                <img className="fb1 item-bounce" src="assets/images/img/htshape24.png" alt="" />
                                <img className="fb2 item-bounce" src="assets/images/img/htshape25.png" alt="" />
                                <img className="fb3 item-bounce" src="assets/images/img/htshape20.png" alt="" />
                                <img className="fb4" src="assets/images/img/htshape26.png" alt="" />
                                <img className="fb5 item-animateTwo" src="assets/images/img/htshape2.png" alt="" />
                                <img className="fb6" src="assets/images/img/htleaf.png" alt="" />
                                <img className="fb7" src="assets/images/img/htshape2.png" alt="" />
                                {/* main img */}
                                <img src="assets/images/img/htshape23.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/*ht testimonial */}
            <div className="ht-testi padding-bottom-120 padding-top-110">
                <div className="ht-shapes">
                    <img className="drs1" src="assets/images/img/htleaf.png" alt="" />
                    <img className="drs2 item-bounce" src="assets/images/img/htshape17.png" alt="" />
                    <img className="drs3 item-animateOne d-none d-md-block" src="assets/images/img/htshape2.png" alt="" />
                    <img className="drs4 d-none d-md-block" src="assets/images/img/htleaf2.png" alt="" />
                </div>
                <div className="container">
                    <div className="common-title-area3 text-center text-md-start wow fadeInUp">
                        <h2 className="margin-bottom-60 text-center">happy <span>
                            feedback</span></h2>
                    </div>
                    <div className="ht-testi-active">
                        <div className="single-ht-item position-relative">
                            <span className="qq"><i className="fas fa-quote-right"></i></span>
                            <div className="row">
                                <div className="col-10">
                                    <div className="testi-left">
                                        <div className="testi-top d-flex align-items-center">
                                            <div className="testi-img">
                                                <img src="assets/images/img/htshape27.png" alt="" />
                                            </div>
                                            <div className="testi-meta">
                                                <div className="d-flex">
                                                    <h5>Christ Deo</h5>
                                                    <span className="des">CEO A4Tech Ltd.</span>
                                                </div>
                                                <div className="testi-rating">
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Food Khan is a gret Restaurant from the University of Texas at Austin has been
                                            researching the benefits of frequent testing and the feedback
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2 d-none d-md-block">
                                    <div className="testi-right">
                                        <img src="assets/images/img/htshape28.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-ht-item position-relative">
                            <span className="qq"><i className="fas fa-quote-right"></i></span>
                            <div className="row">
                                <div className="col-10">
                                    <div className="testi-left">
                                        <div className="testi-top d-flex align-items-center">
                                            <div className="testi-img">
                                                <img src="assets/images/img/htshape29.png" alt="" />
                                            </div>
                                            <div className="testi-meta">
                                                <div className="d-flex">
                                                    <h5>robina Deo</h5>
                                                    <span className="des">CEO A4Tech Ltd.</span>
                                                </div>
                                                <div className="testi-rating">
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Food Khan is a gret Restaurant from the University of Texas at Austin has been
                                            researching the benefits of frequent testing and the feedback
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2 d-none d-md-block">
                                    <div className="testi-right">
                                        <img src="assets/images/img/htshape30.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-ht-item position-relative">
                            <span className="qq"><i className="fas fa-quote-right"></i></span>
                            <div className="row">
                                <div className="col-10">
                                    <div className="testi-left">
                                        <div className="testi-top d-flex align-items-center">
                                            <div className="testi-img">
                                                <img src="assets/images/img/htshape27.png" alt="" />
                                            </div>
                                            <div className="testi-meta">
                                                <div className="d-flex">
                                                    <h5>Christ Deo</h5>
                                                    <span className="des">CEO A4Tech Ltd.</span>
                                                </div>
                                                <div className="testi-rating">
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Food Khan is a gret Restaurant from the University of Texas at Austin has been
                                            researching the benefits of frequent testing and the feedback
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2 d-none d-md-block">
                                    <div className="testi-right">
                                        <img src="assets/images/img/htshape28.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-ht-item position-relative">
                            <span className="qq"><i className="fas fa-quote-right"></i></span>
                            <div className="row">
                                <div className="col-10">
                                    <div className="testi-left">
                                        <div className="testi-top d-flex align-items-center">
                                            <div className="testi-img">
                                                <img src="assets/images/img/htshape29.png" alt="" />
                                            </div>
                                            <div className="testi-meta">
                                                <div className="d-flex">
                                                    <h5>robina Deo</h5>
                                                    <span className="des">CEO A4Tech Ltd.</span>
                                                </div>
                                                <div className="testi-rating">
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                    <span><i className="fas fa-star"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Food Khan is a gret Restaurant from the University of Texas at Austin has been
                                            researching the benefits of frequent testing and the feedback
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2 d-none d-md-block">
                                    <div className="testi-right">
                                        <img src="assets/images/img/htshape30.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*inst-slider */}
            <div className="ins-gallery-area padding-top-120">
                <div className="container">
                    <div className="ins-gallery-active">

                        <div className="single-inst-item">
                            <a href="#"> <img src="assets/images/img/ins1.jpg" alt=""/> </a>
                            <span className="ins-icon">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="assets/images/img/inst2.jpg" alt="" /> </a>
                            <span className="ins-icon"><a href="#"><i className="fab fa-instagram"></i></a></span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="assets/images/img/inst3.jpg" alt="" /> </a>
                            <span className="ins-icon"><a href="#"><i className="fab fa-instagram"></i></a></span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="assets/images/img/ins4.jpg" alt="" /> </a>
                            <span className="ins-icon"><a href="#"><i className="fab fa-instagram"></i></a></span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="assets/images/img/ins1.jpg" alt="" /> </a>
                            <span className="ins-icon"><a href="#"><i className="fab fa-instagram"></i></a></span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="assets/images/img/inst2.jpg" alt="" /> </a>
                            <span className="ins-icon"><a href="#"><i className="fab fa-instagram"></i></a></span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="assets/images/img/inst3.jpg" alt="" /> </a>
                            <span className="ins-icon"><a href="#"><i className="fab fa-instagram"></i></a></span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="assets/images/img/ins4.jpg" alt="" /> </a>
                            <span className="ins-icon"><a href="#"><i className="fab fa-instagram"></i></a></span>
                        </div>

                    </div>
                </div>
            </div>

            <footer className="ht-footer padding-bottom-55 padding-top-220">
                <div className="htf-shapes">
                    <img className="drs1 item-bounce d-none d-md-block" src="assets/images/img/htshape22.png" alt="" />
                    <img className="drs2 d-none d-md-block" src="assets/images/img/htshape17.png" alt="" />
                    <img className="drs3 d-none d-md-block" src="assets/images/img/htshape2.png" alt="" />
                    <img className="drs4 item-animateTwo d-none d-md-block" src="assets/images/img/htleaf2.png" alt="" />
                </div>
                <div className="container">
                    <div className="ht-footer-top">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 margin-bottom-30">
                                <div className="widget text-center text-sm-start">
                                    <div className="logo">
                                        <img src="assets/images/logo/logo3.png" alt="" />
                                    </div>
                                    <ul>
                                        <li>570 8th Ave,New York, NY 10018
                                            United States</li>
                                    </ul>
                                    <a href="#" className="ht-link">google map</a>
                                    <div className="social-box">
                                        <span><a href="#"><i className="fab fa-facebook"></i></a></span>
                                        <span><a href="#"><i className="fab fa-instagram"></i></a></span>
                                        <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                                        <span><a href="#"><i className="fab fa-youtube"></i></a></span>
                                        <span><a href="#"><i className="fab fa-linkedin"></i></a></span>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 margin-bottom-30">
                                <div className="widget text-center text-sm-start">
                                    <h6>delivery support</h6>
                                    <h5><span><i className="fas fa-phone-square-alt"></i></span>123-59794069</h5>
                                    <ul>
                                        <li>Monday – Friday: 9:00-20:00
                                        </li>
                                        <li>Saturday: 11:00 – 15:00</li>
                                    </ul>
                                    <a href="#" className="ht-link">email address</a>
                                    <a href="#" className="ht-email"><span><i className="fas fa-envelope-open-text"></i></span>
                                        infofoodkahn@gmail.com</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 margin-bottom-30">
                                <div className="widget text-center text-sm-start">
                                    <h6>information</h6>
                                    <ul>
                                        <li><a href="about.html">about us</a></li>
                                        <li><a href="#">delivery information</a></li>
                                        <li><a href="#">privacy policy</a></li>
                                        <li><a href="#">sales</a></li>
                                        <li><a href="#">terms & conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 margin-bottom-30">
                                <div className="widget text-center text-sm-start">
                                    <h6>newsletter</h6>
                                    <div className="newsletter newsletter-3 d-flex">
                                        <form action="#">
                                            <input type="email" placeholder="enter your email" /> <button type="submit"><i
                                                className="fas fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                    <a href="#" className="btn2">subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*section divider */}

                    <div className="divider">
                        <hr />
                    </div>

                    <div className="ht-footer-bottom">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-4 col-12">
                                <div className="ht-copyright-area text-center text-md-start">
                                    <p>copyright @ 2021 <a href="index.html">khadyo</a></p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-8 col-12">
                                <div className="ht-payment">
                                    <a href="checkout.html"> <img src="assets/images/img/payment2.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/*ToTop Button */}
            <button className="scrollup scrollup2"><i className="fas fa-angle-up"></i></button>

            {/*Javascript Files */}
            <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
            <script src="assets/js/vendor/bootstrap.min.js"></script>
            <script src="assets/js/vendor/jquery.meanmenu.min.js"></script>
            <script src="assets/js/vendor/jquery.magnific-popup.min.js"></script>
            <script src="assets/js/vendor/slick.min.js"></script>
            <script src="assets/js/vendor/counterup.min.js"></script>
            <script src="assets/js/vendor/countdown.js"></script>
            <script src="assets/js/vendor/waypoints.min.js"></script>
            <script src="assets/js/vendor/jquery-ui.js"></script>
            <script src="assets/js/vendor/isotope.pkgd.min.js"></script>
            <script src="assets/js/vendor/easing.min.js"></script>
            <script src="assets/js/vendor/wow.min.js"></script>
            <script src="assets/js/main.js"></script>

        </>
    );
}

export default Template;
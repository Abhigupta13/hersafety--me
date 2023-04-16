import React from "react";

function Home_carousel() {
  return (
    <div className="container justify-content-center" style={{ width: "60%"}}>
      <div id="carouselExampleInterval" class="carousel slide carousel-dark" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item" data-bs-interval="5000">
    <h4 className="text-center my-3">
              Women Economic Rights around the World.
            </h4>
            <a href="https://www.visualcapitalist.com/visualizing-womens-economic-rights-around-the-world/" target="_blank" ><img
              src="https://www.visualcapitalist.com/wp-content/uploads/2021/10/Womens-Rights-in-Each-Country-thumbnail-1000x600.jpg"  className="d-block w-100 caro_img"
              alt="..."/></a>
           
    </div>
    <div class="carousel-item active" data-bs-interval="4000">
    <h4 className="text-center my-3">
              Top 10 Safety Measures which must be implemented for Women Safety
            </h4>
            <a href="https://www.visualcapitalist.com/visualizing-womens-economic-rights-around-the-world/" target="_blank" ><img
              src="https://bpac.in/wp-content/uploads/2020/11/women-safety.png"  className="d-block w-100 caro_img"
              alt="..."/></a>
           
    </div>
    <div class="carousel-item" data-bs-interval="3000">
    <h5 className="text-center my-3">
              Women, Business and the Law - Gender Equality, Women Economic
              Empowerment.
            </h5>
            <a href="https://www.visualcapitalist.com/visualizing-womens-economic-rights-around-the-world/" target="_blank" ><img
              src="https://wbl.worldbank.org/content/dam/sites/wbl/img/780x439/WBL_Report%202022_Cover%20Thumbnails_780X439.jpg"  className="d-block w-100 caro_img"
              alt="..."/></a>
            
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <h4 className="text-center my-3">
              Most Important Legal Rights of Women in India.
            </h4>
            <a href="https://www.visualcapitalist.com/visualizing-womens-economic-rights-around-the-world/" target="_blank" ><img
              src="https://www.writinglaw.com/wp-content/uploads/2021/10/Most-Important-Legal-Rights-of-Women-in-India.png"  className="d-block w-100 caro_img"
              alt="..."/></a>
            
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}

export default Home_carousel;

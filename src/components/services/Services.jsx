import React from "react";
import "./services.css";
import img from '../../assets/headerImg.png'

const Services = () => {
  return (
    <section className="p-5">
      <h2 className="text-center">NOSSOS SERVIÇOS</h2>
      <p className="text-center">UM POUCO DOS SERVIÇOS QUE PRESTAMOS</p>

      {/* CARDS */}

      <div className="d-flex justify-content-center  flex-wrap gap-3 ">
        <div class="card " style="max-width: 18rem;">
          <img src={img} className='img-fluid' alt="" />
          <div class="card-body">
            <p class="card-text">
            Card title.
            </p>
          </div>
        </div>
        <div class="card " style="max-width: 18rem;">
        <img src={img} className='img-fluid' alt="" />
          <div class="card-body">
            <p class="card-text">
            Card title.
            </p>
          </div>
        </div>
        <div class="card" style="max-width: 18rem;">
        <img src={img} className='img-fluid' alt="" />
          <div class="card-body">
            <p class="card-text">
              Card title.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

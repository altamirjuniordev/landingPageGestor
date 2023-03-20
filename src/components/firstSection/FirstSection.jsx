import React from "react";
import './firstSection.css'

const FirstSection = () => {
  return (
    <section class="firstSection d-sm-flex py-4 justify-content-center gap-5">
      <div class="card bg-dark m-sm-0 mx-auto mb-5" style="max-width: 18rem;">
        <div class="text-center">
          <i class="bi bi-person-fill-add fs-1" style="color: #ff8311;"></i>
        </div>

        <div class="card-body text-center">
          <h2 class="mb-4">MAIS CLIENTES</h2>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card bg-dark m-sm-0 mx-auto" style="max-width: 18rem;">
        <div class="text-center">
          <i class="bi bi-cash fs-1" style="color: #ff8311;"></i>
        </div>
        <div class="card-body text-center">
          <h2 class="mb-4">MAIS VENDAS</h2>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

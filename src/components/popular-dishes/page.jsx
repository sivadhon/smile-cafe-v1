import React from "react";
import Image from "next/image";
import Link from "next/link";
import dishes from "@/data/dishes.json"; 

export default function PopularDishes() {
  return (
    <section className="bg-dark py-5">
      <div className="container text-center">
        <h1 className="text-light fw-bold mb-4">Our Best Sellers</h1>
        <div className="row g-4">
          {dishes.map((dish) => (
            <div className="col-sm-6 col-lg-3" key={dish.id}>
              <div className="card border-0 shadow-sm h-100 rounded-4">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={300}
                  height={200}
                  priority
                  className="rounded-top-4 w-100"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{dish.name}</h5>
                  <p className="card-text small text-muted">
                    {dish.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center">
                  <span className="fw-bold fs-5">${dish.price}</span>
                  <button disabled className="btn btn-dark rounded-pill px-3">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

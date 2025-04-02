import React from "react";
import Link from "next/link";

export default function BottomContent() {
  return (
    <>
      {/* Location & Hours */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="text-light fw-bold mb-3">Visit Us</h1>
          <p className="text-secondary">
            123 Auroville MAin Road, Auroville, Kpm
          </p>
          <p className="text-secondary">Open Daily: 9:00 AM - 10:00 PM</p>
          <Link
            href="https://maps.app.goo.gl/sBVtS51FrXSAsimG8"
            target="_blank"
            className="btn btn-outline-light border-2 rounded-pill px-4 btn-arrow"
          >
            Get Directions
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-dark py-5 text-center">
        <div className="container">
          <h2 className="text-light fw-bold mb-4">Have Questions?</h2>
          <Link
            href="/contact"
            prefetch={true}
            className="btn btn-outline-danger border-2 text-light rounded-pill px-5 py-3 fs-5 btn-arrow"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

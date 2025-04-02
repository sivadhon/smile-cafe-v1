import React from 'react';
import { motion } from "framer-motion";

export default  function LandingPage() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
        <div className="position-relative w-100 min-vh-100 ">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          >
            <source src="/baking.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Content */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end align-items-start text-white px-3 px-md-5 pb-4 pb-md-5">
            <motion.h1
              className="display-2 fw-medium my-3 my-md-5 text-center text-md-start"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Brewing joy, <br /> baking love, <br /> spreading smiles
            </motion.h1>

            <motion.p
              className="lead fs-4 fs-md-3 mb-5 mb-md-3 text-center text-md-start"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Coffee, Cake, and Cozy Conversations. <br />
              <span className="fs-2 fw-bold">Welcome in!</span>
            </motion.p>
          </div>
        </div>
      </div>
    </>
  )
}


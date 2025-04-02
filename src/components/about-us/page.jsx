import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
         {/* About Us */}
         <section className="bg-dark py-5">
         <div className="container">
           <div className="row align-items-center">
             <motion.div
               className="col-lg-6"
               initial={{ y: "100vw", opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1.3, ease: "easeOut" }}
             >
               <Image
                 src="/cafe-background2.jpg"
                 alt="About Cafe"
                 width={600}
                 height={400}
                 priority
                 className="rounded-4 w-100"
                 style={{ objectFit: "cover" }}
               />
             </motion.div>
             <motion.div
               className="col-lg-6"
               initial={{ y: "100vw", opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
             >
               <h1 className="text-light fw-bold my-3">About Us</h1>
               <p className="text-secondary">
                 At our cafe, we serve more than just coffee. We provide a cozy
                 environment where stories are shared and memories are made.
                 Experience artisanal coffee, handcrafted pastries, and a vibe
                 you'll love.
               </p>
               <div className="d-flex justify-content-center mt-5">
                 <Link
                   href="/about"
                   prefetch={true}
                   className="btn btn-outline-danger border-2 text-light rounded-pill px-4 btn-arrow"
                 >
                   Read More
                 </Link>
               </div>
             </motion.div>
           </div>
         </div>
       </section>
       </>
  )
}

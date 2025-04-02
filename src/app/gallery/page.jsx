"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NavigationBar from "@/components/common/navbar/page";
import Footer from "@/components/common/footer/page";
import galleryData from "@/data/gallery.json";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <NavigationBar />
      <section className="bg-dark py-5">
        <div className="container">
          <h2 className="text-center display-3 fw-bold animate-gradient my-5">Gallery</h2>
          <div className="row g-3">
            {galleryData.map((item) => (
              <motion.div
                className="col-6 col-md-3"
                key={item.id}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: item.id * 0.1 }}
                onClick={() => setSelectedImage(item.image)}
                style={{ cursor: "pointer" }}
              >
                <div className="border border-1 rounded-4 border-0 overflow-hidden shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={500}
                    height={500}
                    priority
                    className="w-100"
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
              style={{ zIndex: 1050 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
              >
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={800}
                  height={600}
                  priority
                  className="rounded-4 shadow-lg"
                  style={{ maxHeight: "80vh", objectFit: "contain" }}
                />
              </motion.div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

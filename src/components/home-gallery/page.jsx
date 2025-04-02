import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gallery from "@/data/gallery.json"; 

export default function HomeGallery() {
  return (
    <section className="bg-dark py-5">
      <div className="container text-center">
        <h1 className="text-light fw-bold mb-4">Gallery</h1>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-4"
        >
          {gallery.length > 0 ? (
            gallery.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="d-flex justify-content-center">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={400}
                    height={300}
                    priority
                    className="rounded-4 w-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="text-light">Loading images...</p>
          )}
        </Swiper>

        <Link
          href="/gallery"
          className="btn btn-outline-danger text-light border-2 rounded-pill mt-4 px-4 btn-arrow"
        >
          View More
        </Link>
      </div>
    </section>
  );
}

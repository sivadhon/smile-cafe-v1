"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavigationBar from "@/components/common/navbar/page";
import Footer from "@/components/common/footer/page";
import Link from "next/link";
import menu from "@/data/menu.json"; 

export default function MenuPage() {
  const [key, setKey] = useState("Coffee");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");


  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [key]);

  return (
    <>
      <NavigationBar />
      <div className="menu-page bg-light">
        <section className="text-center bg-dark text-white py-5 position-relative overflow-hidden">
          <Image
            src="/cafe-background.jpg"
            alt="Menu Hero"
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-50 position-absolute"
          />
          <motion.div
            className="position-relative z-1"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-3 fw-bold mt-5 animate-gradient">
              Delight in Every Bite
            </h1>
            <p className="lead fs-4">Savor the flavors crafted with love</p>
            <div className="d-flex justify-content-center mt-5">
              <Link
                href="/menucard"
                prefetch={true}
                className="btn btn-outline-danger border-3 rounded-pill px-3 btn-arrow"
              >
                Menu Card
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Menu Section */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="form-control shadow-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Category Tabs */}
            <motion.ul
              className="nav nav-tabs justify-content-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {menu.menu.map((category, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={`nav-link ${key === category.category ? "active" : ""}`}
                    onClick={() => setKey(category.category)}
                  >
                    {category.category}
                  </button>
                </li>
              ))}
            </motion.ul>

            {/* Menu Items */}
            {loading ? (
              <div className="text-center my-5">
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="row justify-content-center g-3">
                {menu.menu
                  .find((category) => category.category === key)
                  ?.items.filter((item) =>
                    item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item, idx) => (
                    <motion.div
                      className="col-sm-6 col-md-4 col-lg-3 mb-4"
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <div className="card h-100 border-0 shadow rounded-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={400}
                          height={250}
                          priority
                          className="rounded-top-4 w-100"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title fw-semibold">{item.name}</h5>
                          <p className="card-text small text-muted">{item.description}</p>
                        </div>
                        <div className="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center">
                          <span className="fw-bold fs-5">{item.price}</span>
                          <button disabled className="btn btn-dark rounded-pill px-2 py-2">
                            Order Now
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import menuData from "@/data/menuData.json";
import NavigationBar from "@/components/common/navbar/page";
import Footer from "@/components/common/footer/page";

export default function MenuTable() {
  return (
    <>
      <NavigationBar />
      <section className="bg-dark py-5">
        <div className="container">
          <h1 className="fw-bold display-3 text-center animate-gradient mt-5">
            Our Menu
          </h1>
          {menuData.map((category, index) => (
            <div key={index} className="my-5">
              <motion.h4
                className="text-warning fw-semibold mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {category.category}
              </motion.h4>
              <motion.table
                className="table table-hover align-middle shadow-lg rounded-bottom-4 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <thead className="table-dark">
                  <tr>
                    <th scope="col text-light">Item</th>
                    <th scope="col text-light">Description</th>
                    <th scope="col text-light">Price</th>
                    <th scope="col text-light" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="text-dark fw-semibold">{item.name}</td>
                      <td className="text-dark fw-normal">{item.description}</td>
                      <td className="text-dark fw-bold">{item.price}</td>
                      <td className="text-dark text-center">
                        <button
                          disabled
                          className="btn btn-outline-dark rounded-pill px-3 py-1"
                        >
                          Order
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </motion.table>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

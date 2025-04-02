"use client";
import NavigationBar from "@/components/common/navbar/page";
import Footer from "@/components/common/footer/page";
import Image from 'next/image';

export default function ContactPage() {
  return (
   <>
   <NavigationBar/>
    <section className="position-relative vh-100">
      <Image
        src="/gallery1.jpg"
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        priority 
        quality={100}
        className="z-0"
      />
      <div className="container position-absolute top-50 start-50 translate-middle bg-dark shadow-lg p-4 z-1">
        <h1 className="text-light text-center fw-bold mb-4">Contact Us</h1>
        <div className="row g-4">
          <div className="col-sm-12 col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label text-light">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label text-light">E-mail</label>
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Phone</label>
                <input type="text" className="form-control" placeholder="Your Phone Number" />
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column">
            <label className="form-label text-light">Message</label>
            <textarea className="form-control flex-grow-1" rows="5" placeholder="Write text here..."></textarea>
            <button className="btn btn-outline-light border-2 rounded-pill px-4 py-2 mt-3 align-self-end">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
   </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { LuBike } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-100 bg-dark text-light py-5">
      <div className="container">
        <div className="row w-100">
          {/* Cafe Logo */}
          <div className="col-12 col-md-3 mb-4 text-center" style={{ height: "100%" }}>
            <Image
              src="/color-cafe-logo.png"
              alt="Cafe Logo"
              width={100}
              height={85}
              priority
            />
            <h2 className="mt-3 fw-bold">Smile Cafe</h2>
            <p className="small">Where every sip and bite feels like home!</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-12 col-md-2 mb-4" style={{ height: "100%" }}>
            <h6 className="fw-semibold mb-3">Quick Links <FaLink className="mb-1"/></h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" prefetch={true} className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/menu" prefetch={true} className="text-decoration-none">
                  Menu
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/gallery" prefetch={true} className="text-decoration-none">
                  Gallery
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" prefetch={true} className="text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Specialties Section */}
          <div className="col-12 col-md-2 mb-4" style={{ height: "100%" }}>
            <h6 className="fw-semibold mb-3">Specialties <MdStars className="mb-1"/></h6>
            <ul className="list-unstyled">
              <li className="mb-2">Artisan Cakes</li>
              <li className="mb-2">Signature Coffees</li>
              <li className="mb-2">Freshly Baked Bread</li>
              <li className="mb-2">Breakfast Specials</li>
            </ul>
          </div>

          {/* Visit Us Section */}
          <div className="col-12 col-md-2 mb-4" style={{ height: "100%" }}>
            <h6 className="fw-semibold mb-3">Visit Us <LuBike className="mb-1"/></h6>
            <p className="small">
              123 Bakery Street,<br />
              Coffee Town, CA 56789
            </p>
            <p className="small">Open: 9 AM - 10 PM <br />(Mon-Sun)</p>
          </div>

          {/* Contact Info Section */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-semibold mb-3">Contact Us <FiPhoneCall className="mb-1"/></h6>
            <p className="small mb-1">Phone: +1 234 567 890</p>
            <p className="small">Email: smilecafe@gmail.com</p>
            <div className="d-flex gap-4 mt-4">
              <a href="#">
              <FaInstagram className="fs-3" />
              </a>
              <a href="#">
              <BsWhatsapp className="fs-3" />
              </a>
              <a href="#">
              <SiGmail className="fs-3" />
              </a>
              <a href="#">
              <FaFacebook className="fs-3" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center py-3">
          <p className="small mb-0">
            &copy; {new Date().getFullYear()} Smile Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

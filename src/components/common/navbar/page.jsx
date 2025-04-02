"use client";
import Link from "next/link";
import Image from "next/image";
import { IoHomeSharp } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
// import DarkModeToggle from "./DarkModeToggle";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "bg-dark navbar-dark" : "bg-transparent navbar-light"
      } transition-navbar`}
    >
      <div className="container">
        <Link
          className="d-flex align-items-center fst-italic fs-3 fw-bold text-light text-decoration-none"
          href="/"
          prefetch={true}
        >
          <Image
            src="/cafe-logo.png"
            alt="cafe logo"
            width={100}
            height={88}
            priority
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-4 ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" href="/" prefetch={true}>
                {/* <IoHomeSharp className="mb-2 fs-5" />  */}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                href="/menu"
                prefetch={true}
              >
                {/* <MdRestaurantMenu className="mb-2 fs-5" /> */}
                 Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                href="/gallery"
                prefetch={true}
              >
                {/* <BiSolidPhotoAlbum className="mb-2 fs-5" />  */}
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                href="/contact"
                prefetch={true}
              >
                {/* <MdOutlineConnectWithoutContact className="mb-2 fs-4" /> */}
                 Contact
              </Link>
            </li>
            {/* dark mode toggle */}
            {/* <div className="d-flex align-items-center">
          <DarkModeToggle /> 
        </div> */}
            {/* end dark mode toggle */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

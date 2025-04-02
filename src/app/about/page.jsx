"use client";
import NavigationBar from "@/components/common/navbar/page";
import Footer from "@/components/common/footer/page";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <NavigationBar />
      <section className="bg-dark">
      <div className="container py-5">
        <h1 className="fw-bold display-3 text-center animate-gradient my-5">About Our Cafe</h1>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <Image
              src="/cafe-background2.jpg"
              alt="Cafe Interior"
              width={600}
              height={400}
              priority 
              className="rounded-4 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-6">
            <p className="text-secondary fs-5">
              Welcome to our cozy cafe, where every cup of coffee tells a story. 
              Established in the heart of Auroville, our mission is to bring people together 
              over the finest coffee and fresh homemade treats.
            </p>
          </div>
        </div>

       <div className="my-5">
       <h2 className="text-light fw-bold mb-3">Our Story</h2>
        <p className="text-secondary">
          Our journey began with a passion for high-quality coffee and a dream to create a warm, inviting space for the community.
          Over the years, we have perfected our craft, working closely with local farmers to source the best coffee beans.
        </p>
        
        <h2 className="text-light fw-bold mt-4 mb-3">Why Choose Us?</h2>
        <ul className="text-secondary ">
          <h5>☕ Freshly brewed artisanal coffee</h5>
          <h5>🥐 Handcrafted pastries made daily</h5>
          <h5>🌱 Locally sourced ingredients</h5>
          <h5>🎶 Relaxing ambiance with great music</h5>
          <h5>📚 Cozy corners perfect for reading or working</h5>
        </ul>
        
        <h2 className=" text-light fw-bold mt-4 mb-3">Visit Us</h2>
        <p className="text-secondary">
          Come and experience the magic of our cafe. Whether you're looking for a quiet space to unwind or a lively place to catch up with friends, we have something for everyone.
        </p>
       </div>

        <div className="text-center mt-4">
          <Link href="/" prefetch={true} className="btn btn-outline-light border-2 rounded-pill px-4 btn-arrow">Back</Link>
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}

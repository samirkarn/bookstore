import NavBar from "@/components/Navbar"
import Footer from "@/components/Footer"

function About() {
  return (
    <>
      <NavBar />
      <div className="relative bg-white mt-12">
        <div className="max-w-10x2 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-4xl font-bold mb-4">India's Largest online book store</p>
              <p>At <strong>BookStore</strong>, we believe in delivering solutions that transform your ideas into reality. Our journey began with a passion for innovation and a commitment to creating impactful experiences for our clients. <br />
                With a team of dedicated professionals, we specialize in [list of services or expertise areas], ensuring that we meet the highest standards of quality and excellence. Our mission is to provide comprehensive and personalized solutions that help businesses grow and succeed in an ever-changing digital landscape.
                <br /> <br />
                We pride ourselves on our core values:
                <br />

                <strong>Customer-Centric Approach:</strong> Understanding the needs of our clients and delivering tailored solutions. <br />

                <strong>Innovation:</strong> Continuously pushing the boundaries of what's possible. <br />

                <strong>Excellence:</strong> Striving for the highest quality in every project we undertake. <br />

                <strong>Integrity:</strong> Being honest and transparent in all our dealings. <br />

                Over the years, we've had the privilege to work with diverse clients from various industries, and our commitment to their success has been unwavering. We take pride in building long-term relationships and supporting their growth every step of the way.
                <br /> <br />
                At <strong>BookStore</strong>, we are more than just a team; we are your partner in success. Together, let's build the future.</p>
            </div>
            <div>
              <img className="rounded-md order-1" src="./images/book2.jpg" alt="" />
            </div>
          </div>
          <div className="mt-10">
            <p className="text-3xl font-bold mb-4">Our Mission</p>
            <p>At <strong>BookStore</strong>, our mission is to empower individuals and businesses by providing innovative and tailored solutions that drive growth and foster success. We are committed to delivering exceptional services with integrity, passion, and professionalism. We strive to create lasting value by continuously evolving and adapting to meet the changing needs of our clients and the market.
              <br /> <br />
              We aim to:
              <br />
              Provide top-notch solutions that meet and exceed client expectations. <br />
              Foster a collaborative environment that encourages creativity and problem-solving. <br />
              Support sustainable growth for our clients through cutting-edge technologies and strategies. <br />
              Build lasting relationships based on trust, respect, and mutual success.</p>
          </div>

          <div className="mt-10">
            <p className="text-3xl font-bold mb-4">Our Vission</p>
            <p>Our vision is to be a leader in Book Seller Market, recognized for our commitment to quality, innovation, and customer satisfaction. We aspire to create a positive impact on the world through our services and to be a driving force for change in the digital age.
              <br /><br />
              We envision:
              <br />
              A future where businesses of all sizes can thrive through technology.<br />
              Being at the forefront of innovation, continuously advancing our expertise.<br />
              Creating a legacy of excellence and reliability that our clients can depend on.<br />
              Building a better tomorrow by contributing to sustainable, ethical, and meaningful projects.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
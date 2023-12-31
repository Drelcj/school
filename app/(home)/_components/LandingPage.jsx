import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Book, ChefHat, Shuffle, Facebook, Webcam, Instagram, X } from "lucide-react";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md flex justify-between items-center px-4 py-2 fixed top-0 left-0 right-0 z-50">
        <Image
          src="/logo.png"
          alt="The Chefs Culinary Logo"
          width={70}
          height={70}
        />
        <nav>
          <ul className="flex space-x-4 text-sm font-medium">
            {/* <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li> */}
            <li>
              <Link href="/browse">school</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="/shop">shop</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div>
          <section
            className="hero flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat min-h-screen"
            style={{ backgroundImage: `url('/bgpix.png')`, height: "20vh" }}
          >
            <h1 className="text-5xl font-bold text-white mb-8 animate-bounce">
              Unlock your culinary potential
            </h1>
            <p className="text-lg text-gray-300 mb-8 ">
              Join The Chefs Culinary Academy and learn from world-renowned
              chefs.
            </p>
            <a
              href="/browse"
              className="rounded-full bg-orange-500 text-white px-4 py-2"
            >
              Explore Courses
            </a>
          </section>
        </div>


        <div className="flex items-center justify-between mt-20 ">
          <section className="features sm:flex-row">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Why choose The Chefs Culinary Academy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-gray-800 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-down-right"
                  >
                    <path d="m7 7 10 10" />
                    <path d="M17 7v10H7" />
                  </svg>
                </svg>
                <p className="text-lg text-gray-600">
                  100+ Master classes from award-winning chefs
                </p>
              </div>
              {/* Additional feature items can go here */}
            </div>
          </section>

          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/n6lT7bR062c?si=RHy3Ytpyewt_ZJw2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="benefits">
          <section className="mt-20 sm:flex-row">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              The Benefits of Learning with Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center shadow-md">
                <div>
                  <h2 className="font-mono">Flexible</h2>
                  <Shuffle className="w-12 h-12 mb-4 text-orange-600 rounded-full bg-orange-100 p-1" />
                </div>
                <p className="text-lg text-gray-600 ">
                  Learn at your own pace, anytime, anywhere
                </p>
              </div>
              <div className="flex flex-col items-center shadow-md">
                <h2 className="font-mono">Mentorship</h2>
                <Book className="w-12 h-12 mb-4 text-orange-600 rounded-full bg-orange-100 p-1" />
                <p className="text-lg text-gray-600 ">
                  Get guidance from renowned culinary professionals
                </p>
              </div>
              <div className="flex flex-col items-center shadow-md">
                <h1 className="font-mono">Meet people</h1>
                <Webcam className="w-12 h-12 mb-4 text-orange-600 rounded-full bg-orange-100 p-1" />
                <p className="text-lg text-gray-600">
                  Connect with food lovers from around the world
                </p>
              </div>
              <div className="flex flex-col items-center shadow-md">
                <h1 className="font-mono">Pro Chef</h1>
                <ChefHat className="w-12 h-12 mb-4 text-orange-600 rounded-full bg-orange-100 p-1" />
                <p className="text-lg text-gray-600">
                  Gain skills to boost your culinary career
                </p>
              </div>
              <div className="flex flex-col items-center shadow-md">
                {/* <h1>Recipes</h1>
                <CookingPot className="w-12 h-12 mb-4 text-orange-600 rounded-full bg-orange-100 p-1"/> */}
                <p className="text-lg text-gray-600">
                  Elevate your meals: Dive into our culinary library
                </p>
                <a
                  href="/browse"
                  className="rounded-full bg-orange-600 text-white px-4 py-2"
                >
                  Explore Courses
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="testimonials">
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <p className="text-lg font-medium text-gray-800">
                  The Chefs Culinary Academy has completely transformed my
                  cooking skills. I've learned so much from the expert chefs,
                  and the community is incredibly supportive. I'm so glad I
                  joined this amazing academy!
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="/hannah.jpg"
                    alt="Testimonial photo"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Hannah Chindah
                    </p>
                    <p className="text-sm text-gray-400">Amateur Cook</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-md">
                <p className="text-lg font-medium text-gray-800">
                Forget everything you thought you knew about cooking! The Chefs Culinary Academy took me from burnt toast to Michelin-worthy meals. The structured curriculum and hands-on experience with culinary masters leveled up my skills.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="/jerry.jpeg"
                    alt="Testimonial photo"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Jeremiah Chinonso
                    </p>
                    <p className="text-sm text-gray-400">Pro Cook</p>
                  </div>
                </div>
              </div>
              
              {/* ...more testimonials... */}
            </div>
          </section>
        </div>

        <div className="cta mt-20">
          <section className="bg-gray-800 text-white py-20 px-20">
            <h2 className="text-2xl font-bold mb-4">
              Ready to start your culinary journey?
            </h2>
            <p className="text-lg mb-4">
              Enroll in our courses today and unlock your potential.
            </p>
            <a
              href="/browse"
              className="rounded-full bg-orange-600 text-white px-8 py-4"
            >
              Explore Courses
            </a>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-20 px-20 flex flex-col items-center justify-between sm:flex-row">
      <div className="mb-4 sm:mb-0">
        <h4 className="text-xl font-bold mb-2">The Chefs Culinary Academy</h4>
        <p className="text-sm">
          Unlock your culinary potential and make a difference.
        </p>
        <div className="mt-8">
          <Link href="/" className="text-white hover:text-gray-400">
            Homepage
          </Link>
          <Link href="/about" className="ml-4 text-white hover:text-gray-400">
            About Us
          </Link>
          <Link href="/blog" className="ml-4 text-white hover:text-gray-400">
            Blog
          </Link>
          <Link href="/browse" className="ml-4 text-white hover:text-gray-400">
            School
          </Link>
          <Link href="/shop" className="ml-4 text-white hover:text-gray-400">
            Shop
          </Link>
        </div>
        <p className="mt-4 text-sm">
          © 2023 The Chefs Culinary Academy. All rights reserved.
        </p>
      </div>
      <div className="flex items-center">
        <a href="https://www.facebook.com/thechefsculinaryphc?mibextid=9R9pXO" className="text-white hover:text-gray-400" target="_blank">
        <Facebook className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24" />
          
        </a>
        <a href="https://www.facebook.com/profile.php?id=100083003779235&mibextid=ZbWKwL" className="ml-4 text-white hover:text-gray-400" target="_blank">
        <Instagram className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24" />
        </a>
        <a href="#" className="ml-4 text-white hover:text-gray-400" target="_blank">
        <X className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24" />
        </a>
      </div>
    </footer>
    </div>
  );
}

export default LandingPage;

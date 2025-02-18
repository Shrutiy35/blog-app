// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
//         <p className="text-lg text-gray-600">
//           Welcome to our blog! Here’s a little about us.
//         </p>
//       </header>

//       <section className="mb-12">
//         <h2 className="text-3xl font-semibold text-center mb-6">Our Story</h2>
//         <p className="text-gray-600 text-center max-w-2xl mx-auto">
//           We started this blog to share our passion for writing and to connect
//           with like-minded individuals. Our goal is to provide valuable
//           insights, tips, and stories that inspire and inform our readers.
//         </p>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-3xl font-semibold text-center mb-6">
//           Meet the Team
//         </h2>
//         <div className="flex flex-wrap justify-center">
//           {teamMembers.map((member) => (
//             <div
//               key={member.name}
//               className="bg-white shadow-lg rounded-lg p-6 m-4 w-64 text-center"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-24 h-24 rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-xl font-semibold">{member.name}</h3>
//               <p className="text-gray-500">{member.position}</p>
//               <p className="text-gray-600">{member.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-white p-8 rounded-lg shadow-md mb-12">
//         <h2 className="text-3xl font-semibold text-center mb-4">Our Mission</h2>
//         <p className="text-gray-600 text-center">
//           To create a community of readers and writers who share knowledge,
//           experiences, and inspiration.
//         </p>
//       </section>

//       <footer className="text-center">
//         <p className="text-gray-600">
//           &copy; 2023 Your Blog Name. All rights reserved.
//         </p>
//         <div className="flex justify-center mt-4">
//           <a href="#" className="text-blue-600 mx-2">
//             Facebook
//           </a>
//           <a href="#" className="text-blue-600 mx-2">
//             Twitter
//           </a>
//           <a href="#" className="text-blue-600 mx-2">
//             Instagram
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// const teamMembers = [
//   {
//     name: "John Doe",
//     position: "Founder & Writer",
//     description: "Passionate about storytelling and sharing experiences.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     name: "Jane Smith",
//     position: "Editor",
//     description: "Loves to refine and polish content for our readers.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     name: "Emily Johnson",
//     position: "Content Creator",
//     description: "Enjoys creating engaging and informative articles.",
//     image: "https://via.placeholder.com/150",
//   },
// ];

// export default AboutUs;
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Welcome to Our Multi-Topic Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Your one-stop destination for Devotion, Entertainment, Technology,
            and more
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Blog Introduction */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                About Our Blog
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We bring you a diverse range of content spanning spiritual
                wisdom, entertainment updates, and technological innovations.
                Our platform serves as a bridge between different interests,
                making knowledge and entertainment accessible to everyone.
              </p>
            </div>

            {/* What to Expect */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our blog covers a wide spectrum of topics:
                <ul className="list-disc pl-5 mt-2">
                  <li>Spiritual & Devotional Content</li>
                  <li>Entertainment News & Reviews</li>
                  <li>Technology Trends & Updates</li>
                  <li>Lifestyle & Culture</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Blog Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Categories
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {["Devotional", "Entertainment", "Finance", "Tech News"].map(
                (category, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
                  >
                    <span className="text-gray-800 dark:text-gray-200">
                      {category}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Admin Features Section */}
          <div className="mt-16 bg-indigo-50 dark:bg-gray-800 rounded-xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                For Content Creators
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Are you a writer or content creator? Join our platform and:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Create
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Publish your articles with our user-friendly dashboard
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Manage
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Update and organize your content efficiently
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Engage
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Connect with readers and grow your audience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Subscribe to receive the latest updates from all categories
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-4 flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have content to share or want to collaborate?
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 hover:bg-indigo-50 transition duration-300"
              >
                Submit Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <p className="text-lg text-gray-600 text-center mb-10">
          Welcome to Readers' Cave, your ultimate destination for discovering, discussing, and diving deep into the world of books.
        </p>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to create a vibrant community of readers where every book lover feels at home. We aim to inspire, connect, and ignite a passion for reading in people of all ages and backgrounds.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Book reviews and recommendations</li>
            <li>Reading lists and challenges</li>
            <li>Author interviews and guest posts</li>
            <li>Community forums and book clubs</li>
            <li>Personalized book suggestions</li>
          </ul>
        </div>

        {/* Our Story */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600">
            Readers' Cave started as a passion project driven by a love for books and a desire to share that love with others. Our journey has been one of connecting with readers and building a space where everyone can explore new literary adventures.
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <p className="text-gray-600">
            We believe in inclusivity, diversity, a love for literature, and fostering a supportive community where all voices are heard.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
          <p className="text-gray-600">
            Our dedicated team of book enthusiasts is here to guide you through your reading journey, sharing their favorite books and insights along the way.
          </p>
        </div>

        {/* Community Focus */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Focus</h2>
          <p className="text-gray-600">
            Readers' Cave is more than just a website—it's a community. Join the conversation, share your thoughts, and become part of our growing family of readers.
          </p>
        </div>

        {/* Why Readers’ Cave? */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Readers’ Cave?</h2>
          <p className="text-gray-600">
            What sets us apart is our commitment to personalized recommendations and interactive features that make your reading experience truly unique.
          </p>
        </div>

        {/* Join Us */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
          <p className="text-gray-600">
            Ready to dive in? Sign up, subscribe to our newsletter, and follow us on social media to stay updated with the latest from Readers' Cave.
          </p>
        </div>

        {/* Contact Us */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions, suggestions, or just want to say hello? Get in touch with us—we’d love to hear from you!
          </p>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testimonials</h2>
          <p className="text-gray-600 italic">
            "Readers' Cave is a haven for book lovers! The community is warm, welcoming, and full of great book recommendations." - Satisfied Reader
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
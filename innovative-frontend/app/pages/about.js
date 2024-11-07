// Create a New Page: Create a new file pages/about.js for an About page:

const About = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">About Page</h1>
        <p className="text-lg mt-4">
          Welcome to the About Page! Here you can learn more about our mission,
          our team, and what we do.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-base mt-2">
            Our mission is to provide high-quality services and products to our
            customers. We strive to make a positive impact on the world through
            innovation and excellence.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="text-base mt-2">
            Our team consists of dedicated professionals who are passionate about
            their work. We value diversity, collaboration, and continuous learning.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <p className="text-base mt-2">
            We specialize in [describe your services or products here]. Our goal
            is to deliver exceptional value to our clients and make a difference
            in their lives.
          </p>
        </div>
      </div>
    );
  };

  export default About;

function Contact() {
  return (
    <div className="min-h-[90vh] flex flex-col text-white mb-0 justify-center items-center">
      <div className=" m-[50px] p-8 bg-custom-nav rounded-lg shadow-2xl sm:mb-0 sm:m-[100px]  text-center w-[90vw] ">  
      <h1 className="text-5xl font-bold mb-6 text-center about heading">Contact Us</h1>  
     <div className="flex flex-col lg:flex-row w-[100%] items-center justify-center gap-4">
      <div className=" p-8 rounded-lg   max-w-lg mb-8 shadow-2xl text-center bg-[rgb(18 26 47)] ">
        <p className="text-lg mb-4 text-center text-gray-100">Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p className="text-lg mb-4 text-center text-gray-100">Phone: +1 (123) 456-7890</p>
        <p className="text-lg mb-6 text-center text-gray-100">Email: info@springdale.edu</p>
        <form>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-100">Name</label>
            <input type="text" className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-black" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-100">Email</label>
            <input type="email" className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-black" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-100">Message</label>
            <textarea className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 h-40 text-black"></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white p-3 rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 transition duration-300">Submit</button>
        </form>
      </div>
      <div className="w-full max-w-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867912751787!2d144.95592341550538!3d-37.81627974200406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sau!4v1621604764873!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          title="Map Location"
        ></iframe>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;

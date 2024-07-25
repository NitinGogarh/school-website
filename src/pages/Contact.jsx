
function Contact() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@springdale.edu</p>
        <form className="mt-4">
          <div>
            <label className="block">Name</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div className="mt-4">
            <label className="block">Email</label>
            <input type="email" className="border p-2 w-full" />
          </div>
          <div className="mt-4">
            <label className="block">Message</label>
            <textarea className="border p-2 w-full"></textarea>
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white p-2">Submit</button>
        </form>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867912751787!2d144.95592341550538!3d-37.81627974200406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sau!4v1621604764873!5m2!1sen!2sau"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default Contact;
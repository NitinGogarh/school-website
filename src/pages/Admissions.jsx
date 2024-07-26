function Admissions() {
  return (
    <div className="min-h-screen flex flex-col text-white mb-0">
      <div className=" m-[50px] p-8 bg-custom-nav rounded-lg shadow-2xl sm:mb-0 sm:m-[100px] ">
        <h1 className="text-5xl font-bold mb-6 text-center about">Admissions</h1>
        <p className="text-lg mb-6 leading-relaxed">
          Welcome to Springdale Public School! We are excited to open our doors to new students and families. Our admission process is designed to be straightforward and transparent, ensuring a smooth transition for your child.
        </p>
        
        <div className="text-lg mb-6  leading-relaxed">
          <h2 className="text-3xl font-semibold mb-4 subH">Admission Process</h2>
          <p>
            Admission forms are available for download from our website or can be collected from the school office. Once the form is completed, submit it along with the required documents to the school office.
          </p>
          <p className="mt-4">
            Our admission team is here to assist you through every step of the process. Feel free to reach out to us for any queries or guidance.
          </p>
        </div>
        
        <div className="text-lg mb-6  leading-relaxed">
          <h2 className="text-3xl font-semibold mb-4 subH">Criteria</h2>
          <p>
            Admissions are based on merit and the availability of seats. Entrance tests may be conducted for certain grades to assess the child academic level and ensure appropriate placement.
          </p>
          <p className="mt-4">
            We strive to create a diverse and inclusive environment where every student has the opportunity to excel. Our criteria are designed to identify students who will benefit from and contribute to our school community.
          </p>
        </div>
        
        <div className="text-lg mb-6  leading-relaxed">
          <h2 className="text-3xl font-semibold mb-4 subH">Important Dates</h2>
          <ul className="list-disc ml-8">
            <li className="mb-2">Admission Form Availability: March 1st</li>
            <li className="mb-2">Last Date for Submission: March 31st</li>
            <li className="mb-2">Entrance Test: April 15th</li>
            <li className="mb-2">Announcement of Results: April 30th</li>
          </ul>
        </div>
        
        <div className="text-lg mb-6  leading-relaxed">
          <h2 className="text-3xl font-semibold mb-4 subH">Required Documents</h2>
          <p>
            When submitting the admission form, please ensure that the following documents are included:
          </p>
          <ul className="list-disc ml-8 mt-4">
            <li className="mb-2">Birth Certificate</li>
            <li className="mb-2">Previous School Records</li>
            <li className="mb-2">Transfer Certificate (if applicable)</li>
            <li className="mb-2">Passport-sized Photographs</li>
          </ul>
        </div>
        
        <div className="text-lg mb-6  leading-relaxed">
          <h2 className="text-3xl font-semibold mb-4 subH">Contact Information</h2>
          <p>
            For any questions regarding the admission process, please contact our admission office:
          </p>
          <p className="mt-4">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="mt-2">
            <strong>Email:</strong> admissions@springdale.edu
          </p>
          <p className="mt-4">
            We look forward to welcoming you to the Springdale Public School community!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admissions;

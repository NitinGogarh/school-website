function Admissions() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Admissions</h1>
        <p>Admission Process: Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <p className="mt-4">Criteria: Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        <p className="mt-4">Important Dates:</p>
        <ul className="list-disc ml-8">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </div>
    );
  }
  
  export default Admissions;
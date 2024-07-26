



function About() {
  return (
    <div className="min-h-screen flex flex-col text-white mb-0">
      <div className=" m-[50px] p-8 bg-custom-nav rounded-lg shadow-2xl sm:mb-0 sm:m-[100px] ">
        <h1 className="text-5xl font-bold mb-6 text-center about">About Us</h1>
        
        <p className="text-lg mb-6  leading-relaxed">
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. Our commitment to academic excellence, innovation, and nurturing young minds sets us apart as a leading educational institution.
        </p>
        
        <div className="text-lg mb-6 leading-relaxed">
          <h2 className="text-3xl font-semibold mb-4 subH">Vision</h2>
          <p>
            Our vision is to create a dynamic learning environment that fosters academic excellence, critical thinking, and ethical values. We aim to cultivate well-rounded individuals who are prepared to make meaningful contributions to society.
          </p>
          <p className="mt-4">
            At Springdale Public School, we believe in the power of education to transform lives and communities. Our vision is driven by a commitment to continuous improvement and innovation, ensuring that our students are equipped with the skills and knowledge needed for the future.
          </p>
        </div>
        
        <div className="text-lg mb-6  leading-relaxed">
          <h2 className="text-3xl font-semibold mb-4 subH">Mission</h2>
          <p>
            Our mission is to empower students with the knowledge, skills, and values needed to thrive in a dynamic world. We provide a supportive and inclusive learning environment that encourages personal growth and lifelong learning.
          </p>
          <p className="mt-4">
            Through a balanced curriculum and diverse extracurricular activities, we strive to develop well-rounded individuals who are confident, capable, and compassionate. Our mission is to nurture the potential of every student and prepare them for a successful future.
          </p>
        </div>
        
        <div className="text-lg mb-6  leading-relaxed">
          <h2 className="text-3xl font-semibold mb-4 subH">Principal's Message</h2>
          <p>
            Welcome to Springdale Public School! At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated faculty and staff are committed to providing a high-quality education that promotes academic excellence and personal growth.
          </p>
          <p className="mt-4">
            As the principal, I am proud to lead an institution that values integrity, respect, and continuous learning. We encourage our students to dream big, work hard, and develop the skills and character needed to make a positive impact in the world.
          </p>
          <p className="mt-4">
            Thank you for choosing Springdale Public School. Together, we can achieve great things and create a brighter future for our students.
          </p>
          <p className="mt-4 text-right italic">- Nitin Gogarh</p>
        </div>
        
        <div className="text-lg mb-6  leading-relaxed">
          <h2 className="text-3xl font-semibold mb-4 subH">Infrastructure and Facilities</h2>
          <p>
            Springdale Public School offers state-of-the-art infrastructure and facilities to support the academic and extracurricular needs of our students. Our campus is designed to provide a safe, comfortable, and stimulating environment for learning and growth.
          </p>
          <ul className="list-disc ml-8 mt-4">
            <li className="mb-2">State-of-the-art science and computer labs equipped with the latest technology</li>
            <li className="mb-2">Spacious and well-equipped classrooms that foster collaborative learning</li>
            <li className="mb-2">Library with a vast collection of books, digital resources, and study spaces</li>
            <li className="mb-2">Sports facilities including a playground, gymnasium, swimming pool, and sports fields</li>
            <li className="mb-2">Modern auditorium for school events, performances, and assemblies</li>
            <li className="mb-2">Dedicated art and music rooms to encourage creativity and artistic expression</li>
            <li className="mb-2">Comfortable and secure transportation services for students</li>
          </ul>
          <p className="mt-4">
            Our facilities are continuously upgraded to ensure that our students have access to the best resources and opportunities. We believe that a well-rounded education includes not only academic excellence but also the development of physical, artistic, and social skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;






function About() {
  return (
    <div className="min-h-full flex flex-col text-white mb-0 justify-center items-center">
      <div className=" m-[50px] p-8 bg-custom-nav rounded-lg shadow-2xl sm:mb-0 sm:m-[100px] lg:max-w-[70%] text-center ">
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
          <p className="mt-4 sm:visible hidden">
            As the principal, I am proud to lead an institution that values integrity, respect, and continuous learning. We encourage our students to dream big, work hard, and develop the skills and character needed to make a positive impact in the world.
          </p>
          <p className="mt-4 sm:visible hidden">
            Thank you for choosing Springdale Public School. Together, we can achieve great things and create a brighter future for our students.
          </p>
          <p className="mt-4 text-right italic">- Nitin Gogarh</p>
        </div>
        
       
      </div>
    </div>
  );
}

export default About;


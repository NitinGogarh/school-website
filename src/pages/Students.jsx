function Students() {
  return (
    <div className="min-h-screen flex flex-col text-white mb-0 ">
    <div className=" m-[50px] p-8 bg-custom-nav rounded-lg shadow-2xl sm:mb-0 sm:m-[100px] flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold mb-6 text-center about">Student Life at Springdale</h1>
      
      <section className="mb-8 ml-8">
        <h2 className="text-3xl font-semibold mb-4 subH">Extracurricular Activities</h2>
        <p className="text-lg mb-4 ">
          At Springdale, we believe in a holistic education that extends beyond the classroom. Our students actively participate in a range of extracurricular activities that foster creativity, teamwork, and personal growth.
        </p>
        <ul className="list-disc ml-8 ">
          <li>Music: Choir, Band, Orchestra</li>
          <li>Dance: Ballet, Hip-Hop, Contemporary</li>
          <li>Drama: School Plays, Improv Troupe</li>
          <li>Art: Painting, Sculpture, Photography</li>
          <li>Sports: Football, Basketball, Tennis, Swimming</li>
          <li>Robotics: Competitions, Workshops</li>
          <li>Debate Club: Public Speaking, Competitions</li>
          <li>Science Club: Experiments, Field Trips</li>
        </ul>
      </section>
      
      <section className="mb-8 ">
        <h2 className="text-3xl font-semibold mb-4 subH">Clubs and Societies</h2>
        <p className="text-lg mb-4 ">
          Our clubs and societies provide students with opportunities to explore their interests, develop leadership skills, and make lifelong friendships.
        </p>
        <ul className="list-disc ml-8 ">
          <li>Literary Society: Creative Writing, Poetry</li>
          <li>Environmental Club: Sustainability Projects, Clean-Up Drives</li>
          <li>Astronomy Club: Stargazing, Space Exploration</li>
          <li>Coding Club: Programming, App Development</li>
        </ul>
      </section>
      
      <section className="mb-8 ">
        <h2 className="text-3xl font-semibold mb-4 subH">Achievements</h2>
        <p className="text-lg mb-4">
          We take pride in our students' accomplishments both academically and in various competitions. Here are some of our recent standout achievers:
        </p>
        <ul className="list-disc ml-8  ">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </section>
      
      <section className="mb-8 ml-8">
        <h2 className="text-3xl font-semibold mb-4 subH">Student Council</h2>
        <p className="text-lg mb-4 ">
          Our Student Council plays a crucial role in representing the student body and organizing various school events and initiatives. Meet the current council members:
        </p>
        <ul className="list-disc ml-8 ">
          <li>President: Amy Parker, Grade 12 - Leading with vision and dedication</li>
          <li>Vice President: Rajiv Mehta, Grade 11 - Fostering collaboration and engagement</li>
          <li>Secretary: Lisa Wong, Grade 10 - Organizing meetings and keeping records</li>
        </ul>
      </section>
      
      <section className="text-center ml-8">
        <h2 className="text-3xl font-semibold mb-4 subH">Join Us!</h2>
        <p className="text-lg  mb-4">
          At Springdale, every student is encouraged to get involved, explore their passions, and contribute to our vibrant community. We welcome you to be a part of our exciting student life!
        </p>
        <a href="#apply" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Apply Now
        </a>
      </section>
    </div>
    </div>
  );
}

export default Students;

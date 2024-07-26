function Faculty() {
  const facultyMembers = [
    {
      name: "John Doe",
      position: "Principal",
      qualification: "M.Ed",
      experience: "20 years",
      bio: "Experienced in educational administration with a focus on student development and curriculum enhancement.",
      image: "assets/face.png"
    },
    {
      name: "Jane Smith",
      position: "Vice Principal",
      qualification: "M.Sc. in Physics",
      experience: "15 years",
      bio: "Passionate about teaching Physics and dedicated to fostering a love for science in students.",
      image: "assets/face.png"
    },
    {
      name: "Emily Johnson",
      position: "English Teacher",
      qualification: "M.A. in English",
      experience: "10 years",
      bio: "Skilled in literature and language arts, Emily aims to inspire creativity and critical thinking.",
      image: "assets/face.png"
    },
    {
      name: "Michael Brown",
      position: "Mathematics Teacher",
      qualification: "M.Sc. in Mathematics",
      experience: "8 years",
      bio: "Specializes in making complex mathematical concepts accessible and engaging for students.",
      image: "assets/face.png"
    },
    {
      name: "Sophia Davis",
      position: "Science Teacher",
      qualification: "M.Sc. in Chemistry",
      experience: "12 years",
      bio: "Committed to hands-on learning and experimental science education.",
      image: "assets/face.png"
    },
    {
      name: "David Wilson",
      position: "Computer Science Teacher",
      qualification: "B.Tech in Computer Science",
      experience: "5 years",
      bio: "Focused on teaching modern computing and coding skills, preparing students for the digital world.",
      image: "assets/face.png"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col text-white mb-0 ">
      <div className=" m-[50px] p-8 bg-custom-nav rounded-lg shadow-2xl sm:mb-0 sm:m-[100px] flex justify-center items-center flex-col facultyParent">
        <h1 className="text-5xl font-bold mb-6 text-center about">Faculty</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-[80%] faculty">
          {facultyMembers.map((member, index) => (
            <div key={index} className=" p-6 rounded-lg shadow-2xl text-center bg-[rgb(18 26 47)]">
              <img src={member.image} alt={`${member.name}`} className="w-full h-48  rounded-[50%] mb-4 bg-[rgb(18 26 47)] profile" />
              <h2 className="text-2xl font-bold subH2 mb-2">{member.name}</h2>
              <h3 className="text-xl text-gray-200 mb-2">{member.position}</h3>
              <p className="text-gray-200 mb-2">{member.qualification}</p>
              <p className="text-gray-200 mb-2">Experience: {member.experience}</p>
              <p className="text-gray-200">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faculty;



const Academics = () => {
  return (
    <div className="flex flex-col w-full relative items-center justify-center">  
      <img 
        src="/assets/band.png" 
        alt="Background" 
        className="max-w-[50%] m-auto" 
      />

    
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="text-white text-4xl font-bold heading absolute top-6 acaHeading">Academics</div>
      </div>

      <ul className="parentClass w-[60vw] m-auto">
        <li  className="liClass">
          <img src="/assets/Pre-Primary.png" alt="" />
        <h3  className="acaDes"> INDIA'S BEST PRE - PRIMARY SCHOOL | Springdale Public School</h3>
        </li>
        <li  className="liClass">
          <img src="/assets/Primary.png" alt="" />
        <h3  className="acaDes"> INDIA'S BEST PRIMARY SCHOOL EDUCATION PROVIDER |Springdale Public School</h3>
        </li>
        <li  className="liClass">
          <img src="/assets/Middle-School.png" alt="" />
        <h3  className="acaDes"> INDIA'S BEST MIDDLE SCHOOL EDUCATION | Springdale Public School</h3>
        </li>
        <li  className="liClass">
          <img src="/assets/Secondary.png" alt="" />
        <h3  className="acaDes"> SECONDARY SCHOOL EDUCATION PROVIDER | Springdale Public School</h3>
        </li>
        <li  className="liClass">
          <img src="/assets/Higher-Secondary.png" alt="" />
        <h3  className="acaDes"> INDIA'S BEST HIGHER SECONDARY SCHOOL | Springdale Public School</h3>
        </li>
      </ul>

    </div>
  );
}

export default Academics;


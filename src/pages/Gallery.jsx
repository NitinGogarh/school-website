function Gallery() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <img src="https://via.placeholder.com/150" alt="Sports Day" />
            <p>Students participating in various sports events.</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Science Exhibition" />
            <p>Students presenting their science projects.</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Cultural Fest" />
            <p>Students performing in the cultural fest.</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Classroom" />
            <p>A glimpse of our interactive classrooms.</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Library" />
            <p>Students reading and studying in the school library.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Gallery;
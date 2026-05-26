import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function App() {
  // State for projects
  const [projects, setProjects] = useState([]);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");

  // Load data from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Add project
  const addProject = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      title,
      description,
      year,
    };

    setProjects([...projects, newProject]);

    // Clear form
    setTitle("");
    setDescription("");
    setYear("");
  };

  // Clear all projects
  const clearPortfolio = () => {
    setProjects([]);
    localStorage.removeItem("projects");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Creator Portfolio</h1>

      {/* Form */}
      <form onSubmit={addProject}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Project</button>
      </form>

      <br />

      <button onClick={clearPortfolio}>
        Clear Portfolio
      </button>

      <hr />

      {/* Conditional Rendering */}
      {projects.length === 0 ? (
        <h3>
          You haven't added any projects to your portfolio yet!
        </h3>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              year={project.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
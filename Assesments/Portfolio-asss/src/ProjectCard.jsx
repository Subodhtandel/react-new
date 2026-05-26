function ProjectCard({ title, description, year }) {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>{year}</small>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
};

export default ProjectCard;
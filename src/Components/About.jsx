import { useState } from 'react';

const team = [
  { name: "Alice", role: "Frontend Developer", bio: "Loves building UI with React." },
  { name: "Bob", role: "Backend Developer", bio: "Passionate about APIs and databases." },
  { name: "Charlie", role: "Designer", bio: "Crafts user-centric designs." }
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h2>Meet the Team 👥</h2>
      {team.map((member, index) => (
        <div key={index} style={{ borderBottom: "1px solid #ddd", marginBottom: "1rem", paddingBottom: "1rem" }}>
          <h3 style={{ cursor: "pointer" }} onClick={() => toggle(index)}>
            {member.name} - {member.role}
          </h3>
          {openIndex === index && <p style={{ marginTop: "0.5rem", color: "#555" }}>{member.bio}</p>}
        </div>
      ))}
    </div>
  );
};

export default About;

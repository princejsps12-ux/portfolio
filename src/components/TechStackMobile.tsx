import "./styles/TechStackMobile.css";

const logos = [
  { src: "/images/react2.webp", name: "React" },
  { src: "/images/next2.webp", name: "Next.js" },
  { src: "/images/typescript.webp", name: "TypeScript" },
  { src: "/images/javascript.webp", name: "JavaScript" },
  { src: "/images/node2.webp", name: "Node.js" },
  { src: "/images/express.webp", name: "Express" },
  { src: "/images/mongo.webp", name: "MongoDB" },
  { src: "/images/mysql.webp", name: "PostgreSQL" },
];

const TechStackMobile = () => {
  return (
    <div className="techstack-mobile">
      <h2>My Techstack</h2>
      <div className="techstack-mobile-grid">
        {logos.map((logo) => (
          <div className="techstack-mobile-tile" key={logo.name}>
            <img src={logo.src} alt={logo.name} loading="lazy" />
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackMobile;

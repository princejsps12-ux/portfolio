import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Runner-up — Smart India Hackathon</h4>
                <h5>Government of India</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Finished as runner-up at India's largest student innovation
              hackathon, solving a problem statement from a national ministry.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Finalist — GFG x Vultr Hackathon & MUJ HackX</h4>
                <h5>GeeksforGeeks · Manipal University Jaipur</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Qualified to the finals of two national-level hackathons,
              shipping working full-stack prototypes under tight deadlines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Information Technology</h4>
                <h5>Manipal University Jaipur — GPA 7.39/10</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing my Bachelor's (expected July 2027), focused on
              DSA, DBMS and OOP while building production-grade side projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

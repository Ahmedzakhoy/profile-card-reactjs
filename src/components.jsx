import { skills } from "./util/data";

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export function Avatar() {
  return <img className="avatar" src="ahmed.jpg" alt="Ahmed Mustafa" />;
}

export function Intro() {
  return (
    <div>
      <h1>Ahmed Mustafa</h1>
      <p>
        self-taught frontend web developer who has went through many courses on
        udemy and did more than a dozen of projects. eager to learn more and
        step up in the path of web development.
      </p>
    </div>
  );
}

export function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

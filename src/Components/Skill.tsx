import classes from "./Skill.module.css";

const Skill = ({ children, skill }: any) => {
  return (
    <div className={classes.card}>
      <div className={classes.logo}>{children}</div>
      <p className={classes.skill}>{skill}</p>
    </div>
  );
};

export default Skill;

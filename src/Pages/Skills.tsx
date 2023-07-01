import classes from "./Skills.module.css";
import { DiSass, DiReact, DiMongodb, DiJava } from "react-icons/di";
import {
  SiTypescript,
  SiFirebase,
  SiJavascript,
  SiKotlin,
  SiGooglecloud,
} from "react-icons/si";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { TbLetterE } from "react-icons/tb";
import { GrMysql, GrHeroku } from "react-icons/gr";

import Skill from "../Components/Skill";

const Skills = () => {
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.skillsContainer}>
          <h1>Skills</h1>

          <h2>Frontend development</h2>
          <div className={classes.skillsGroup}>
            <Skill skill="JavaScript 6">
              <SiJavascript className={classes.JS} />
            </Skill>
            <Skill skill="Typescript">
              <SiTypescript className={classes.typescript} />
            </Skill>
            <Skill skill="React">
              <DiReact className={classes.react} />
            </Skill>
            <Skill skill="Sass">
              <DiSass className={classes.sass} />
            </Skill>
          </div>

          <h2>Mobile development</h2>
          <div className={classes.skillsGroup}>
            <Skill skill="React Native">
              <DiReact className={classes.reactnative} />
            </Skill>
            <Skill skill="Kotlin">
              <SiKotlin className={classes.kotlin} />
            </Skill>
            <Skill skill="Java">
              <DiJava className={classes.java} />
            </Skill>
          </div>

          {/* <h2>Control Version</h2>
          <div className={classes.skillsGroup}>
            <Skill skill="Git">
              <BsGit className={classes.git} />
            </Skill>
            <Skill skill="GitHub">
              <AiFillGithub className={classes.github} />
            </Skill>
          </div> */}

          <h2>Backend development & Databases</h2>
          <div className={classes.skillsGroup}>
            <Skill skill="NodeJS">
              <FaNodeJs className={classes.nodeJS} />
            </Skill>
            <Skill skill="Express">
              <TbLetterE className={classes.express} />
            </Skill>
            <Skill skill="Realtime Database">
              <SiFirebase className={classes.realtimeDatabase} />
            </Skill>
            <Skill skill="MongoDB">
              <DiMongodb className={classes.mongoDB} />
            </Skill>
            <Skill skill="MySQL">
              <GrMysql className={classes.mysql} />
            </Skill>
          </div>

          <h2>Web Services</h2>
          <div className={classes.skillsGroup}>
            <Skill skill="AWS">
              <FaAws className={classes.aws} />
            </Skill>
            <Skill skill="Firebase">
              <SiFirebase className={classes.realtimeDatabase} />
            </Skill>
            <Skill skill="Heroku">
              <GrHeroku className={classes.heroku} />
            </Skill>
            <Skill skill="Google Cloud Platform">
              <SiGooglecloud className={classes.googlecloud} />
            </Skill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

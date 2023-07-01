import classes from "./Hero.module.css";

import image from "../assets/images/hero.png";

import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

import { RxDotFilled } from "react-icons/rx";

const Hero = () => {
  return (
    <div className={classes.section}>
      {/* <NavBar /> */}
      <div className={classes.container}>
        <div className={classes.left}>
          <h1>Angel Chapulin Vargas</h1>
          <h2>Web & mobile developer</h2>
          <br />
          <div>
            <RxDotFilled className={classes.dot} /> <p>Open to work</p>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.canvas}>
            <Canvas>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[1, 1, 1]} />
              <Sphere args={[1.1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="#111"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
          </div>
          <div className={classes["align-items"]}>
            <img className={classes.image} src={image} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

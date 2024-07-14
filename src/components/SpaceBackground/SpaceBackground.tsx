import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { config } from "./config";
import "./SpaceBackground.css";

function SpaceBackground() {
   const initialize = useCallback(async (engine: Engine) => {
      await loadFull(engine);
   }, []);

   return <Particles init={initialize} options={config} className="space-bg" />;
}

export default SpaceBackground;

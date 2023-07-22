import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import green_engine from "../../assets/images/engine_green.png";
import orange_engine from "../../assets/images/engine_orange.png";
import light_red_engine from "../../assets/images/engine_light_red.png";
import red_engine from "../../assets/images/engine_red.png";
import dis_light from "../../assets/images/disable_headlight.png";
import headlight from "../../assets/images/headlight.png";
import seatbelt from "../../assets/images/seatbelt.png";
import dis_seatbelt from "../../assets/images/seatbelt_dis.png";
import unlock_door from "../../assets/images/door_not_locked.png";
import locked_door from "../../assets/images/locked_door.png";

const Speedometer: React.FC = () => {
  const barPercentage = 75;
  const carSpeed = 190;
  const fuelPrecentage = 80;
  const nitroPercentage = 70;

  const engineIntegrity = 90;
  const light = true;
  const belt = true;
  const door_locked = true;

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: 230,
          bottom: 0,
          right: 65,
        }}
      >
        <p
          style={{
            color: "#ffffff",
            fontSize: 11,
            position: "absolute",
            right: 9,
            top: 35,
            transform: "rotate(59deg)",
          }}
        >
          {fuelPrecentage}%
        </p>
        <p
          style={{
            color: "#ffffff",
            fontSize: 11,
            position: "absolute",
            left: 7,
            top: 40,
            transform: "rotate(-59deg)",
          }}
        >
          {nitroPercentage}%
        </p>
        <img
          src={
            engineIntegrity > 75
              ? green_engine
              : engineIntegrity > 50
              ? orange_engine
              : engineIntegrity > 0
              ? light_red_engine
              : red_engine
          }
          width={20}
          style={{ position: "absolute", bottom: 50, left: 60 }}
        />
        <img
          src={light ? headlight : dis_light}
          width={20}
          style={{ position: "absolute", bottom: 50, left: 93 }}
        />
        <img
          src={belt ? dis_seatbelt : seatbelt}
          width={20}
          style={{ position: "absolute", bottom: 50, left: 123 }}
        />
        <img
          src={door_locked ? locked_door : unlock_door}
          width={20}
          style={{ position: "absolute", bottom: 50, left: 151 }}
        />
        <CircularProgressbarWithChildren
          value={fuelPrecentage}
          strokeWidth={3}
          circleRatio={0.13}
          counterClockwise
          styles={buildStyles({
            rotation: 0.31,
            strokeLinecap: "butt",
            pathColor:
              fuelPrecentage > 25
                ? `rgba(255, 255, 255, 1)`
                : "rgba(255,36,0,1)",
            trailColor: "rgba(255, 255, 255, 0.2 )",
          })}
        >
          <CircularProgressbarWithChildren
            value={nitroPercentage}
            strokeWidth={3}
            circleRatio={0.13}
            styles={buildStyles({
              rotation: 0.68,
              strokeLinecap: "butt",
              pathColor: `rgba(255, 255, 255, 1)`,
              trailColor: "rgba(255, 255, 255, 0.2 )",
            })}
          >
            <div style={{ width: 200 }}>
              <CircularProgressbarWithChildren
                value={0}
                strokeWidth={4}
                circleRatio={0.5}
                styles={buildStyles({
                  rotation: 0.6751,
                  strokeLinecap: "butt",
                  trailColor: "rgba(255, 255, 255, 0.2 )",
                })}
              >
                <CircularProgressbarWithChildren
                  value={0}
                  strokeWidth={4}
                  circleRatio={0.056}
                  styles={buildStyles({
                    rotation: 0.19,
                    strokeLinecap: "butt",
                    trailColor: "rgba(255, 255, 255, 0.4 )",
                  })}
                >
                  <CircularProgressbarWithChildren
                    value={0}
                    strokeWidth={4}
                    circleRatio={0.055}
                    styles={buildStyles({
                      rotation: 0.26,
                      strokeLinecap: "butt",
                      trailColor: "rgba(255, 255, 255, 0.6 )",
                    })}
                  >
                    <CircularProgressbarWithChildren
                      value={barPercentage}
                      circleRatio={0.65}
                      strokeWidth={4}
                      styles={buildStyles({
                        pathTransitionDuration: 0.1,
                        rotation: 0.6751,
                        strokeLinecap: "butt",
                        pathColor: `rgba(255, 255, 255, 1)`,
                        trailColor: "rgba(255, 255, 255, 0  )",
                      })}
                    >
                      <div
                        style={{
                          position: "relative",
                          color: "white",
                        }}
                      >
                        <p
                          className="speedometer-value"
                          style={{
                            fontSize: 50,
                            margin: "0px 0px 0px 4px",
                          }}
                        >
                          {carSpeed}
                        </p>
                        <p style={{ margin: "-10px 0px 0px 26px" }}>KM/H</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  </CircularProgressbarWithChildren>
                </CircularProgressbarWithChildren>
              </CircularProgressbarWithChildren>
            </div>
          </CircularProgressbarWithChildren>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
};
export default Speedometer;

import React, { useState } from "react";

const GunStates: React.FC<any> = (prop: { data: any }) => {
  const [gunOut, setGunOut] = useState(true);
  const [gunName, setGunName] = useState("AP Pistol");
  const [gunAmmo, setGunAmmo] = useState({ clipAmmo: 16, magAmmo: 60 });

  return (
    <>
      {gunOut && (
        <div>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <div className="playerArsonal">
              <p
                style={{
                  marginTop: 30,
                  marginRight: 41,
                  fontSize: 16,
                  textAlign: "right",
                }}
              >
                {gunName}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <div className="playerAmmo">
              <p
                style={{
                  marginRight: 41,
                  fontSize: 14,
                  textAlign: "right",
                }}
              >
                {gunAmmo.clipAmmo}
                <span style={{ color: "#838383" }}>| {gunAmmo.magAmmo}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GunStates;

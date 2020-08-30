import React, { useEffect, useRef } from "react";
import "../styles/styles.css";
import branding from "../styles/branding";
import ScrollSnap from "scroll-snap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function callback() {
  console.log("Snapped");
}

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = document.getElementById("container");
    const snapObject = new ScrollSnap(element, branding.snapConfig);
    snapObject.bind(callback);
  }, []);

  return (
    <div id="container" ref={containerRef}>
      <div className="page first-page">
        <img
          src={require("../assets/HarinLong.jpg")}
          alt="Harin"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: "5%",
            width: "95%",
            height: "10px",
          }}
        >
          <img
            src={require("../assets/Down.gif")}
            alt="Down"
            style={{
              objectFit: "cover",
              height: "80px",
              width: "80px",
              color: "#ffffff",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "10%",
            width: "95%",
            height: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              height: "150px",
              borderRadius: 5,
              color: branding.black,
            }}
          >
            <p style={{ fontFamily: branding.FontMedium, fontSize: 36 }}>
              Harin (Hao) Wu <br />
              <p
                style={{
                  fontFamily: branding.FontRegular,
                  fontSize: 16,
                  color: branding.gray,
                }}
              >
                My Goals and Dreams
              </p>
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: "8%",
            width: "95%",
            height: "150px",
          }}
        >
          <NavLink to="/goals/life" style={branding.seeMoreButton}>SEE MORE</NavLink>
        </div>
        </div>
      <div className="page second-page">
        <img
          src={require("../assets/Code.png")}
          alt="Harin"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "10%",
            width: "95%",
            height: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              height: "150px",
              borderRadius: 5,
              color: branding.black,
            }}
          >
            <p style={{ fontFamily: branding.FontMedium, fontSize: 36 }}>
              Artificial General Intelligence<br />
              <p
                style={{
                  fontFamily: branding.FontRegular,
                  fontSize: 16,
                  color: branding.gray,
                }}
              >
                The Final Invention of Humanity
              </p>
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: "8%",
            width: "95%",
            height: "150px",
          }}
        >
          <NavLink to="/goals/agi" style={branding.seeMoreButton}>SEE MORE</NavLink>
        </div>
      
        </div>
      <div className="page third-page">
        <img
          src={require("../assets/Type1.jpg")}
          alt="Harin"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "10%",
            width: "95%",
            height: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              height: "150px",
              borderRadius: 5,
              color: branding.black,
            }}
          >
            <p style={{ fontFamily: branding.FontMedium, fontSize: 36 }}>
              Type 1 Civilization<br />
              <p
                style={{
                  fontFamily: branding.FontRegular,
                  fontSize: 16,
                  color: branding.gray,
                }}
              >
                Becoming a Planetary Civilization, Controlling All Energy on Earth
              </p>
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: "8%",
            width: "95%",
            height: "150px",
          }}
        >
          <NavLink to="/goals/typeI" style={branding.seeMoreButton}>SEE MORE</NavLink>
        </div>
      
      </div>
      <div className="page fourth-page">
        <img
          src={require("../assets/Infinity.jpg")}
          alt="Harin"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "10%",
            width: "95%",
            height: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              height: "150px",
              borderRadius: 5,
              color: branding.black,
            }}
          >
            <p style={{ fontFamily: branding.FontMedium, fontSize: 36 }}>
              Digital Conciousness<br />
              <p
                style={{
                  fontFamily: branding.FontRegular,
                  fontSize: 16,
                  color: branding.gray,
                }}
              >
                Understanding the Human Brain, Mind Uploading, Digital Immortality
              </p>
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: "8%",
            width: "95%",
            height: "150px",
          }}
        >
            <NavLink to="/goals/conciousness" style={branding.seeMoreButton}>SEE MORE</NavLink>
        </div>
      
      </div>
    </div>
  );
}

export default Home;

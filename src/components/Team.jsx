import React from "react";
import AddMember from "./TeamMember";

import "../Styles/TeamStyle.css";

// vous pouvez voir le composant AddMember pour faire ressortir d'autres parametres
// pour l'instant j'ai juste fait sortir le nom et l'image comme paramettre

function Team() {
  return (
    <div className="Team">
      <div className="shadow p-3" id="team-item">
        <AddMember
          faceimage={"/images/team/BAGUIAN.jpg"}
          name={"BAGUIAN Harouna"}
          propos={
            "Dans l'ère numérique, l'entrepreneur avisé sait que la digitalisation est la clé de l'excellence, et que l'intelligence artificielle est son alliée la plus précieuse."
          }
        />
      </div>
      <div className="shadow p-3" id="team-item">
        <AddMember
          faceimage={"/images/team/Ousseni_photo.jpg"}
          name={"OUEDRAOGO Ousseni"}
          propos={
            "À l'ère de la digitalisation et de l'intelligence artificielle, l'entrepreneur visionnaire sait que l'excellence n'est pas un objectif, mais un chemin continu vers l'innovation et la réussite."
          }
        />
      </div>
      <div className="shadow p-3" id="team-item">
        <AddMember
          faceimage={"/images/team/SALIF.jpg"}
          name={"SAOUADOGO Salifou"}
          propos={
            "L'entreprenariat moderne embrasse la digitalisation comme un catalyseur de l'excellence, tandis que l'intelligence artificielle lui ouvre de nouvelles frontières insoupçonnées."
          }
        />
      </div>
    </div>
  );
}

export default Team;

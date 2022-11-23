import React, { useState } from "react";
import "./infoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { ProfileModal } from "../ProfileModal/ProfileModal";
export const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="1.2rem" onClick={() => setModalOpened(true)} />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Sydney</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Google</span>
      </div>
      <button className="button-all b-logout">Logout</button>
    </div>
  );
};

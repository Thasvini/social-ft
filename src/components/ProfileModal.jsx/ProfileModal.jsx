import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import axios from "axios";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [worksAt, setWorksAt] = useState("");
  const [livesIn, setLivesIn] = useState("");
  const [country, setCountry] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:4000/user/update1", {
        firstName: firstName,
        lastName: lastName,
        worksAt: worksAt,
        livesIn: livesIn,
        country: country,
        relationshipStatus: relationshipStatus
      });
      console.log(response.data); 
      setModalOpened(false);
    } catch (error) {
      console.error("Failed to update user information:", error);
      
    }
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
          />

          <input
            type="text"
            className="infoInput"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            id="worksAt"
            placeholder="Works at"
            value={worksAt}
            onChange={(e) => setWorksAt(e.target.value)}
            autoComplete="organization"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIn"
            id="livesIn"
            placeholder="Lives in"
            value={livesIn}
            onChange={(e) => setLivesIn(e.target.value)}
            autoComplete="address-level1"
          />

          <input
            type="text"
            className="infoInput"
            name="country"
            id="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            autoComplete="country"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="relationshipStatus"
            placeholder="Relationship Status"
            value={relationshipStatus}
            onChange={(e) => setRelationshipStatus(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton" type="submit">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;

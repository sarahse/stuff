import React from "react";
import StuffCard from "./stuffCard";

const Stuff: React.FC = () => {
  return (
    <React.Fragment>
      <StuffCard onClick={() => console.log("stuff 1")}>Stuff 1</StuffCard>
      <StuffCard>Stuff 2</StuffCard>
      <StuffCard>Stuff 3</StuffCard>
    </React.Fragment>
  );
};

export default Stuff;

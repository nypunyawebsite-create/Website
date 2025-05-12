import React, { useState } from "react";
import Banner from "./Banner";
import DoctorsContent from "./DoctorsContent";
import Feedback from "./Feedback";
import Form from "../FormsComponent/ConsultationForm"

const Index = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("prashantha");

  return (
    <>
      <Banner selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor} />
      <DoctorsContent selectedDoctor={selectedDoctor} />
      {/* <Feedback /> */}
      <Form />
    </>
  );
};

export default Index;

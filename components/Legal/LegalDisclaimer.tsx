import React from "react";
import GenericDocument from "./GenericDocument";
import { LEGAL_DISCLAIMER } from "./static";

const LegalDisclaimer = () => {
  return <GenericDocument {...LEGAL_DISCLAIMER} />;
};

export default LegalDisclaimer;

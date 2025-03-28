import React from "react";
import GenericDocument from "./GenericDocument";
import { PRIVACY_POLICY } from "./static";

const PrivacyPolicy = () => {
  return <GenericDocument {...PRIVACY_POLICY} />;
};

export default PrivacyPolicy;

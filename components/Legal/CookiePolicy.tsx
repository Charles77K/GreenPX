import React from "react";
import GenericDocument from "./GenericDocument";
import { COOKIE_POLICY } from "./static";

const CookiePolicy = () => {
  return <GenericDocument {...COOKIE_POLICY} />;
};

export default CookiePolicy;

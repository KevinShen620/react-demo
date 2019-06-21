import React from "react";

type CType = {
  name?: string;
};

export const CContext = React.createContext<CType>({});

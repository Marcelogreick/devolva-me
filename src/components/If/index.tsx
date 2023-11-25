import React, { FC } from "react";

type Props = {
  condition: boolean;
  children: React.ReactNode;
};

const If: FC<Props> = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

export default If;

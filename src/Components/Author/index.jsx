/** @format */

import React from "react";
import Book from "../Book";
import AuthorParentCard from "../AuthorParentCard";

function AuthorComponent() {
  return (
    <div>
      <Book heading1Text='Meet The Authors' />
      <AuthorParentCard />
    </div>
  );
}

export default AuthorComponent;

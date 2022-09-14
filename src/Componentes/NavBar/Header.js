import React, { useState } from "react";
import { HeaderWrapper } from "./styles/Header";
import MenuButton from "./MenuButton";
import NavBarOpen from "./NavBarOpen";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      
      <NavBarOpen open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;
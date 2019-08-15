import React, { useState, ReactNode } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";

interface MenuDrawerProps {
  children: ReactNode;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <React.Fragment>
      <Button onClick={() => setOpenMenu(true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        onClose={() => setOpenMenu(false)}
        onOpen={() => setOpenMenu(true)}
        open={openMenu}
      >
        <div
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>{children}</List>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default MenuDrawer;

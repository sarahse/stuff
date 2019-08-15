import React, { useState, ReactNode } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

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
      <Drawer onClose={() => setOpenMenu(false)} open={openMenu}>
        <div
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>{children}</List>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuDrawer;

import React from "react";
import Button from "../Button/Button";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import Divider from "../Divider/Divider";

import LogoIcon from "../Icon/LogoIcon";

function Menu() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {open && (
        <List
          horizontalAlign="left"
          verticalAlign="bottom"
          open={open}
          onClick={handleClose}
        >
          <ListItem>👨‍💻 Profile</ListItem>
          <ListItem>📁 My account</ListItem>
          <Divider />
          <ListItem disabled>🔙 Logout</ListItem>
        </List>
      )}
      <Button
        onClick={handleClick}
        active={open}
        style={{ fontWeight: "bold" }}
      >
        <LogoIcon style={{ marginLeft: -2, marginRight: 4 }} />
        Start
      </Button>
    </div>
  );
}

export default Menu;

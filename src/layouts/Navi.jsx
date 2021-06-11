import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu size="huge">
        <div className="container">
          <Menu.Item name="Home" />
          <Menu.Item name="Messages" />

          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </div>
      </Menu>
    </div>
  );
}

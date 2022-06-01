import React, { useState } from "react";

import classnames from "classnames";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import MenuBar from "./MenuBar";

const Contacts = () => {
  // const [loading, setLoading] = useState(true);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex">
      <MenuBar showMenu={isMenuBarOpen} />

      <div
        className={classnames({
          "nc-list-wrapper": isMenuBarOpen,
          "nc-list-wrapper-full": !isMenuBarOpen,
        })}
      >
        <Container>
          <Header
            title="Contacts"
            actionBlock={<Button label="Add New Note" icon="ri-add-line" />}
            searchProps={{
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
            }}
            menuBarToggle={() =>
              setIsMenuBarOpen(isMenuBarOpen => !isMenuBarOpen)
            }
          />
        </Container>
      </div>
    </div>
  );
};

export default Contacts;

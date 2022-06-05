import React, { useState } from "react";

import classnames from "classnames";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import Table from "./Table";

const Contacts = () => {
  // const [loading, setLoading] = useState(true);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

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
            actionBlock={<Button label="Add New Contact" icon="ri-add-line" />}
            searchProps={{
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
            }}
            menuBarToggle={() =>
              setIsMenuBarOpen(isMenuBarOpen => !isMenuBarOpen)
            }
          />
          <Table
            // setSelectedContactIds={setSelectedContactIds}
            setIsDeleteAlertOpen={setIsDeleteAlertOpen}
          />
          {isDeleteAlertOpen && (
            <DeleteAlert
              onClose={() => setIsDeleteAlertOpen(false)}
              setIsDeleteAlertOpen={setIsDeleteAlertOpen}
            />
          )}
        </Container>
      </div>
    </div>
  );
};

export default Contacts;

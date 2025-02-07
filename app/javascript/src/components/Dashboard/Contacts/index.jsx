import React, { useState } from "react";

import classnames from "classnames";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS } from "./constants";
import NewContactPane from "./Create";
import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import Table from "./Table";

const Contacts = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isNewContactPaneOpen, setIsNewContactPaneOpen] = useState(false);

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
            actionBlock={
              <Button
                label="Add New Contact"
                icon="ri-add-line"
                onClick={() => setIsNewContactPaneOpen(true)}
              />
            }
            searchProps={{
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
            }}
            menuBarToggle={() =>
              setIsMenuBarOpen(isMenuBarOpen => !isMenuBarOpen)
            }
          />
          {CONTACTS.length ? (
            <Table
              setIsDeleteAlertOpen={setIsDeleteAlertOpen}
              contacts={CONTACTS}
            />
          ) : (
            <EmptyState
              image={EmptyNotesListImage}
              title="Looks like you don't have any contacts!"
              subtitle="Add your contacts to send customized emails to them."
              primaryAction={() => setIsNewContactPaneOpen(true)}
              primaryActionLabel="Add New Contact"
            />
          )}
          <NewContactPane
            showPane={isNewContactPaneOpen}
            setShowPane={setIsNewContactPaneOpen}
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

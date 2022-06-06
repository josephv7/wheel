import React, { useState } from "react";

import classnames from "classnames";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import Card from "./Card";
import { NOTES } from "./constants";
import NewNotePane from "./Create";
import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";

const Notes = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
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
            title="Notes"
            actionBlock={
              <Button
                onClick={() => setIsNewNotePaneOpen(true)}
                label="Add New Note"
                icon="ri-add-line"
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
          {NOTES.length ? (
            <div className="w-full space-y-4">
              {NOTES.map(note => (
                <Card
                  title={note.title}
                  description={note.description}
                  key={note.id}
                  setIsDeleteAlertOpen={setIsDeleteAlertOpen}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              image={EmptyNotesListImage}
              title="Looks like you don't have any notes!"
              subtitle="Add your notes to send customized emails to them."
              primaryAction={() => setIsNewNotePaneOpen(true)}
              primaryActionLabel="Add New Note"
            />
          )}
          <NewNotePane
            showPane={isNewNotePaneOpen}
            setShowPane={setIsNewNotePaneOpen}
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

export default Notes;

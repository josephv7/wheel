import React, { useState, useEffect } from "react";

import classnames from "classnames";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import Card from "./Card";
import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

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
            menuBarToggle={() => setIsMenuBarOpen(!isMenuBarOpen)}
          />
          {notes.length ? (
            <div className="w-full space-y-4">
              {notes.map(note => (
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
            fetchNotes={fetchNotes}
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

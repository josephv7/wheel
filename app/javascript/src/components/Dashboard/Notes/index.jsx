import React, { useState, useEffect } from "react";

import classnames from "classnames";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Delete } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header, SubHeader, MenuBar } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import { TAGS } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";
import Table from "./Table";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
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
      <MenuBar showMenu={isMenuBarOpen} title="Notes">
        {TAGS.map((tag, idx) => (
          <MenuBar.Block key={idx} label={tag} />
        ))}
      </MenuBar>
      <div
        className={classnames({
          "nc-table-wrapper": isMenuBarOpen,
        })}
      >
        <Container>
          <Header
            title="Notes"
            actionBlock={
              <Button
                onClick={() => setShowNewNotePane(true)}
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
            <>
              <SubHeader
                rightActionBlock={
                  <Button
                    label="Delete"
                    icon={Delete}
                    onClick={() => setShowDeleteAlert(true)}
                    disabled={!selectedNoteIds.length}
                  />
                }
              />
              <Table
                setSelectedNoteIds={setSelectedNoteIds}
                notes={notes}
                fetchNotes={fetchNotes}
              />
            </>
          ) : (
            <EmptyState
              image={EmptyNotesListImage}
              title="Looks like you don't have any notes!"
              subtitle="Add your notes to send customized emails to them."
              primaryAction={() => setShowNewNotePane(true)}
              primaryActionLabel="Add New Note"
            />
          )}
          <NewNotePane
            showPane={showNewNotePane}
            setShowPane={setShowNewNotePane}
            fetchNotes={fetchNotes}
          />
          {showDeleteAlert && (
            <DeleteAlert
              selectedNoteIds={selectedNoteIds}
              onClose={() => setShowDeleteAlert(false)}
              refetch={fetchNotes}
              setSelectedNoteIds={setSelectedNoteIds}
            />
          )}
        </Container>
      </div>
    </div>
  );
};

export default Notes;

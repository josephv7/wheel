import React, { useState, useEffect } from "react";

import classnames from "classnames";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Search, Plus, Settings } from "neetoicons";
import { Button, PageLoader, Typography } from "neetoui";
import { Container, Header, MenuBar } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import Card from "./Card";
import { TAGS } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

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

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
            },
            {
              icon: Plus,
            },
            {
              icon: Settings,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block label="Sales" count={80} />
        <MenuBar.Block label="Finance" count={60} />
        <MenuBar.Block label="User Experienc" count={60} />
      </MenuBar>
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
            <div className="w-full space-y-4">
              {notes.map(note => (
                <Card
                  title={note.title}
                  description={note.description}
                  key={note.id}
                />
              ))}
            </div>
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

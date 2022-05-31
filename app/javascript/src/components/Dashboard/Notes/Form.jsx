import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select as FormikSelect } from "neetoui/formik";

import notesApi from "apis/notes";

import { NOTES_FORM_VALIDATION_SCHEMA, CONTACTS, TAGS } from "./constants";

export default function NoteForm({ onClose, refetch, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              placeholder="Enter note title"
              className="w-full flex-grow-0"
              required
            />
            <Textarea
              label="Description"
              name="description"
              placeholder="Enter note description"
              className="w-full flex-grow-0"
              required
            />

            <FormikSelect
              label="Assigned Contact"
              name="assigned_contact"
              placeholder="Select Role"
              className="w-full flex-grow-0"
              options={CONTACTS}
              required
            />

            <FormikSelect
              isMulti
              label="Tags"
              name="tags"
              placeholder="Select Tags"
              className="w-full flex-grow-0"
              options={TAGS}
              required
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}

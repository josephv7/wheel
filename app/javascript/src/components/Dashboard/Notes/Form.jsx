import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Textarea, Select as FormikSelect } from "neetoui/formik";

import { NOTES_FORM_VALIDATION_SCHEMA, CONTACTS, TAGS } from "./constants";

export default function NoteForm({ onClose, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    onClose();
    Toastr.success("Note added successfully");
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
              required
              label="Title"
              name="title"
              placeholder="Enter note title"
              className="w-full flex-grow-0"
            />
            <Textarea
              required
              label="Description"
              name="description"
              placeholder="Enter note description"
              className="w-full flex-grow-0"
            />
            <FormikSelect
              required
              label="Assigned Contact"
              name="assignedContact"
              placeholder="Select Role"
              className="w-full flex-grow-0"
              options={CONTACTS}
            />
            <FormikSelect
              isMulti
              required
              label="Tags"
              name="tags"
              placeholder="Select Tags"
              className="w-full flex-grow-0"
              options={TAGS}
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

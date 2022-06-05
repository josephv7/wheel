import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select as FormikSelect } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA, ROLES } from "./constants";

const ContactForm = ({ onClose, contact, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    onClose();
    Toastr.success("Contact added successfully");
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full items-center space-x-6">
              <Input
                required
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
                className="w-1/2"
              />
              <Input
                required
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
                className="w-1/2"
              />
            </div>
            <Input
              required
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
              className="w-full flex-grow-0"
            />
            <FormikSelect
              required
              label="Role"
              name="role"
              placeholder="Select Role"
              className="w-full flex-grow-0"
              options={ROLES}
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
};

export default ContactForm;

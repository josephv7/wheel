import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, setIsDeleteAlertOpen }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    Toastr.success("Contact deleted successfully");
    setIsDeleting(false);
    setIsDeleteAlertOpen(false);
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      title="Delete Contact"
      message="Are you sure you want to delete this contact? This action cannot be undone."
      isSubmitting={isDeleting}
    />
  );
};

export default DeleteAlert;

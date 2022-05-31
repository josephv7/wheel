import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, setIsDeleteAlertOpen }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    Toastr.success("Note deleted successfully");
    setIsDeleting(false);
    setIsDeleteAlertOpen(false);
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      title="Delete Note"
      message="Are you sure you want to delete this note? This action cannot be undone."
      isSubmitting={isDeleting}
    />
  );
};

export default DeleteAlert;

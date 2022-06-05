import * as yup from "yup";

export const TAGS = [];
export const DEFAULT_PAGE_INDEX = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const TYPES = [
  {
    id: 1,
    label: "All",
    value: "all",
    count: 90,
  },
  {
    id: 2,
    label: "Users",
    value: "users",
    count: 80,
  },
  {
    id: 3,
    label: "Leads",
    value: "leads",
    count: 20,
  },
  {
    id: 4,
    label: "Visitors",
    value: "visitors",
    count: 10,
  },
];

export const SEGMENTS = [];

export const CONTACTS = [
  {
    id: 1,
    name: "Oliver Smith",
    email: "oliver@example.com",
    createdAt: "2019-01-01",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    createdAt: "2019-01-01",
  },
];

export const ROLES = [
  {
    id: 1,
    label: "Standard",
    value: "standard",
  },
  {
    id: 2,
    label: "Admin",
    value: "admin",
  },
];

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: ROLES[0],
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  role: yup
    .object()
    .shape({
      label: yup.string().required("Label requied for Role"),
      value: yup.string().required("Value required for Role"),
    })
    .required("Role is required"),
});

import * as yup from "yup";

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const TAGS = [
  {
    label: "Getting Started",
    value: "getting_started",
    count: 80,
    id: 1,
  },
  {
    label: "Onboarding",
    value: "onboarding",
    count: 20,
    id: 2,
  },
  {
    label: "User Flow",
    value: "user_flow",
    count: 10,
    id: 3,
  },
  {
    label: "UX",
    value: "ux",
    count: 10,
    id: 4,
  },
  {
    label: "Bugs",
    value: "bugs",
    count: 10,
    id: 5,
  },
  {
    label: "V2",
    value: "V2",
    count: 10,
    id: 6,
  },
];

export const TYPES = [
  {
    label: "All",
    value: "all",
    count: 90,
    id: 1,
  },
  {
    label: "Users",
    value: "users",
    count: 80,
    id: 2,
  },
  {
    label: "Leads",
    value: "leads",
    count: 20,
    id: 3,
  },
  {
    label: "Visitors",
    value: "visitors",
    count: 10,
    id: 4,
  },
];

export const SEGMENTS = [
  {
    label: "Europe",
    value: "europe",
    count: 90,
    id: 1,
  },
  {
    label: "Middle-East",
    value: "middle_east",
    count: 20,
    id: 2,
  },
  {
    label: "Asia",
    value: "asia",
    count: 80,
    id: 3,
  },
];

export const CONTACTS = [
  {
    label: "Oliver Smith",
    value: "Oliver Smith",
    email: "oliver@example.com",
    id: 1,
  },
  {
    label: "John Doe",
    value: "John Doe",
    email: "john@example.com",
    id: 2,
  },
];

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  tags: [],
  assignedContact: CONTACTS[0],
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .shape({
      label: yup.string().required("Label requied for Assigned Contact"),
      value: yup.string().required("Value required for Assigned Contact"),
    })
    .required("Assigned Contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required("Label requied for Tag"),
        value: yup.string().required("Value required for Tag"),
      })
    )
    .min(1, "At least one tag is required"),
});

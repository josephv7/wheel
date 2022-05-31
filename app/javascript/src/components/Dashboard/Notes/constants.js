import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

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
  },
  {
    label: "Onboarding",
    value: "onboarding",
    count: 20,
  },
  {
    label: "User Flow",
    value: "user_flow",
    count: 10,
  },
  {
    label: "UX",
    value: "ux",
    count: 10,
  },
  {
    label: "Bugs",
    value: "bugs",
    count: 10,
  },
  {
    label: "V2",
    value: "V2",
    count: 10,
  },
];

export const TYPES = [
  {
    label: "All",
    value: "all",
    count: 90,
  },
  {
    label: "Users",
    value: "users",
    count: 80,
  },
  {
    label: "Leads",
    value: "leads",
    count: 20,
  },
  {
    label: "Visitors",
    value: "visitors",
    count: 10,
  },
];

export const SEGMENTS = [
  {
    label: "Europe",
    value: "europe",
    count: 90,
  },
  {
    label: "Middle-East",
    value: "middle_east",
    count: 20,
  },
  {
    label: "Asia",
    value: "asia",
    count: 80,
  },
];

export const CONTACTS = [
  {
    label: "Oliver Smith",
    value: "Oliver Smith",
    email: "oliver@example.com",
  },
  {
    label: "John Doe",
    value: "John Doe",
    email: "john@example.com",
  },
];

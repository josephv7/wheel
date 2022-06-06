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
    id: 1,
    label: "Getting Started",
    value: "getting_started",
    count: 80,
  },
  {
    id: 2,
    label: "Onboarding",
    value: "onboarding",
    count: 20,
  },
  {
    id: 3,
    label: "User Flow",
    value: "user_flow",
    count: 10,
  },
  {
    id: 4,
    label: "UX",
    value: "ux",
    count: 10,
  },
  {
    id: 5,
    label: "Bugs",
    value: "bugs",
    count: 10,
  },
  {
    id: 6,
    label: "V2",
    value: "V2",
    count: 10,
  },
];

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

export const SEGMENTS = [
  {
    id: 1,
    label: "Europe",
    value: "europe",
    count: 90,
  },
  {
    id: 2,
    label: "Middle-East",
    value: "middle_east",
    count: 20,
  },
  {
    id: 3,
    label: "Asia",
    value: "asia",
    count: 80,
  },
];

export const CONTACTS = [
  {
    id: 1,
    label: "Oliver Smith",
    value: "Oliver Smith",
    email: "oliver@example.com",
  },
  {
    id: 2,
    label: "John Doe",
    value: "John Doe",
    email: "john@example.com",
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

export const NOTES = [
  {
    id: 1,
    title: "Getting Started",
    description: "This is a description",
    tags: [TAGS[0], TAGS[1]],
    assignedContact: CONTACTS[0],
    createdAt: "2019-01-01",
  },
  {
    id: 2,
    title: "Onboarding",
    description: "This is a description",
    tags: [TAGS[2]],
    assignedContact: CONTACTS[1],
    createdAt: "2019-01-01",
  },
];

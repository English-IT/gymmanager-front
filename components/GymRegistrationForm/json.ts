import { FormValues } from "./type";

export const DefaultValues: { defaultValues: FormValues } = {
  defaultValues: {
    gymName: "",
    phoneNumber: "",
    address: "",
    email: "",
    gymOwner: "",
    gender: "Both",
    workingDays: [],
    weekdayOpeningTime: null,
    weekdayClosingTime: null,
    weekendOpeningTime: null,
    weekendClosingTime: null,
  },
};

export const weekdaysOptions = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
];

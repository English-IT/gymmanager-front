import type { Dayjs } from "dayjs";

export interface FormValues {
  gymName: string;
  phoneNumber: string;
  address: string;
  email: string;
  gymOwner: string;
  gender: "Male" | "Female" | "Both";
  workingDays: string[];
  weekdayOpeningTime: Dayjs | null;
  weekdayClosingTime: Dayjs | null;
  weekendOpeningTime: Dayjs | null;
  weekendClosingTime: Dayjs | null;
}

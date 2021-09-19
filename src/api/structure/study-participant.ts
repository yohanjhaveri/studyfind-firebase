import { Timezone } from "./custom-types";

type Status = "interested" | "consented" | "screened" | "accepted" | "rejected";

type Reponse = "Yes" | "No" | "Unsure";

export interface StudyParticipant {
  status: Status;
  responses: Reponse[];
  timezone: Timezone;
  availability: string;
}

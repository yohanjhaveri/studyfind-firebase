import { StudyQuestion } from "types/documents/study";
import { StudyParticipantReponse, StudyParticipantStatus } from "types/documents/study-participant";

import { Timezone } from "../custom";

export interface CreateStudyParticipantDocument {
  status: "interested";
  questions: StudyQuestion[];
  responses: StudyParticipantReponse[];
  timezone: Timezone;
  availability: string;
}

export interface UpdateStudyParticipantDocument {
  status?: StudyParticipantStatus;
}

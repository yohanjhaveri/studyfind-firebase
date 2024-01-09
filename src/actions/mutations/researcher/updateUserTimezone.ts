import { auth } from "config";
import { getNow } from "api/firestore/utils";
import { updateResearcherDocument } from "api/firestore/mutations/researcher";
import { Timezone } from "types/custom";

interface UpdateTimezonePayload {
  region: Timezone;
}

export const updateTimezone = ({ region }: UpdateTimezonePayload) => {
  if (auth.currentUser) {
    const researcherID = auth.currentUser.uid;

    updateResearcherDocument(researcherID, {
      timezone: {
        region,
        updatedAt: getNow(),
      },
    });
  }
};

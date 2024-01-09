import { auth } from "config";
import { getNow } from "api/firestore/utils";
import { updateParticipantDocument } from "api/firestore/mutations/participant";
import { Timezone } from "types/custom";

interface UpdateTimezonePayload {
  region: Timezone;
}

export const updateTimezone = ({ region }: UpdateTimezonePayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    updateParticipantDocument(participantID, {
      timezone: {
        region,
        updatedAt: getNow(),
      },
    });
  }
};

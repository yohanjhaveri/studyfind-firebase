import { auth } from "config";
import { getNow } from "api/firestore/utils";
import { updateParticipantDocument } from "api/firestore/mutations/participant";
import { Address, Latitude, Longitude } from "types/custom";

interface UpdateLocationPayload {
  address: Address;
  coordinates: {
    latitude: Latitude;
    longitude: Longitude;
  };
}

export const updateUserLocation = async ({ address, coordinates }: UpdateLocationPayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    updateParticipantDocument(participantID, {
      location: {
        address,
        coordinates,
        updatedAt: getNow(),
      },
    });
  }
};

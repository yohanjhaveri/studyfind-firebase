import moment from "moment-timezone";

import { auth, side } from "config";
import { setDoesUserExist } from "api/auth/utils";
import { createResearcherDocument } from "api/firestore/mutations/researcher";
import { createParticipantDocument } from "api/firestore/mutations/participant";
import { Timezone, UserID } from "types/custom";

interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

const createUserDocument = {
  RESEARCHER: (uid: UserID) =>
    createResearcherDocument(uid, {
      organization: "",
      background: "",
      phone: "",
      timezone: {
        region: moment.tz.guess() as Timezone,
        autodetect: true,
        updatedAt: moment.utc().valueOf(),
      },
      notifications: {
        local: true,
        email: false,
        phone: false,
      },
    }),
  PARTICIPANT: (uid: UserID) =>
    createParticipantDocument(uid, {
      sex: "",
      birthdate: "",
      availability: "",
      phone: "",
      enrolled: [],
      saved: [],
      timezone: {
        region: moment.tz.guess() as Timezone,
        autodetect: true,
        updatedAt: moment.utc().valueOf(),
      },
      location: {
        address: "",
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
        autodetect: false,
        updatedAt: moment.utc().valueOf(),
      },
      notifications: {
        local: true,
        email: false,
        phone: false,
      },
    }),
}[side];

export const signup = async ({ name, email, password }: SignUpPayload) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);

  if (user) {
    await Promise.all([
      user.sendEmailVerification(),
      user.updateProfile({ displayName: name }),
      createUserDocument(user.uid),
    ]);

    setDoesUserExist("Yes");
  }
};

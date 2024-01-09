import { createMailingDocument } from "api/firestore/mutations/mailing";

interface SubscribeMailingPayload {
  email: string;
}

export const subscribe = async ({ email }: SubscribeMailingPayload) => {
  createMailingDocument({
    side: "PARTICIPANT",
    email,
  });
};

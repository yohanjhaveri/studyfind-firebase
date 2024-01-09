import { auth } from "config";

import { createFeedbackDocument } from "api/firestore/mutations/feedback";
import { uploadFile } from "api/storage/utils";

import { FeedbackBrowser, FeedbackSystem } from "types/documents/feedback";

interface SubmitFeedbackPayload {
  title: string;
  body: string;
  system: FeedbackSystem;
  browser: FeedbackBrowser;
  screenshot?: File;
}

export const submitFeedback = async ({ title, body, system, browser, screenshot }: SubmitFeedbackPayload) => {
  if (auth.currentUser) {
    const document = await createFeedbackDocument({
      title,
      body,
      side: "PARTICIPANT",
      email: auth.currentUser.email || "",
      system,
      browser,
    });

    if (screenshot) {
      uploadFile(`feedback/${document.id}`, screenshot);
    }
  }
};

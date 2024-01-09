import { FeedbackBrowser, FeedbackSystem } from "types/documents/feedback";
import { Email, UserType } from "../custom";

export interface CreateFeedbackDocument {
  title: string;
  body: string;
  side: UserType;
  email: Email;
  system: FeedbackSystem;
  browser: FeedbackBrowser;
}

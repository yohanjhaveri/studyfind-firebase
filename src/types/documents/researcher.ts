import { Phone } from "../custom";
import { UserTimezoneStructure, UserNotificationSettingsStructure, Metadata } from "../subsets";

export interface ResearcherDocumentStructure
  extends UserTimezoneStructure,
    UserNotificationSettingsStructure,
    Metadata {
  organization: string;
  background: string;
  phone: Phone;
}

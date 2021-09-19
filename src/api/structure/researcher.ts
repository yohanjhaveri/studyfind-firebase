import { Phone, Timezone } from "./custom-types";

export interface Researcher {
  organization: string;
  background: string;
  phone: Phone;
  timezone: {
    region: Timezone;
    autodetect: boolean;
  };
  notifications: {
    local: boolean;
    email: boolean;
    phone: boolean;
  };
}

import { Phone, Timezone, Address, Longitude, Latitude } from "./custom-types";

type BiologicalSex = "Male" | "Female";

export interface Participant {
  sex: BiologicalSex;
  birthdate: Date;
  availability: string;
  phone: Phone;
  timezone: {
    region: Timezone;
    autodetect: boolean;
  };
  location: {
    address: Address;
    coordinates: {
      latitude: Latitude;
      longitude: Longitude;
    };
    autodetect: boolean;
  };
  notifications: {
    local: boolean;
    email: boolean;
    phone: boolean;
  };
}

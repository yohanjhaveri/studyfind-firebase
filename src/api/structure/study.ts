import { Address, Latitude, Longitude, Timestamp, UID, Email } from "./custom-types";

type EligibleSex = "All" | "Male" | "Female";

type StudyType = "Observational" | "Interventional";

type Location = {
  address: Address;
  coordinates: {
    latitude: Latitude;
    longitude: Longitude;
  };
};

type StudyQuestionType = "Inclusion" | "Exclusion";

type Question = {
  type: StudyQuestionType;
  prompt: string;
};

type Resource = {
  name: string; // resource name
  link: URL;
};

export interface Study {
  activated: boolean;
  title: string;
  description: string;
  sex: EligibleSex;

  minAge: number;
  maxAge: number;
  acceptsHealthyVolunteers: boolean;
  type: StudyType;

  createdAt: Timestamp;
  updatedAt: Timestamp;

  researcher: {
    id: UID;
    name: string;
    email: Email;
  };

  conditions: string[];

  locations: Location[];
  questions: Question[];
  resources: Resource[];
}

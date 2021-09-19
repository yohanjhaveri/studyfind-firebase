import { Timestamp } from "./custom-types";

export interface Note {
  time: Timestamp;
  title: string;
  body: string;
}

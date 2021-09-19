import moment from "moment-timezone";
import { generateRefs } from "../refs";

const guessedTimezone = moment.tz.guess();

const defaultParticipant = {
  organization: "",
  background: "",
  phone: "",
  timezone: {
    region: guessedTimezone,
    autodetect: true,
  },
  location: {
    address: "",
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
  },
  notifications: {
    local: true,
    email: false,
    phone: false,
  },
};

export class Participant {
  constructor(authenticate) {
    const { participants, participant } = generateRefs();

    this.participantsRef = participants();
    this.participantRef = participant(authenticate.getUserID());
  }

  create() {
    return this.participantsRef.set(defaultParticipant);
  }

  update(data) {
    return this.participantRef.update(data);
  }

  delete() {
    return this.participantRef.delete();
  }
}

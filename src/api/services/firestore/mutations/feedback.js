import moment from "moment-timezone";
import { authenticate } from "api";
import { side } from "config";
import { refs } from "../refs";

export const feedback = {
  submit: ({ title, body }) => {
    const time = moment.utc().valueOf();
    const email = authenticate.getEmail();

    return refs.feedback().add({ time, side, email, title, body });
  },
};

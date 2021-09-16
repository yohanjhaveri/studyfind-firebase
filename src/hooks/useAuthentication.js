import { useState } from "react";
import { validate, object } from "@studyfind/utils";
import { firebaseAuthErrors } from "constants";

function useAuthentication({ initial, onSubmit }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState(initial);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const check = (name, value) => {
    if (name === "name") return validate.name(value);
    if (name === "email") return validate.email(value);
    if (name === "password") return validate.password(value);
    if (name === "newPassword") return validate.password(value);
  };

  const update = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const submit = () => {
    const errorMessages = object.map(values, check);
    const errorExists = object.some(errorMessages);

    if (errorExists) {
      setErrors(errorMessages);
      return;
    }

    setLoading(true);

    return onSubmit(values)
      .then(() => {
        setValues(initial);
        setSuccess(true);
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, ...firebaseAuthErrors[err.code] }));
        setSuccess(false);
      })
      .finally(() => setLoading(false));
  };

  return { values, errors, loading, success, update, submit };
}

export default useAuthentication;

import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import {addContact} from '../../redux/contactsSlice.js';
import {nanoid} from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const INITIAL_VALUES = {
    profileName: "",
    profileNumber: "",
  };

  const handleSubmit = (values, actions) => {
    const profileObject = {
      name: values.profileName,
      number: values.profileNumber,
      id: nanoid()
    };
    dispatch(addContact(profileObject))
  };

  const FeedbackSchema = Yup.object().shape({
    profileName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    profileNumber: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });



  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.container}>
          <label className={css.label}>
            <span>Name</span>
            <Field
              className={css.input}
              type="text"
              name="profileName"
              required
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="profileName"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field
              className={css.input}
              type="text"
              name="profileNumber"
              required
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="profileNumber"
              component="span"
            />
          </label>
          <button
            className={css.submitBtn}
            type="submit"
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;

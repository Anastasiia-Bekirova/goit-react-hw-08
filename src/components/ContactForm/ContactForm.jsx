import { ErrorMessage, Formik, Form, Field } from 'formik';
import { addContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';


import * as Yup from "yup";
import styles from './ContactForm.module.css';


const addContactSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .required("Required!")
    .matches(
      /^\d{3}-\d{2}-\d{2}$/, "XXX-XX-XX"
    ),
});
const INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  

  const handleSubmit = (values, actions) => {
     const finalContact = {
    
      name: values.name,
      number: values.number,
     };
    
    
    dispatch(addContact(finalContact));
    actions.resetForm();
  };


  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={addContactSchema}
      onSubmit={handleSubmit}
    >
      {(form) => (
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name</span>
            <Field
              type="text"
              name="name"
              className={styles.input}
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={styles.label}>
            <span>Number</span>
            <Field
              className={styles.input}
              type="text"
              name="number"
            />
            <ErrorMessage className={styles.errorMessage} name="number" component="span" />
          </label>
          <button className={styles.submitBtn} type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );  
};



export default ContactForm;
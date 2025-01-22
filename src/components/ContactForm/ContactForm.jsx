import { Formik, Field, ErrorMessage } from 'formik';
import {
  StyledForm,
  Label,
  Input,
  SubmitButton,
  ErrorText,
} from './ContactFormStyled.jsx';
import * as Yup from 'yup';

const numbersSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Please enter a valid number!')
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={numbersSchema}
    onSubmit={(values, actions) => {
      onSubmit(values);
      actions.resetForm();
    }}
  >
    <StyledForm>
      <Label>
        Name
        <Field name="name" as={Input} />
        <ErrorMessage name="name" component={ErrorText} />
      </Label>
      <Label>
        Number
        <Field name="number" as={Input} />
        <ErrorMessage name="number" component={ErrorText} />
      </Label>
      <SubmitButton type="submit">Submit</SubmitButton>
    </StyledForm>
  </Formik>
);

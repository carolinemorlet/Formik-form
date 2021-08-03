import { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './App.css';
import formJson from '../formJson.json';

const validationSchema = yup.object({
  name: yup.string().required('le nom est obligatoire'),
  poste: yup.string().required('le poste est obligatoire'),
  numberNoDecimal: yup.number().required('cette information est obligatoire'),
  numberDecimal: yup.number().required('cette information est obligatoire'),
  date: yup.date().required('la date est obligatoire'),
});

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(formJson[0]);
  }, []);
  const { fields } = data ?? {};
  // const handleSubmit = (event) => {
  //   event.preventDefault();

    console.log(data);
  };

  const initialValues = {
    nomEtPrénom: ' ',
    poste: '',
    numberNoDecimal: '',
    numberDecimal: '',
    date: '',
    richedit: '',
  };

  function createUser(values) {
    console.log('form submitted.....');
  }

  return (
    <div>
      <h1>Formulaire dynamique avec Formik</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={createUser}
      >
        {(formik) => (
          <Form>
            <div>
              <label htmlFor="nomEtPrénom">Nom et Prénom</label>
              <Field
                className="form-all"
                name={data.fields.name}
                type="edit_string"
              />
              <ErrorMessage
                name="nomEtPrénom"
                className="visible"
                component="span"
              />
            </div>

            <div>
              <label htmlFor="poste">Poste</label>
              <Field className="form-all" name="poste" type="text" />
              <ErrorMessage name="poste" className="visible" component="span" />
            </div>

            <div>
              <label htmlFor="numberNoDecimal">Number No Decimal</label>
              <Field
                className="form-all"
                name="numberNoDecimal"
                type="number"
              />
              <ErrorMessage
                name="numberNoDecimal"
                className="visible"
                component="span"
              />
            </div>

            <div>
              <label htmlFor="numberDecimal">Number Decimal</label>
              <Field
                className="form-all"
                name="numberDecimal"
                type="number"
                step="0.01"
              />
            </div>

            <div>
              <label htmlFor="date">Date</label>
              <Field className="form-all" name="date" type="date" />
              <ErrorMessage name="date" className="visible" component="span" />
            </div>

            <div>
              <label htmlFor="richedit">RichEdit</label>
              <Field
                className="form-all"
                name="richEdit"
                type="form"
                component="textarea"
              />
              <ErrorMessage
                name="numberNoDecimal"
                className="visible"
                component="span"
              />
            </div>

            <div>
              <label htmlFor="closedList">closed List</label>
              <Field
                className="form-all"
                name="closedList"
                type="select"
                component="select"
              >
                <option disabled value="closedList">
                  closed List
                </option>
                <option value=" abandon ">ABANDON</option>
                <option value="5.5">5.6</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </Field>
            </div>

            <div>
              <label htmlFor="button"></label>
              <Field
                className="form-all"
                name="button"
                type="submit"
                disabled={!formik.isValid}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;

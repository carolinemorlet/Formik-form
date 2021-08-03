import React from 'react';
import formJson from '../formJson.json';
import { Field } from 'formik';

const { ...fields } = 'data';

const Data = (data) => {
  return (
    <div>
      {fields ? fields.map((data, i) => <Field key={i} field={data} />) : null}{' '}
      )
    </div>
  );
};

export default Data;

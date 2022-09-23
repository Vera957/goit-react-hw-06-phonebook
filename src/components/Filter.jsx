import { Form, Formik, ErrorMessage } from "formik";
import * as yup from 'yup';
import React from "react";
import propTypes from 'prop-types';
import { StyledField } from '../style/style';

const schemaFiler = yup.object({
    filter: yup.string().min(1).max(16),
})

export const Filter = (props) => {
    const initialValues = {
        filter: ''
    }

    const getValues = (values, { resetForm }) => {
        props.filterContactsName(values);
        resetForm();
    }

    return (<>
        <h2>Search by name</h2>
        <Formik initialValues={initialValues} onSubmit={getValues} validationSchema={schemaFiler}>
            <Form>
                <StyledField type="text" placeholder="Search" name="filter" id='searchName' />
                <ErrorMessage name="filter" />
            </Form>
        </Formik>
    </>)
}



Filter.propTypes = {
    props: propTypes.func,
}



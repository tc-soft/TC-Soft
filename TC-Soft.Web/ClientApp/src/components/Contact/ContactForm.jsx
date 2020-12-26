import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';

function ContactForm() {
    return (
        <React.Fragment>
            <Formik
                initialValues={{ 
                    name: '',
                    email: '',
                    message: '',
                    toggle: false
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Pole wymagane')    
                        .min(2, 'Pole musi zawierać imię')
                        .max(20, 'Pole może mieć maksymalnie 20 znaków'),
                    email: Yup.string()
                        .required('Pole wymagane')
                        .email('nieprawidłowy adres Email'),
                    message: Yup.string()
                        .required('Pole wymagane')    
                        .max(1024, 'Pole może mieć maksymalnie 1024 znaki'),
                    toggle: Yup.boolean()
                        .required("Pole musi być zaznaczone")
                        .oneOf([true], "Pole musi być zaznaczone")
                })}
                
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    const url = new URL(window.location.href);
                    const port = (url.port ? `:${url.port}` : "");
                    const apiAddress = `${url.protocol}//${url.hostname}${port}/api${url.pathname}`;

                    fetch(apiAddress, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            name: values.name,
                            email: values.email,
                            message: values.message
                        })
                    })
                    .then((response) => response.json())

                    .then((data) => {
                        console.log("messages", data);
                        setSubmitting(false);
                    })

                    .catch((error) => {
                        console.error('Error:', error);
                    });

                    resetForm();
                }}
            >
            {({ values, touched, errors, dirty, isValid }) => (
                <Form className="contact__form">
                    <h3 className="contact__title">Formularz kontaktowy</h3>

                    <Field 
                        name="name"
                        type="text"
                        placeholder="Imię"
                        className={errors.name && (touched.name || values.name) && "contact__ValidationError"}
                    />

                    <ErrorMessage errors={errors.name} touched={touched.name} values={values.name} />

                    <Field 
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        className={errors.email && (touched.email || values.email) && "contact__ValidationError"}
                    />

                    <ErrorMessage errors={errors.email} touched={touched.email} values={values.email} />

                    <Field 
                        name="message"
                        as="textarea"
                        placeholder="Treść"
                        className={errors.message && (touched.message || values.message) && "contact__ValidationError"}
                    />

                    <ErrorMessage errors={errors.message} touched={touched.message} values={values.message} />

                    <label className="contact__rodo">
                        <Field 
                            type="checkbox"
                            name="toggle"
                        />
                        &nbsp;Zapoznałem się z treścią&nbsp;
                        <Link to="/gdpr">klauzuli informacyjnej</Link>
                        &nbsp;dotyczącej ochrony moich danych osobowych
                    </label>

                    <div className="contact__buttons">
                        <button type="submit" className="buttonSend" disabled={!(isValid && dirty)}>Wyślij</button>
                        <button type="reset" className="buttonReset" disabled={!dirty}>Reset</button>
                    </div>
                </Form>
            )}
            </Formik>
        </React.Fragment>
    );
}

export default ContactForm;
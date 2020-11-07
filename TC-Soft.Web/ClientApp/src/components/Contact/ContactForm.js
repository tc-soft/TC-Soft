import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ContactForm() {
    return (
        <React.Fragment>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('pole wymagane')    
                        .max(20, 'Pole może mieć maksymalnie 20 znaków'),
                    email: Yup.string()
                        .required('pole wymagane')
                        .email('nieprawidłowy adres Email'),
                    message: Yup.string()
                        .required('pole wymagane')    
                        .max(1024, 'Pole może mieć maksymalnie 1024 znaki'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
            {({ errors, touched }) => (
                <Form className="contact__form">
                    <h3 className="contact__title">Formularz kontaktowy</h3>
                    
                    <Field name="name" type="text" placeholder="Imię" />
                    {errors.name && touched.name ? 
                        (<p className="contact__errorMessage">{errors.name}</p>)
                        :
                        (<p className="contact__errorMessage"></p>)
                    }

                    <Field name="email" type="email" placeholder="Email" />
                    {errors.email && touched.email ? 
                        (<p className="contact__errorMessage">{errors.email}</p>)
                        :
                        (<p className="contact__errorMessage"></p>)
                    }

                    <Field name="message" as="textarea" placeholder="Treść" className="form-textarea" />
                    {errors.message && touched.message ? 
                        (<p className="contact__errorMessage">{errors.message}</p>)
                        :
                        (<p className="contact__errorMessage"></p>)
                    }
                    
                    <div className="contact__buttons">
                        <button type="submit" className="buttonSend">Submit</button>
                        <button type="reset" className="buttonReset">Reset</button>
                    </div>
                </Form>
             )}
            </Formik>
        </React.Fragment>
    );
}

export default ContactForm;
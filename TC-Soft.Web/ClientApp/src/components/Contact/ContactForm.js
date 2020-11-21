import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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

                    {errors.name && (touched.name || values.name)  ? 
                        (
                            <div className="contact__errorMessage">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                height="10px" version="1.1"
                                fill="none"
                                viewBox="0 0 30 30"
                                >
                                    <g>
                                        <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 16.5C14.175 16.5 13.5 15.825 13.5 15V9C13.5 8.175 14.175 7.5 15 7.5C15.825 7.5 16.5 8.175 16.5 9V15C16.5 15.825 15.825 16.5 15 16.5ZM16.5 22.5H13.5V19.5H16.5V22.5Z"
                                        fill="#E85C66"
                                    />
                                    </g>
                                </svg>
                                
                                <p>{errors.name}</p>
                            </div>
                        )
                        :
                        (
                            <div className="contact__errorMessage">
                                <p></p>
                            </div>
                        )
                    }

                    <Field 
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        className={errors.email && (touched.email || values.email) && "contact__ValidationError"}
                    />

                    {errors.email && (touched.email || values.email) ? 
                        (
                            <div className="contact__errorMessage">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                height="10px" version="1.1"
                                fill="none"
                                viewBox="0 0 30 30"
                                >
                                    <g>
                                        <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 16.5C14.175 16.5 13.5 15.825 13.5 15V9C13.5 8.175 14.175 7.5 15 7.5C15.825 7.5 16.5 8.175 16.5 9V15C16.5 15.825 15.825 16.5 15 16.5ZM16.5 22.5H13.5V19.5H16.5V22.5Z"
                                        fill="#E85C66"
                                    />
                                    </g>
                                </svg>
                                
                                <p>{errors.email}</p>
                            </div>
                        )
                        :
                        (
                            <div className="contact__errorMessage">
                                <p></p>
                            </div>
                        )
                    }

                    <Field 
                        name="message"
                        as="textarea"
                        placeholder="Treść"
                        className={errors.message && (touched.message || values.message) && "contact__ValidationError"}
                    />

                    {errors.message && (touched.message || values.message)  ? 
                        (
                            <div className="contact__errorMessage">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                height="10px" version="1.1"
                                fill="none"
                                viewBox="0 0 30 30"
                                >
                                    <g>
                                        <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 16.5C14.175 16.5 13.5 15.825 13.5 15V9C13.5 8.175 14.175 7.5 15 7.5C15.825 7.5 16.5 8.175 16.5 9V15C16.5 15.825 15.825 16.5 15 16.5ZM16.5 22.5H13.5V19.5H16.5V22.5Z"
                                        fill="#E85C66"
                                    />
                                    </g>
                                </svg>
                                
                                <p>{errors.message}</p>
                            </div>
                        )
                        :
                        (
                            <div className="contact__errorMessage">
                                <p></p>
                            </div>
                        )
                    }

                    <label className="">
                        <Field 
                            type="checkbox"
                            name="toggle"
                        />
                        {/* {`${values.toggle}`} */}
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
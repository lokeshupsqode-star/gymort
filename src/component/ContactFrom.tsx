import React, { useState } from "react";
import { IconArrowUpRight } from '@tabler/icons-react';


interface FormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_VALUES: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};

    if (!values.name.trim()) {
        errors.name = "Please enter your name.";
    } else if (values.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters.";
    }

    if (!values.email.trim()) {
        errors.email = "Please enter your email address.";
    } else if (!EMAIL_RE.test(values.email.trim())) {
        errors.email = "Enter a valid email address.";
    }

    if (!values.subject.trim()) {
        errors.subject = "Please enter a subject.";
    }

    if (!values.message.trim()) {
        errors.message = "Please write a message.";
    } else if (values.message.trim().length < 10) {
        errors.message = "Message should be at least 10 characters.";
    }

    return errors;
};


const ContactFrom: React.FC = () => {
    const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const nextValues = { ...values, [name]: value };
        setValues(nextValues);

        // live-validate a field once the user has already touched/submitted it
        if (touched[name] || submitStatus === "error") {
            setErrors(validate(nextValues));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched((t) => ({ ...t, [name]: true }));
        setErrors(validate(values));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setTouched({ name: true, email: true, subject: true, message: true });

        if (Object.keys(validationErrors).length > 0) {
            setSubmitStatus("error");
            return;
        }

        setSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Simulate a network request — replace with your real API call.
            await new Promise((resolve) => setTimeout(resolve, 900));

            setSubmitStatus("success");
            setValues(INITIAL_VALUES);
            setTouched({});
            setErrors({});
        } catch {
            setSubmitStatus("error");
        } finally {
            setSubmitting(false);
        }
    };

    const fieldClass = (field: keyof FormValues) =>
        `cf-input${errors[field] ? " cf-input-error" : ""}`;

    return (
        <>
            <div className='row'>
                <div className='col-lg-6'>
                    <p className="sub-heading-section split-text left-text-home4">Get In Touch</p>
                    <h2 className="section-heading split-text left-text-home4 pb-0">FEEL FREE TO ASK AWAY</h2>
                    <p className='heding-sub-discrib left-text-home4'>Purus augue nullam sed nisi. Vitae laoreet vestibulum egestas at in nibh et nulla amet. Amet facilisis blandit est faucibus felis ullamcorper. Ornare a sem massa volutpat arcu ipsum tellus sed.</p>
                    <div className='adoe'>
                        <p>27 West 24th St New Your, NY 10010</p>
                        <a href='mailto:hello@gymort.com' className='d-block'>hello@gymort.com</a>
                        <a href="tel:+12345678899" className='d-block'>+1 234 567 8899</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="cf-wrapper">
                        {submitStatus === "success" && (
                            <div className="cf-banner cf-banner-success" role="status">
                                <svg viewBox="0 0 24 24" className="cf-banner-icon">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                <span>Thanks! Your message has been sent — we'll get back to you soon.</span>
                            </div>
                        )}

                        {submitStatus === "error" && Object.keys(errors).length > 0 && (
                            <div className="cf-banner cf-banner-error" role="alert">
                                <svg viewBox="0 0 24 24" className="cf-banner-icon">
                                    <path d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14.18A2 2 0 004 21h16a2 2 0 001.89-2.96L13.71 3.86a2 2 0 00-3.42 0z" />
                                </svg>
                                <span>Please fix the highlighted fields below and try again.</span>
                            </div>
                        )}

                        <form className="cf-form" onSubmit={handleSubmit} noValidate>
                            <div className="cf-row">
                                <div className="cf-field">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name*"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={fieldClass("name")}
                                        aria-invalid={!!errors.name}
                                        aria-describedby="cf-name-error"
                                    />
                                    {errors.name && (
                                        <span className="cf-error" id="cf-name-error">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>

                                <div className="cf-field">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address*"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={fieldClass("email")}
                                        aria-invalid={!!errors.email}
                                        aria-describedby="cf-email-error"
                                    />
                                    {errors.email && (
                                        <span className="cf-error" id="cf-email-error">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="cf-field">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject*"
                                    value={values.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={fieldClass("subject")}
                                    aria-invalid={!!errors.subject}
                                    aria-describedby="cf-subject-error"
                                />
                                {errors.subject && (
                                    <span className="cf-error" id="cf-subject-error">
                                        {errors.subject}
                                    </span>
                                )}
                            </div>

                            <div className="cf-field">
                                <textarea
                                    name="message"
                                    placeholder="Drop us a few lines here..."
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`cf-textarea${errors.message ? " cf-input-error" : ""}`}
                                    rows={5}
                                    aria-invalid={!!errors.message}
                                    aria-describedby="cf-message-error"
                                />
                                {errors.message && (
                                    <span className="cf-error" id="cf-message-error">
                                        {errors.message}
                                    </span>
                                )}
                            </div>
                            <button type="submit" disabled={submitting} className="btn-main anim anim--3">
                                <span className="btn-quote black-btn-quote cf-submit-label">
                                    {submitting ? "Sending..." : "Submit Now"}
                                </span>
                                <span className="orenge_icon cf-submit-icon icon-black-box">
                                    {submitting ? (
                                        <svg viewBox="0 0 24 24" className="cf-spinner">
                                            <circle cx="12" cy="12" r="9" />
                                        </svg>
                                    ) : (
                                        <IconArrowUpRight size={30} />
                                    )}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>




        </>
    );
};

export default ContactFrom;
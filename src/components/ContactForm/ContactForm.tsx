import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios, { AxiosError } from 'axios';

function isAxiosError(error: Error): error is AxiosError {
    return (error as any).isAxiosError;
}

const ContactForm: React.FunctionComponent = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [error, setError] = useState<string>();

    async function submit(event: React.FormEvent): Promise<void> {
        event.preventDefault();

        const token = await executeRecaptcha();
        const formData = new FormData(event.target as HTMLFormElement);

        formData.set('recaptcha', token);

        try {
            await axios.post(
                `${process.env.AAS_URL}/api/contact-form`,
                formData,
            );
        } catch (error) {
            if (!isAxiosError(error)) {
                throw error;
            }
            console.error(error.response);
            setError(error.toString());
        }
    }

    return (
        <form onSubmit={submit}>
            <p className="field">
                <input name="name" type="text" placeholder="Naam" />
            </p>

            <p className="field">
                <input name="email" type="text" placeholder="E-Mail" />
            </p>

            <p className="field">
                <input name="phone" type="text" placeholder="Telefoonnummer" />
            </p>

            <p className="field">
                <textarea
                    name="message"
                    placeholder="Bericht"
                    cols={40}
                    rows={10}
                />
            </p>
            <p>{error}</p>
            <input type="submit" />
        </form>
    );
};

export default ContactForm;

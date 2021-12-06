import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios, { AxiosError } from 'axios';
import { ErrorList, SubmitButton } from './components';

function isAxiosError(error: Error): error is AxiosError {
    return (error as any).isAxiosError;
}

function getLaravelValidationError(data: {
    message?: string;
    errors?: { [key: string]: string[] };
}): string[] {
    if (!data.errors) {
        return [data.message];
    }

    return Object.values(data.errors).flat();
}

const ContactForm: React.FunctionComponent = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [errors, setErrors] = useState<string[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [isSend, setSend] = useState<boolean>(false);

    async function submit(event: React.FormEvent): Promise<void> {
        setLoading(true);
        setErrors([]);
        setMessages([]);

        event.preventDefault();

        const token = await executeRecaptcha();
        const formData = new FormData(event.target as HTMLFormElement);

        formData.set('recaptcha', token);

        try {
            const response = await axios.post(
                `${process.env.AAS_URL}/api/contact-form`,
                formData,
            );

            setMessages(response.data.messages);
            setSend(true);
        } catch (error) {
            if (!isAxiosError(error)) {
                throw error;
            }

            let errors = [];

            if (error.response?.data) {
                errors = getLaravelValidationError(error.response.data);
            }

            if (errors.length === 0) {
                errors = [error.message];
            }

            setErrors(errors);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={submit}>
            {!isSend && (
                <>
                    <p className="field">
                        <input name="name" type="text" placeholder="Naam" />
                    </p>
                    <p className="field">
                        <input name="email" type="text" placeholder="E-Mail" />
                    </p>
                    <p className="field">
                        <input
                            name="phone"
                            type="text"
                            placeholder="Telefoonnummer"
                        />
                    </p>
                    <p className="field">
                        <textarea
                            name="message"
                            placeholder="Bericht"
                            cols={40}
                            rows={10}
                        />
                    </p>
                    <SubmitButton
                        type="submit"
                        disabled={isLoading}
                        value="Verstuur"
                    />
                </>
            )}
            {errors.length !== 0 && (
                <ErrorList>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ErrorList>
            )}
            {messages.length !== 0 && <p>{messages}</p>}
        </form>
    );
};

export default ContactForm;

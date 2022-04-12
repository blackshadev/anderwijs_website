import axios from 'axios';
import React, { useState } from 'react';
import isAxiosError from '../../support/axios/isAxiosError';
import getLaravelValidationError from '../../support/laravel/getLaravelValidationError';
import normalizeNumber from '../../support/normalizeNumber';
import { ErrorList, SubmitButton } from '../ContactForm/components';

const DonateForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [amount, setAmount] = useState<string>('5.00');
    const [errors, setErrors] = useState<string[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    async function submit(event: React.FormEvent): Promise<void> {
        event.preventDefault();
        setLoading(true);
        setErrors([]);

        try {
            const response = await axios.post<{ url: string }>(
                `${process.env.GATSBY_AAS_URL}/donate`,
                {
                    name: name,
                    amount: normalizeNumber(amount),
                },
            );

            window.location.assign(response.data.url);
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
            <p className="field">
                <input
                    name="name"
                    type="text"
                    placeholder="Naam"
                    value={name}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                        setName(ev.target.value)
                    }
                />
            </p>
            <p className="field">
                <input
                    name="amount"
                    type="text"
                    placeholder="Bedrag*"
                    value={amount}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                        setAmount(ev.target.value)
                    }
                />
            </p>

            {errors.length !== 0 && (
                <ErrorList>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ErrorList>
            )}
            <SubmitButton type="submit" value="Doneer" disabled={isLoading} />
        </form>
    );
};

export default DonateForm;

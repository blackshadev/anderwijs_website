import { AxiosError } from 'axios';

export default function isAxiosError(error: Error): error is AxiosError {
    return (error as any).isAxiosError;
}

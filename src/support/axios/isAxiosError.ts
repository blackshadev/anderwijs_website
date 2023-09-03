import { AxiosError } from 'axios';

export default function isAxiosError(
    error: Error | AxiosError,
): error is AxiosError {
    if ('isAxiosError' in error && error.isAxiosError) {
        return error.isAxiosError;
    }
    return false;
}

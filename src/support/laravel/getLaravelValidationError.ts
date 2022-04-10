export default function getLaravelValidationError(data: {
    message?: string;
    errors?: { [key: string]: string[] };
}): string[] {
    if (!data.errors) {
        return [data.message];
    }

    return Object.values(data.errors).flat();
}

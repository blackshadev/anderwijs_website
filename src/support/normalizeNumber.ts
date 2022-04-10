export default function normalizeNumber(num: string): number {
    if (/\d+(,\d{3})*(\.\d*)/.test(num)) {
        return parseFloat(num.replace(/,/g, ''));
    }

    if (/\d+(.\d{3})*(,\d*)/.test(num)) {
        return parseFloat(num.replace(/\./g, '').replace(/,/g, '.'));
    }

    return parseFloat(num);
}

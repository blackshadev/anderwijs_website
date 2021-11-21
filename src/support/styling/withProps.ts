import { ThemedStyledFunction } from 'styled-components';

export default function withProps<U>() {
    return <
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        P extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
        // eslint-disable-next-line @typescript-eslint/ban-types
        T extends object,
        // eslint-disable-next-line @typescript-eslint/ban-types
        O extends object = {},
    >(
        fn: ThemedStyledFunction<P, T, O>,
    ): ThemedStyledFunction<P & U, T, O & U> =>
        fn as unknown as ThemedStyledFunction<P & U, T, O & U>;
}

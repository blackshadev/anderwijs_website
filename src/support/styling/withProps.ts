import { ThemedStyledFunction } from 'styled-components';

export default function withProps<U>() {
    return <
        P extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
        // eslint-disable-next-line
        T extends object,
        // eslint-disable-next-line
        O extends object = {},
    >(
        fn: ThemedStyledFunction<P, T, O>,
    ): ThemedStyledFunction<P & U, T, O & U> =>
        fn as unknown as ThemedStyledFunction<P & U, T, O & U>;
}

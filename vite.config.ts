import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';
import react from '@vitejs/plugin-react';
import ignore from 'rollup-plugin-ignore';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
        ignore(['**/src/test/**']),
    ],
    resolve: {
        alias: {
            '@src': path.resolve('', 'src'),
            '@lib': path.resolve('', 'src/lib'),
        },
    },
    build: {
        lib: {
            entry: path.resolve('', 'src/lib/index.ts'),
            name: 'ReactLibQwepAlex',
            formats: ['es', 'umd'],
            fileName: (format) => `ui-kit-qwep.${format}.js`,
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                // '@radix-ui/react-checkbox', 
                // '@radix-ui/react-dialog',
                // '@radix-ui/react-slider',
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',

                },
                dir: 'dist',
            },
        },
    },
});

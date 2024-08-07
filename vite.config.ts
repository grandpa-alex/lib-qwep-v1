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
        },
    },
    build: {
        lib: {
            entry: path.resolve('', 'src/lib/index.ts'),
            name: 'ReactLibAlexQwep',
            formats: ['es', 'umd'],
            fileName: (format) => `alex-qwep-ui-kit.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
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

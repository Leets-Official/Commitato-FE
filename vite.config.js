import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// export default defineConfig({
//   plugins: [react(), svgr()],
//   server: {
//     proxy: {
//       '/api': {
//         target:
//           'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080',
//         changeOrigin: true,
//         rewrite: path => path.replace(/^\/api/, ''),
//       },
//     },
//   },
//   proxy: {
//     '/api': {
//       target:
//         'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080',
//       changeOrigin: true,
//       rewrite: path => path.replace(/^\/api/, ''),
//     },
//   },
// });

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.commitato.site',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});

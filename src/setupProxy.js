import { createProxyMiddleware } from 'http-proxy-middleware';

export const proxySetup = (app) => {
    createProxyMiddleware({
        target: 'http://127.0.0.1:5000',
        changeOrigin: true
    })
} 
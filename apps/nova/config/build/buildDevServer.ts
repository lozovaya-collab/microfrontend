import type { Configuration as DevServerConfigurations } from 'webpack-dev-server'

import { type BuildOptions } from './types/config'
import path from 'path'
export const buildDevServer = (options: BuildOptions): DevServerConfigurations => ({
    port: options.port,
    open: true,
    historyApiFallback: {
        index: '/nova/',
        rewrites: [
            { from: /^\/nova\/.*$/, to: '/nova/index.html' }, // Все запросы к /nova/ перенаправляем на /nova/index.html
        ],
    },
    // historyApiFallback: true,
    hot: true,
    static: {
        directory: path.join(__dirname, 'public'), // Указываем директорию для статических файлов
        publicPath: '/nova/', // Указываем базовый путь для статических файлов
    },
})

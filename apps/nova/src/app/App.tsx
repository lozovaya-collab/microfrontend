import ReactDOM from 'react-dom/client'

import { type FC, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { StoreProvider } from 'core/store/store-provider'

import { Layout } from 'antd'

import { useAppDispatch } from 'core/hooks/rtk'
import { authMe } from 'core/user/user-thunk'

import { AppRouter } from '../components/app-router'

// import './index.css'

export const App: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authMe())
    }, [])

    return (
        <div className={'app'}>
            <Layout style={{
                minHeight: '100vh',
                background: '#fff'
            }}>
                <AppRouter/>
            </Layout>
        </div>
    )
}

export const AppWrapper = (el: HTMLElement) => {
    const root = ReactDOM.createRoot(el)

    root.render(
        <BrowserRouter basename="/nova">
            <StoreProvider>
                <App/>
            </StoreProvider>
        </BrowserRouter>
    )
}
import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { type IRootState } from './store-types'
import { userReducer } from '../user/user-slice'

export const createReduxStore = (initialState?: IRootState) => {
    const rootReducer: ReducersMapObject<IRootState> = { user: userReducer }

    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

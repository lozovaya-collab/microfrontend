import { type FC } from 'react'

import { Flex, Typography } from 'antd'

// import styles from './not-found-page.module.css'

export const NotFoundPageComponent: FC = () => {
    return (
        <Flex align={'center'}
            vertical
            >
            <Typography.Title level={2}>
        Упс! Страница не найдена
            </Typography.Title>
        </Flex>
    )
}

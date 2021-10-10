import React from 'react'
import Head from 'next/head'

interface Props {
    title?: string
    keywords?: string
    description?: string
}

const Meta: React.FC<Props> = (props) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={props.keywords} />
            <meta name='description' content={props.description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{props.title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WebDev News',
    keywords: 'web development, programming',
    description: 'Get the latests news in web devs',
}

export default Meta

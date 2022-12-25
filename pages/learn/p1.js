import Head from 'next/head'
import NavBar from '../../components/NavBar'

export default function p1() {
    return (
        <div>
            <Head>
                <title>Знакомство с Пайтон!</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
            <main>
                <h1 className='lp-h1'>Урок 1 | Знакомство с Пайтон</h1>
                <p>Пайтон (Python) - высокоуровневый интерпретируемый открытый язык программирования, используемый в нейронных сетях,
                    разработке сайтов, работе с интернетом и многое другое</p>
            </main>
        </div>
    )
}
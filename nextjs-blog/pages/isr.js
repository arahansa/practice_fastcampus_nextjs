import Head from 'next/head'
import Link from "next/link";
import {useEffect, useState} from "react";
import Links from "../components/Links";

export async function getStaticProps() {
    return {
        props: { time: new Date().toISOString()},
        revalidate: 1
    }
}


export default function SSG({time}) {


    return (
        <>
            <h1 className="title">
                ISR : {time}
            </h1>
            <Links />
        </>
    )
}

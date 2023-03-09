import Head from 'next/head'
import Link from "next/link";
import {useEffect, useState} from "react";
import Links from "../components/Links";



export default function Home() {
    const [time, setTime] = useState(new Date().toISOString());

    useEffect(()=>{
        console.log('browser')
        setTime(new Date().toISOString());
    }, []);

    return (
        <>
            <h1 className="title">
                CSR : {time}
            </h1>
            <Links />
        </>
    )
}

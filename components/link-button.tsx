import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { AnyARecord } from 'dns'

function LinkButton({ title, link }: any) {
    return (
        <Button className="bg-yellow-400 hover:bg-yellow-600 text-black">
            <Link href={`${link}`}>{title}</Link>
        </Button>
    )
}

export default LinkButton
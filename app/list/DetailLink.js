'use client'
import { useRouter } from "next/navigation"
import { usePathname, useSearchParams, useParams } from 'next/navigation'


export default function DetailLink({ id }) {
    let router = useRouter()
    let a = usePathname()
    let b = useSearchParams()
    let c = useParams()
    console.log(b)
    return (
        <button onClick={() => { router.push(`/detail/${id}`) }}>버튼</button>
    )
}
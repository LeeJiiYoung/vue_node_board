'use client'
import Link from "next/link"

export default function ListItem({result}) {
    return (
    <div className="list-bg">
        {
            result.map((i, index) => {
                const url = `/detail/${i._id}`;
                return (
                    <div className="list-item" key={index}>
                        <Link href={'/detail/' + i._id.toString()} prefetch={false}>{i.title}</Link>
                        <Link href={'/edit/' + i._id.toString()}>&nbsp;✏️</Link>
                        <span onClick={(e) => {
                            console.log(JSON.stringify({_id : i._id.toString()}))
                            fetch('/api/post/delete', {
                                method : 'DELETE',
                                body : JSON.stringify({_id : i._id.toString()})
                            }).then((res) => {
                                if(res.status == 200){
                                    e.target.parentElement.style.opacity = 0
                                    setTimeout(() => {
                                        e.target.parentElement.style.display= 'none'
                                    }, 1000)
                                    return res.json()
                                }
                                else{
                                    console.log('에러')
                                }
                            }).then((res) => {
                                console.log(res)
                            }).catch((err) => {
                                console.log('에러')
                            })
                            // console.log('/api/delete/' + i._id.toString())
                            // fetch('/api/delete/' + i._id.toString()).then((res) => {
                            //     if(res.status == 200){
                            //         e.target.parentElement.style.opacity = 0
                            //         setTimeout(() => {
                            //             e.target.parentElement.style.display= 'none'
                            //         }, 1000)
                            //         return res.json()
                            //     }
                            //     else{
                            //         console.log('에러')
                            //     }
                            // }).then((res) => {
                            //     console.log(res)
                            // }).catch((err) => {
                            //     console.log('에러')
                            // })
                        }}>🗑️</span>
                        {/* <DetailLink id={i._id.toString()}/> */}
                        <p>{i.content}</p>
                    </div>
                )
            })
        }
    </div>
    )
}
export default function Join(){
    return (
        <div>
            <h4>회원가입</h4>
            <form action="/api/user/new" method="POST">
                <input name="id" placeholder="아이디"></input>
                <input name="password" placeholder="비밀번호" type="password"></input>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}
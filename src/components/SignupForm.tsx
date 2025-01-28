import { useState } from 'react'

async function signUp(username: String, password: String): Promise<any> {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({username: username,
        password: password
      }),
      headers: {'Content-Type': 'application/json'}
    })
    
    return response.json()
}


function SignupForm() {
    const [userId, setUserId] = useState('')
    return (
        <form onSubmit={async e => {
            e.preventDefault()
            const username = (document.getElementById('username') as HTMLInputElement).value
            const password = (document.getElementById('password') as HTMLInputElement).value
            try {
                const signupResult = await signUp(username, password)
                setUserId(signupResult.data.user_id)
                console.log('signupResult: ', signupResult, 'user_id', signupResult.data.user_id)
            } catch (err) {
                console.log(err)
            }
            window.location.href='/'
        }}>
            <p>Signup Form</p>
            <label htmlFor="username">Username:</label>
            <input type='text' id="username"></input>
            <label htmlFor="password">Password:</label>
            <input type='text' id="password"></input>
            <button type="submit">Submit</button>
            <div>user_id: {userId}</div>
        </form>
    )
}

export default SignupForm
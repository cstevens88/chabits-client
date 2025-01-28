async function signUp(username: String, password: String) {
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
    return (
        <form onSubmit={async e => {
            e.preventDefault()
            const username = (document.getElementById('username') as HTMLInputElement).value
            const password = (document.getElementById('password') as HTMLInputElement).value
            try {
                const signupResult = await signUp(username, password)
                console.log(signupResult)
            } catch (err) {
                console.log(err)
            }            
        }}>
            <p>Signup Form</p>
            <label htmlFor="username">Username:</label>
            <input type='text' id="username"></input>
            <label htmlFor="password">Password:</label>
            <input type='text' id="password"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignupForm
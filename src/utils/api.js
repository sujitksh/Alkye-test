
export async function login(username, password) {
    const response = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return response.json(); 
  }
  
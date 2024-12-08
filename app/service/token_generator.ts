interface TokenResponse {
    access_token: string;
    [key: string]: any; // To accommodate any other fields in the response
  }
  
  export const GenerateToken = async (): Promise<TokenResponse> => {
    const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: "john@mail.com",
        password: "changeme",
      }),
    });
  
    const data: TokenResponse = await res.json();
    return data;
  };
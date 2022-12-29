type AuthorizeOptions = {
  redirectUri?: string;
};

type TokenOptions = { authCode: string; redirectUri: string };

export type Token = {
  token_type: string;
  expires_in: number;
  access_token: string;
  scope: string;
};

export const clientId = 'WWVNb0F2Vk5vSTNILXFfOXVrNWM6MTpjaQ';
export const authorize = ({
  redirectUri = 'https://tejjer-next13.tej.as/api/auth/twitter/callback',
}: AuthorizeOptions = {}) => {
  const scopes = [
    'tweet.read',
    'tweet.write',
    'follows.write',
    'like.write',
    'users.read',
  ];
  const oAuthPopup = window.open(
    `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      '%20'
    )}&state=state&code_challenge=challenge&code_challenge_method=plain`,
    '_blank'
  );
  return new Promise((resolve, reject) => {
    if (!oAuthPopup) {
      reject(new Error('Failed to open popup'));
      return;
    }

    const respondToWindowClose = () => {
      resolve(null);
    };

    oAuthPopup.addEventListener('beforeunload', respondToWindowClose);
  });
};

export const getToken = async ({
  authCode,
  redirectUri,
}: TokenOptions): Promise<Token> => {
  const obj = {
    code: authCode,
    grant_type: 'authorization_code',
    client_id: clientId,
    redirect_uri: redirectUri,
    code_verifier: 'challenge',
  };

  return await fetch(`https://api.twitter.com/2/oauth2/token`, {
    headers: {
      Authorization:
        'Basic V1dWTmIwRjJWazV2U1ROSUxYRmZPWFZyTldNNk1UcGphUTp0SHVXUFJ4MDNPS0ZpcVNqUU9sdVoyNkFYUFU3ZmNOa0JqRnlYWnhodms3UjlmdllSWQ==',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(obj).toString(),
    method: 'POST',
  }).then((r) => r.json());
};

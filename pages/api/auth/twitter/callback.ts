import { NextApiHandler } from 'next';
import cookie from 'cookie';

import { getToken } from '../../../../util/oauth';

const handler: NextApiHandler = async (req, res) => {
  const authCode = req.query.code as string;
  const redirectUri = 'https://tejjer-next13.tej.as/api/auth/twitter/callback';

  try {
    const token = await getToken({ authCode, redirectUri });

    res.setHeader(
      'Set-Cookie',
      cookie.serialize(
        'token',
        JSON.stringify({
          value: token.access_token,
          expiresAt: new Date(Date.now() + token.expires_in * 1000),
        }),
        {
          httpOnly: true,
          maxAge: token.expires_in,
          path: '/',
        }
      )
    );

    res.redirect('https://tejjer-next13.tej.as');
  } catch (e) {
    return { error: e };
  }
};

export default handler;

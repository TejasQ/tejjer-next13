'use client';

import { useLocalObservable, observer } from 'mobx-react-lite';
import Avatar from './Avatar';
import Button from './Button';

export const postTweet = async ({
  text,
  token,
}: {
  text: string;
  token: string;
}) => {
  return await fetch('/api/tweet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
    }),
  })
    .then((r) => r.json())
    .then(() => alert('Done!'));
};

function Composer(props) {
  const state = useLocalObservable(() => ({ tweet: '' }));

  return (
    <>
      <div>
        <div className="flex items-center gap-4 p-4">
          <div>
            <Avatar
              alt={props.me.name}
              url={props.me.profile_image_url}
              size={64}
            />
          </div>

          <div className="w-full">
            <textarea
              id="composer"
              placeholder="What's happening?"
              className="w-full p-4 text-xl border border-gray-300 rounded dark:border-0 dark:text-white dark:bg-black"
              value={state.tweet}
              onChange={(event) => (state.tweet = event.target.value)}
            />
          </div>
        </div>

        <div className="grid p-4 grid-cols-[1fr,auto]">
          <ul className="flex items-center gap-4">
            <li>
              <button onClick={(event) => alert('Not yet implemented!')}>
                📸
              </button>
            </li>

            <li>
              <button onClick={(event) => alert('Not yet implemented!')}>
                📊
              </button>
            </li>

            <li>
              <button onClick={(event) => alert('Not yet implemented!')}>
                😄
              </button>
            </li>

            <li>
              <button onClick={(event) => alert('Not yet implemented!')}>
                🕙
              </button>
            </li>

            <li>
              <button onClick={(event) => alert('Not yet implemented!')}>
                📍
              </button>
            </li>
          </ul>

          <div>
            <Button
              condensed={true}
              onClick={(event) => {
                postTweet({
                  text: state.tweet,
                  token: props.token,
                });
              }}
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

const observedComposer = observer(Composer);
export default observedComposer;

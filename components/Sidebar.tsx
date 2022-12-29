'use client';

import Avatar from './Avatar';
import Button from './Button';
import Logo from './Logo';
import MenuItem from './MenuItem';

function Sidebar(props) {
  return (
    <div className="relative">
      <div className="flex-col hidden h-screen overflow-auto md:flex md:top-0 md:fixed">
        <div className="px-4 py-8">
          <Logo />
        </div>

        <nav>
          <ul>
            <li>
              <MenuItem>
                <button
                  className="w-full text-left"
                  onClick={(event) => alert('Not yet implemented!')}
                >
                  Home
                </button>
              </MenuItem>
            </li>

            <li>
              <MenuItem>
                <button
                  className="w-full text-left"
                  onClick={(event) => alert('Not yet implemented!')}
                >
                  Explore
                </button>
              </MenuItem>
            </li>

            <li>
              <MenuItem>
                <button
                  className="w-full text-left"
                  onClick={(event) => alert('Not yet implemented!')}
                >
                  Communities
                </button>
              </MenuItem>
            </li>

            <li>
              <MenuItem>
                <button
                  className="w-full text-left"
                  onClick={(event) => alert('Not yet implemented!')}
                >
                  Notifications
                </button>
              </MenuItem>
            </li>

            <li>
              <MenuItem>
                <button
                  className="w-full text-left"
                  onClick={(event) => alert('Not yet implemented!')}
                >
                  Messages
                </button>
              </MenuItem>
            </li>

            <li>
              <MenuItem>
                <button
                  className="w-full text-left"
                  onClick={(event) => alert('Not yet implemented!')}
                >
                  Bookmarks
                </button>
              </MenuItem>
            </li>

            <li>
              <MenuItem>
                <button
                  className="w-full text-left"
                  onClick={(event) => alert('Not yet implemented!')}
                >
                  Profile
                </button>
              </MenuItem>
            </li>

            <li>
              <MenuItem>
                <button
                  className="w-full text-left"
                  onClick={(event) => alert('Not yet implemented!')}
                >
                  More
                </button>
              </MenuItem>
            </li>

            <li>
              <div className="p-4">
                <Button
                  onClick={(event) =>
                    (document.querySelector(
                      '#composer'
                    ) as HTMLTextAreaElement)!.focus()
                  }
                  fullWidth={true}
                >
                  Tweet
                </Button>
              </div>
            </li>
          </ul>
        </nav>

        <div className="flex items-center w-full gap-4 p-4 mt-auto text-sm">
          <div>
            <Avatar alt={props.me.name} url={props.me.profile_image_url} />
          </div>

          <div>
            <div className="font-bold">{props.me.name}</div>

            <div className="text-gray-400">@{props.me.username}</div>
          </div>

          <div className="ml-auto">...</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

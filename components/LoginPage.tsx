'use client';

import { authorize } from '../util/oauth';
import Button from './Button';
import Logo from './Logo';

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-8 p-4 md:gap-16">
      <Logo size={256} />

      <div className="grid max-w-screen-md gap-4 mx-auto text-center">
        <h1 className="text-6xl font-bold">Tejjer</h1>

        <p className="text-xl">
          This application is a lightweight clone of Twitter with partial
          feature parity that exists to demonstrate various user interface
          features and performance. It is open source and used for learning.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Button onClick={(event) => authorize()}>Login</Button>

        <Button
          color="secondary"
          onClick={(event) => window.open('github url @todo')}
        >
          Browse the Code
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;

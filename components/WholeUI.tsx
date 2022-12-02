import * as React from "react";
import Composer from "./Composer";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";
import Timeline from "./Timeline";

function WholeUI(props) {
  return (
    <div className="px-4 relative h-screen md:grid gap-8 md:grid-cols-[1fr,3fr,1fr]">
      <Sidebar me={props.me} />

      <main className="grid content-start border-l border-r border-gray-200 dark:border-gray-800">
        <div className="sticky top-0 flex items-center p-4 bg-white dark:bg-black bg-opacity-70 backdrop-blur">
          <div className="text-xl font-bold">Home</div>

          <div className="ml-auto">...</div>
        </div>

        <Composer me={props.me} token={props.token} />

        <div>
          <Timeline timeline={props.timeline} />
        </div>
      </main>

      <RightSidebar />
    </div>
  );
}

export default WholeUI;

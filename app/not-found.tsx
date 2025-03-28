import React from "react";

const NotFound = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex-col-center h-screen">
        <header className="text-center">
          <h1 className="font-bold text-5xl md:text-9xl">404</h1>
          <p className="font-bold">
            OOps! You&apos;ve Hit a Solar Eclipse <br /> This page is off the
            grid... for now
          </p>
          <p className="font-bold text-sm mt-5">Here&apos;s what you can do:</p>
        </header>
        <ul className="list-disc font-thin mt-8 text-xs">
          <li>Double-check your URL</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;

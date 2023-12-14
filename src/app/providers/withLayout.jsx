import React from 'react';

const WithLayout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 h-full">
      {/* <Header toggleTheme={toggleTheme} /> */}
      {/* <Sidebar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default WithLayout;

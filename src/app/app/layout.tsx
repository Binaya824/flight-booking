import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full flex justify-center relative overflow-y-scroll overflow-x-hidden">
        {children}
    </main>
  );
};

export default layout;

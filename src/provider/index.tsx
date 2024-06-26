"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import React from "react";
import { Toaster } from "react-hot-toast";
function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());

  return (
    <>
      <QueryClientProvider client={client}>
        <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 8000 }}
      />
    </>
  );
}

export default Providers;

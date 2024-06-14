'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from "next-themes";
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function RootProviders({ children }: { children: ReactNode }) {
  return (
    <div>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

    </div>
  )
}
export default RootProviders;
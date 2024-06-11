'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from "next-themes";
import React from 'react'

function RootProviders({ children }: { children: ReactNode }) {           
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  )
}

export default RootProviders

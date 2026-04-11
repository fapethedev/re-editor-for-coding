"use client"

import React from "react"

export default function OfflinePage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6 px-4 text-center">
      <div className="rounded-full bg-muted p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground"
        >
          <path d="M12 20h.01" />
          <path d="M8.5 16.429a5 5 0 0 1 7 0" />
          <path d="M5.857 13.143a9 9 0 0 1 12.286 0" />
          <path d="M1 12.5a13 13 0 0 1 22 0" />
          <path d="m2 2 20 20" />
        </svg>
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">You are currently offline</h1>
        <p className="max-w-md text-muted-foreground mx-auto text-lg">
          It looks like your connection has been interrupted. Please check your internet settings and try again.
        </p>
      </div>
      <div className="pt-4">
        <button
          onClick={() => window.location.reload()}
          className="rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all active:scale-95"
        >
          Try to reconnect
        </button>
      </div>
    </div>
  )
}

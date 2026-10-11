"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={12}
      containerStyle={{
        top: 24,
      }}
      toastOptions={{
        duration: 5000,
        style: {
          background: "#102B24",
          color: "#FAF8F5",
          border: "1px solid rgba(197, 168, 128, 0.35)",
          borderRadius: "1rem",
          padding: "14px 22px",
          fontSize: "0.875rem",
          fontWeight: 400,
          boxShadow: "0 20px 30px -10px rgba(16, 43, 36, 0.45)",
          maxWidth: "480px",
        },
        success: {
          iconTheme: {
            primary: "#C5A880",
            secondary: "#102B24",
          },
        },
        error: {
          iconTheme: {
            primary: "#EF4444",
            secondary: "#FAF8F5",
          },
        },
        loading: {
          iconTheme: {
            primary: "#C5A880",
            secondary: "#102B24",
          },
        },
      }}
    />
  );
}

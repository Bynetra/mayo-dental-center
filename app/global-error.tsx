"use client";

import React from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: 0, backgroundColor: "#f8fafc" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ maxWidth: "480px", textAlign: "center", background: "#fff", padding: "32px", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}>
            <h1 style={{ fontSize: "24px", color: "#0f172a", marginBottom: "8px" }}>Mayo Dental Center</h1>
            <h2 style={{ fontSize: "18px", color: "#334155", fontWeight: 600, marginBottom: "16px" }}>
              Something went wrong / عذراً، حدث خطأ غير متوقع
            </h2>
            <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "24px" }}>
              Please reload the page or contact our clinic team on WhatsApp at +966 55 022 0715.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button
                onClick={() => reset()}
                style={{ backgroundColor: "#0d9488", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "9999px", cursor: "pointer", fontWeight: 600 }}
              >
                Reload Page
              </button>
              <a
                href="https://wa.me/966550220715"
                style={{ backgroundColor: "#10b981", color: "#fff", textDecoration: "none", padding: "10px 20px", borderRadius: "9999px", fontWeight: 600 }}
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

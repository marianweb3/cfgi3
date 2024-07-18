import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'My App',
    description: 'random myapp description'
}

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
            <div id="root">{children}</div>
            <div id="modal-root"></div>
            </body>
        </html>
    )
}
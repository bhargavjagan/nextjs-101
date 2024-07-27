/**
 * It is like the `error.tsx` on the local router segment level, but this wraps
 * the complete application. Any unhandled errors will reach in case of the root
 * being the nearest boundary.
 */
"use client";

const GlobalErrorPage = ({error, reset} : {
    error: Error | {digest?: string};
    reset: () => void;
}) => {
    <html>
        <body>
            <h2>Something went wrong</h2>
            <button onClick={() => reset()}>Try again</button>
        </body>
    </html>
}

export default GlobalErrorPage;

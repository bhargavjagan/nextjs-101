/**
 * Error components must be client. This is an Error boundary wrapped around the page
 */
'use client';

import { useEffect } from "react";

interface IErrorProps {
    error: Error & { digest?: string }
    reset: () => void;
}

const Error = ({
    error,
    reset,
}: IErrorProps) => {
    useEffect(() => {}, [])

    return (
        <div>
            <h2>Something went wrong</h2>
            <button type="button" onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
};

export default Error;

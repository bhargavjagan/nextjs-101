/**
 * It will be rendered when the requested for page that do not exists in
 * app router.
 * 
 * It can be client or server. Need to change the code accordingly
 */
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    const headersList = headers();
    const domain = headersList.get('host');

    return (
        <div>
            <h2>Not Found: {domain}</h2>
            <p>Could not find requested resource</p>
            <Link href={"/"} > Return Home</Link>
        </div>
    );
}

export default NotFound;

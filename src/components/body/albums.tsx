import React, { Suspense } from 'react';

interface IAlbumListProps {
    noOfAlbums: number;
}

const Albums: React.FC<IAlbumListProps> = ({ noOfAlbums }) => {
    return (
        <Suspense fallback={<div>Fallback</div>} >
            <div className="container">
                {Array.from({ length: noOfAlbums }, (_, index) => (
                    <div key={index} className="record">
                        <p>Record number {index + 1}</p>
                    </div>
                ))}
            </div>
        </Suspense>
    );
}

export default Albums;

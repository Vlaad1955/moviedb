import React from 'react';
import Headergenre from "../../components/headergenre/Headergenre";
import Genres from "../../components/genreContainer/Genres";

const GenrePage = () => {
    return (
        <div>
        <div>
            <Headergenre/>
            <Genres/>
        </div>
        </div>
    );
};

export default GenrePage;
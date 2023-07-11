import React, {useEffect, useState} from "react";

const App = () => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try{
            const response = await fetch(API_URL, {
                headers: {
                    'Acept' : 'application/json'
                }
            }).then(data => data.json());
            setPosts(response);
            setLoading(false);
        }catch (error) {
            console.error("Error: ", error);
        }
    }

    return(
        <div>
            <h1>Benvenuti in react 18 e symfony 6...</h1>
            {loading && <h2>Charging DATA API: {API_URL}...</h2>}
            {!loading && <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>}
        </div>
    );
};

export default App;
import { useState } from 'react';
import './AddLinks.css'

function AddLinks(props) {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [id] = useState('');
    const [isPending, setIsPending] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const playList = { title, url, id };

        console.log(playList);
        
        setIsPending(true);

        fetch("http://localhost:3003/playData", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(playList)
        }).then(() => {
            alert('new playList added');
            setIsPending(false);
            window.location.reload();
        })
    }
 
    return (
        <div>
        <form method="Post" onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Title' value= { title } onChange={(e) => setTitle(e.target.value)} required/>
                <input type='url' placeholder='Enter URL' value= { url } onChange={(e) => setUrl(e.target.value)} required />
                {!isPending && <button className='formBtn' type='submit'>Load</button>}
                {isPending && <button className='formBtn' type='submit' disabled>Adding Playlist...</button>}
        </form>
        </div>
    );

}

    

export default AddLinks;
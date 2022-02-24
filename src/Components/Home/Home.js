import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import AddLinks from '../AddLinks/AddLinks';
import useFetch from './useFetch';
import ReactPlayer from 'react-player';
import './Home.css'


function Home({ heading}) {
    // const playListData = props.playListData;
    // const heading = props.heading
    const { id } = useParams();
    const { playData, isPending } = useFetch("http://localhost:3003/playData/" + id);

    const handleClick = (event) => {
        const id = event.target.value
        fetch ("http://localhost:3003/playData/" + id, {
            method: 'DELETE'
        }).then(() => {
            console.log(event.target.value);
            window.location.reload();
            alert(`playlist item ${id} was deleted`);
        })
    }

    const [playLink, setPlayLink] = useState(null);

    const handleLink = (event) => {
    event.preventDefault();
    const playLink =event.target.attributes.value.value;
    setPlayLink(playLink);
    }

    return (
        <div className='playlinks'>
        { isPending && <div>Loading...</div>}
        <fieldset>
        <legend>Video Player:</legend>
        <div className="playerView">
        <ReactPlayer 
                    playing= 'true'
                    controls='true'
                    width='100%' 
                    height= '56%'
                    className="player"
                    fileConfig={{ attributes: { style: { 
    display: 'block', 
    aspectRatio:16/9, 
  }}}}
                    url = {playLink}/>
        </div>
        </fieldset>
            <table>
                <tr>
                    <th>
                        <h2>{ heading }</h2>
                    </th>
                </tr>
                <ol>
                    {playData.map((play) =>
                <tr key={play.id}>
                    <li>
                    <a id="link" href='/home' target="_self" rel="noopener noreferrer" onClick={handleLink} value={play.url}> {play.title} </a>
                    </li>
                    <td>
                        <button className='delBtn' onClick={handleClick} value={play.id}>DELETE</button>
                    </td>
                </tr>
                    )}
                </ol>
            </table>
            <AddLinks />
        </div>
    );
}

export default Home;
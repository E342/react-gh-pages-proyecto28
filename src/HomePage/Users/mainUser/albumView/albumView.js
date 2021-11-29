import './albumView.css';
import AlbumCard from './AlbumCards/albumCard';

const AlbumView=()=>{
    return(
        <div className="view-container">
            <h1>Álbumes</h1>
            <div className="cards-container">
                <AlbumCard/>
            </div>
        </div>
    )

}
export default AlbumView;
import {useCallback, useEffect, useState} from "react";
import {query} from "express";

const PostureCorrectionVideo = ({youtube}) => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectedVideo = (video) => {
      setSelectedVideo(video);
    }

    const search = useCallback(
        (query) => {
            setSelectedVideo(null);
            youtube
                .search(query)
                .then((videos)=>setVideos(videos));
        },[youtube],
    );
    useEffect(() => {
        youtube
            .mostPopular()
            .then((videos)=>setVideos(videos));
    }, [youtube]);

    return (
        <div>
            
        </div>
    )
}

export default PostureCorrectionVideo
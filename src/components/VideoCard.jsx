import {useNavigate} from "react-router-dom";
function VideoCard({video}){
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`/watch/${video.id}`)}
        className="bg-gray-800">
            <div className="w-full aspect-video bg-gray-800">
                <img src={video.thumbnail}
                alt={video.title}
                className="w-full object-cover"
                />
            <div className="p-3">
            <h3 className="font-semibold text-sm line-clamp-2">
                {video.title}
            </h3>
            <p className="text-gray-400 text-xs mt-1">
                {video.channel}
            </p>
            </div>
            </div>
        </div>
    );
}
export default VideoCard;
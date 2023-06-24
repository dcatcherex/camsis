import Videolist from "../assets/data/camsis_videolist.json"

const videoset = () => {
  return (
    <div>
        {Videolist.map((id,title,image,url) => (
            <div key={id} className="max-w-[300px] m-4">
                <img src="" alt="" />
                <p>{title}</p>

            </div>
        ))}

    </div>
  )
}

export default videoset
import BBBPath from "../../assets/bbb.png";
import GitPath from "../../assets/git.png";
import BirdPath from "../../assets/bird.png";

const Card = ({ data }) => {
  const imagePath = [BBBPath, BirdPath, GitPath];
  console.log(imagePath[data.index]);
  return (
    <div className="mt-5 flex h-full w-1/4 flex-col rounded-md bg-white shadow-md hover:shadow-xl">
      <div className="relative h-4/6 w-full ">
        <img
          src={imagePath[data.index]}
          alt="BBB robot"
          draggable={false}
          className=" absolute top-1/2 left-1/2 h-5/6 w-11/12 -translate-x-1/2 -translate-y-1/2  object-contain"
        />
      </div>
      <div className="h-2/6 w-full border-t-[0.5px]   border-gray-400  text-center">
        <h1 className="my-4 text-sm font-medium text-zinc-900">{data.Name}</h1>
        <p className="text-xs font-normal text-zinc-900">{data.Text}</p>
      </div>
    </div>
  );
};

export default Card;
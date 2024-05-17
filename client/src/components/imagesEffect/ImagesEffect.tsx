import { DirectionAwareHover } from "../../AceternityUI/ui/DirectionAwareHover";
import imgs from "../../assets/imgs .jpg"
const ImagesEffect = () => {
  const imageUrl =imgs ;
  return (
    <div className="h-[27rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">About US</p>
        <p className="font-normal text-sm">Walnut</p>
      </DirectionAwareHover>
    </div>
  );
};

export default ImagesEffect;

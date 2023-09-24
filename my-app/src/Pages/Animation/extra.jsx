import bit from "./bitmoji.png";
import BoxAnimated from "./box";

const Extra = () => {
  return (
    <div className="extra-wrp">
      <div className="extra">
        <div className="thought">
          <BoxAnimated />
        </div>

        <figure>
          <img src={bit} alt="bitmoji" />
        </figure>
      </div>
    </div>
  );
};

export default Extra;

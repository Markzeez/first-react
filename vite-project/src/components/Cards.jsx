
import PropTypes from "prop-types"
const Cards = ({ name, position, company, description, image,age,disable, }) => {
  return (
    
    < div className="rounded-md bg-white-600 flex flex-col space-x-1 gap-5 p-10 text-lg shadow-xl m-50 h-80 p-3 ">
      <p>{description}</p>
      <div className="flex gap-5 m-10 h-10 pl-2 pr-2">
        <img className="w-10 rounded-full object-fill h-10 " src={image} alt="" />
        <div>
          <p>{name}</p>
          <p>{position} @ {company}</p>
          <p>{age}</p>
          <p>{disable}</p>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes ={
  name:PropTypes.string,
  position:PropTypes.string,
  age:PropTypes.number,
  disable:PropTypes.bool,
  image: PropTypes.string,
  description:PropTypes.string,
  company:PropTypes.string
}
export default Cards;

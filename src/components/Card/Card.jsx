import '../../styles/card.css';

const Card = ({image, text}) => {
  return (
    <div className='card'>
      <div className='image'>
        <img src={image} />
      </div>
      <div className='text'> {text}</div>
    </div>
  );
};

export default Card;

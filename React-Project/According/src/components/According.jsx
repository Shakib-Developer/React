import AccordingItems from './AccordingItems';

const According = ({data}) => {
    
    return (
        <div className='according'>
            {data.map((el, i) => (
                <AccordingItems title={el.title} text={el.text} num={i} key={el.id}/>
            ))} 
        </div>
    );
};

export default According;
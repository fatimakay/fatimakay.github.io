import './AnimatedWord.scss'

const AnimatedWord = ( {letterClass, strArray}) => {
    return (  
        <span>
          {  
            strArray.map((String) => (
                <span key={String} className={`${letterClass}`}>
                    {String}
                </span>
          ))
          }
         </span>
          
    )
};
 
export default AnimatedWord;
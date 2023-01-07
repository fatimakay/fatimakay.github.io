import './AnimatedWord.scss'

const AnimatedWord = ( {letterClass, strArray}) => {
    return (  
        //function to put animations on individual words
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
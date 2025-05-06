import { useEffect, useState } from "react";
import { Container, Background, CloseButton} from "./styles";
import { getMovieVideos } from "../../services/getData";


function Modal({ movieId, setShowModal }) {

  const [movie, setMovie] = useState()

  useEffect(() => {

    async function getMovies() {
      
      setMovie (await getMovieVideos(movieId))

      
    }
    getMovies()
  }, [])

  return (
  <>
    
      {movie && (

        <Background onClick={() => setShowModal(false)}>
    <Container>
    <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
      <iframe 
      src={`https://www.youtube.com/embed/${movie[0].key}`} 
      title='youtube video play'
      height="500px"
      width="100%"
      frameBorder="0" 
      allowFullScreen> 

      </iframe>
      
    </Container>
    </Background>
    )}
    </>
  )
}

export default Modal;

import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, Info } from './styles';
import { FiCornerUpLeft } from 'react-icons/fi';
import api from '../../services/api';

interface TitleParams {
  mal_id: string;
};

interface AnimeInfo {
  url: string;
  image_url: string;
  trailer_url: string;
  title: string;
  episodes: number;
  aired: {
    from: string;
  }
  score: number;
  synopsis: string;
}

const About: React.FC = () => {
  const [anime, setAnime] = useState<AnimeInfo | null>(null);
  const { params } = useRouteMatch<TitleParams>();

  useEffect(() => {
    api.get(`/anime/${params.mal_id}`).then(response => {
    setAnime(response.data);
    });
  }, [params.mal_id]);


  return (
    <>
      <Header>
        <Link to="/">
          <FiCornerUpLeft size={20} /> Voltar
        </Link>
      </Header>
      {anime && (
        <Info>
        <header>
          <div id="imagem">
            <img src={anime.image_url} alt={anime.title} />
          </div>
          <div id="titulo">
            <a href={anime.url}>
              <h1>{anime.title}</h1>
            </a>
            <p>{anime.synopsis}</p>
          </div>
        </header>
          <ul>
            <li>
              <span>Lançamento</span>
              <strong>{anime.aired.from.substr(0, 4)}</strong>
            </li>
            <li>
              <span>Episódios</span>
              <strong>{anime.episodes}</strong>
            </li>
            <li>
              <span>Avaliação</span>
              <strong>{anime.score}</strong>
            </li>
          </ul>
      </Info>
      )}

    </>
  )
};

export default About;

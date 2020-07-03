import React, { useState, FormEvent, useEffect } from 'react';
import { FiCornerDownRight } from 'react-icons/fi';
import api from '../../services/api';
import { Title, Form, Animes, Error } from './styles';
import { Link }from 'react-router-dom';

interface Anime {
  results: any;
  mal_id: string;
  image_url: string;
  title: string;
  score: number;
}

const Dashboard: React.FC = () => {

  const [novaBusca, setNovaBusca] = useState('');
  const [inputError, setInputError] = useState('');
  const [busca, setBusca] = useState<Anime[]>(() => {
    const storageAnimes = localStorage.getItem('@CatalogoAnime:animes');

    if (storageAnimes) {
      return JSON.parse(storageAnimes);
    } else {
      return [];
    }
  });

  // useEffect(() => {
  //   const animes = localStorage.getItem('@CatalogoAnime:animes');
  //   if (animes) {
  //     setBusca(JSON.parse(animes));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('@CatalogoAnime:animes', JSON.stringify(busca));
  }, [busca])

  async function handleAddHistorico(e:FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if(!novaBusca) {
      setInputError('Digite um anime')
      return;
    }

      /*try {
        const response = await api.get<Anime>(`/search/anime?q=${novaBusca}&page=1`);
        const resultado = response.data.results;
        setBusca(resultado);
        setNovaBusca('');
        setInputError('');
      } catch(err) {
          setInputError('Erro na busca por este anime');
        }*/

    const response = await api.get<Anime>(`/search/anime?q=${novaBusca}&page=1`);
    const resultado = response.data.results;
    if (Array.isArray(resultado) && resultado.length) {
      //setBusca([...busca,resultado]);
      setBusca(resultado);
      setNovaBusca('');
      setInputError('');
    } else {
      setInputError('Erro ao buscar esse anime');
    }
  }

  return (
  <>
    <Title>Catálogo de animes</Title>

    <Form hasError={!!inputError} onSubmit={handleAddHistorico}>
      <input value={novaBusca} onChange={e => setNovaBusca(e.target.value)} placeholder="Pesquise por um anime" />
      <button type="submit">Buscar</button>
    </Form>

  {inputError && <Error>{inputError}</Error>}

    <Animes>
        {busca.map((anime => (
          <Link key={anime.mal_id} to={`/about/${anime.mal_id}`}>
            <div id="imagem">
              <img src={anime.image_url} alt={anime.title} />
            </div>

            <div id="titulo">
              <strong>{anime.title}</strong>
                <p>{`Avaliação: ${anime.score}`}</p>
            </div>
            <FiCornerDownRight size={20} />
        </Link>
      ))).slice(0,5)}
    </Animes>
  </>
  )
}

export default Dashboard;

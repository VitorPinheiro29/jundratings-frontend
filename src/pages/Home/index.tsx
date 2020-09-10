import React from 'react';

import './styles.css';

import bannerImage from '../../assets/banner.png';
import choose from '../../assets/choose.svg';
import tiradentes from '../../assets/tiradentes.jpg';
import timmy from '../../assets/timmy.png';
import monica from '../../assets/monica.png';
import padreRolim from '../../assets/padre-rolim.jpg';
import domJoao from '../../assets/dom-joao.jpg';
import stars from '../../assets/stars.png';
import oneStar from '../../assets/1estrela.png';
import twoStar from '../../assets/2estrela.png';
import threeStar from '../../assets/3estrela.png';
import fourStar from '../../assets/4estrela.png';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';

const Home = () => {
  function handleDisplayDetails() {
    var displayBlock = (document!.getElementById('non-display')!.style.display =
      'none');

    if (displayBlock) {
      displayBlock = document!.getElementById('non-display')!.style.display =
        'block';
    }

    if (!displayBlock) {
      displayBlock = document!.getElementById('non-display')!.style.display =
        'none ';
    }
  }

  return (
    <div id="page-container">
      <div>
        <NavBar />
      </div>
      <div className="banner">
        <img src={bannerImage} alt="banner" className="banner-size" />
      </div>
      <section className="description-site">
        <div className="phrases">
          <div className="phrase-one">
            <h2>Nossa missão é ajudar</h2>
          </div>
          <div className="phrase-two">
            <h2>na sua decisão</h2>
          </div>
        </div>
        <div className="description-illustration">
          <img
            src={choose}
            alt="Pessoa tomando uma decisão"
            className="choose-size"
          />
        </div>
      </section>
      <section className="professionals-content">
        <h1 className="title-content">Confira nossos profissionais</h1>
        <div className="professional-container">
          <header>
            <img src={tiradentes} alt="Tiradentes" />
            <div>
              <strong>Tiradentes</strong>
              <span>Dentista</span>
            </div>
          </header>
          <p>A revolução que sua boca precisava.</p>
          <div className="details-container" onClick={handleDisplayDetails}>
            <h1 className="see-details"> Ver detalhes </h1>
            <div id="non-display">
              <div className="adress">
                <h1 className="adress-title">Endereço: </h1>
                <span> Rua da Incofidência, 245, Uberlândia - MG</span>
              </div>
              <div className="rating-title">
                <h1>Timmy Turner possui</h1>
                <span>28 avaliações</span>
              </div>
              <div className="rating-container">
                <div className="rating-star">
                  <img src={oneStar} alt="1 estrela" className="star-size1" />
                  <span>2 avaliações</span>
                </div>
                <div className="rating-star">
                  <img src={twoStar} alt="2 estrelas" className="star-size2" />
                  <span>5 avaliações</span>
                </div>
                <div className="rating-star">
                  <img
                    src={threeStar}
                    alt="3 estrelas"
                    className="star-size3"
                  />
                  <span>3 avaliações</span>
                </div>
                <div className="rating-star">
                  <img src={fourStar} alt="4 estrelas" className="star-size4" />
                  <span>6 avaliações</span>
                </div>
                <div className="rating-star">
                  <img src={stars} alt="5 estrelas" className="star-size5" />
                  <span>12 avaliações</span>
                </div>
              </div>

              <div className="opinions-container">
                <h1 className="title-opinions">Opiniões sobre Timmy Turner</h1>
                <div className="opinion-card">
                  <div className="details-user">
                    <img src={domJoao} alt="Usuário sla" />
                    <strong>D. João VI</strong>
                  </div>
                  <p>
                    O dentista Tiradentes é muito bom em seu ofício, contudo é
                    mal humorado e revoltoso. Dependendo do dia, sua raiva é
                    tanta que dá vontade de matá-lo.
                  </p>
                </div>
                <div className="opinion-card">
                  <div className="details-user">
                    <img src={padreRolim} alt="Usuário sla" />
                    <strong>Padre Rolim</strong>
                  </div>
                  <p>
                    Tiradentes é um parceiro para todas as horas. Seu trabalho é
                    maravilhoso e seu talento grandioso, recomendo demais
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <p>
              Preço - 1° consulta
              <strong>R$ 120,00</strong>
            </p>
            <a target="_blank" href="www.uol.com.br">
              <img src={whatsappIcon} alt="Ícone do whatsapp" />
              Entrar em contato
            </a>
          </footer>
        </div>

        <div className="professional-container">
          <header>
            <img src={timmy} alt="Tiradentes" />
            <div>
              <strong>Timmy Turner</strong>
              <span>Dentista</span>
            </div>
            <div className="rating-container">
              <strong>Classificação:</strong>
              <img src={stars} alt="Tiradentes" />
            </div>
          </header>
          <p>Seus dentes verão a mágica acontecer.</p>
          <div className="details-container" onClick={handleDisplayDetails}>
            <h1 className="see-details"> Ver detalhes </h1>
            <div id="non-display">
              <div className="adress">
                <h1 className="adress-title">Endereço: </h1>
                <span> Rua da Incofidência, 245, Uberlândia - MG</span>
              </div>
              <div className="rating-title">
                <h1>Timmy Turner possui</h1>
                <span>28 avaliações</span>
              </div>
              <div className="rating-container">
                <div className="rating-star">
                  <img src={oneStar} alt="1 estrela" className="star-size1" />
                  <span>2 avaliações</span>
                </div>
                <div className="rating-star">
                  <img src={twoStar} alt="2 estrelas" className="star-size2" />
                  <span>5 avaliações</span>
                </div>
                <div className="rating-star">
                  <img
                    src={threeStar}
                    alt="3 estrelas"
                    className="star-size3"
                  />
                  <span>3 avaliações</span>
                </div>
                <div className="rating-star">
                  <img src={fourStar} alt="4 estrelas" className="star-size4" />
                  <span>6 avaliações</span>
                </div>
                <div className="rating-star">
                  <img src={stars} alt="5 estrelas" className="star-size5" />
                  <span>12 avaliações</span>
                </div>
              </div>

              <div className="opinions-container">
                <h1 className="title-opinions">Opiniões sobre Timmy Turner</h1>
                <div className="opinion-card">
                  <div className="details-user">
                    <img src={domJoao} alt="Usuário sla" />
                    <strong>D. João VI</strong>
                  </div>
                  <p>
                    O dentista Tiradentes é muito bom em seu ofício, contudo é
                    mal humorado e revoltoso. Dependendo do dia, sua raiva é
                    tanta que dá vontade de matá-lo.
                  </p>
                </div>
                <div className="opinion-card">
                  <div className="details-user">
                    <img src={padreRolim} alt="Usuário sla" />
                    <strong>Padre Rolim</strong>
                  </div>
                  <p>
                    Tiradentes é um parceiro para todas as horas. Seu trabalho é
                    maravilhoso e seu talento grandioso, recomendo demais
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <p>
              Preço - 1° consulta
              <strong>R$ 120,00</strong>
            </p>
            <a target="_blank" href="www.uol.com.br">
              <img src={whatsappIcon} alt="Ícone do whatsapp" />
              Entrar em contato
            </a>
          </footer>
        </div>

        <div className="professional-container">
          <header>
            <img src={monica} alt="Tiradentes" />
            <div>
              <strong>Mônica</strong>
              <span>Dentista</span>
            </div>
          </header>
          <p>Seus dentes mais fortes que nunca!</p>
          <div className="details-container" onClick={handleDisplayDetails}>
            <h1 className="see-details"> Ver detalhes </h1>
            <div id="non-display">
              <div className="adress">
                <h1 className="adress-title">Endereço: </h1>
                <span> Rua da Incofidência, 245, Uberlândia - MG</span>
              </div>
              <div className="rating-title">
                <h1>Timmy Turner possui</h1>
                <span>28 avaliações</span>
              </div>
              <div className="rating-container">
                <div className="rating-star">
                  <img src={oneStar} alt="1 estrela" className="star-size1" />
                  <span>2 avaliações</span>
                </div>
                <div className="rating-star">
                  <img src={twoStar} alt="2 estrelas" className="star-size2" />
                  <span>5 avaliações</span>
                </div>
                <div className="rating-star">
                  <img
                    src={threeStar}
                    alt="3 estrelas"
                    className="star-size3"
                  />
                  <span>3 avaliações</span>
                </div>
                <div className="rating-star">
                  <img src={fourStar} alt="4 estrelas" className="star-size4" />
                  <span>6 avaliações</span>
                </div>
                <div className="rating-star">
                  <img src={stars} alt="5 estrelas" className="star-size5" />
                  <span>12 avaliações</span>
                </div>
              </div>

              <div className="opinions-container">
                <h1 className="title-opinions">Opiniões sobre Timmy Turner</h1>
                <div className="opinion-card">
                  <div className="details-user">
                    <img src={domJoao} alt="Usuário sla" />
                    <strong>D. João VI</strong>
                  </div>
                  <p>
                    O dentista Tiradentes é muito bom em seu ofício, contudo é
                    mal humorado e revoltoso. Dependendo do dia, sua raiva é
                    tanta que dá vontade de matá-lo.
                  </p>
                </div>
                <div className="opinion-card">
                  <div className="details-user">
                    <img src={padreRolim} alt="Usuário sla" />
                    <strong>Padre Rolim</strong>
                  </div>
                  <p>
                    Tiradentes é um parceiro para todas as horas. Seu trabalho é
                    maravilhoso e seu talento grandioso, recomendo demais
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <p>
              Preço - 1° consulta
              <strong>R$ 120,00</strong>
            </p>
            <a target="_blank" href="www.uol.com.br">
              <img src={whatsappIcon} alt="Ícone do whatsapp" />
              Entrar em contato
            </a>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Home;

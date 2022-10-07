import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useState } from "react";
import '../../App.css';
import '../../styles/home.css';
import NavBar from '../components/NavBar';
import Earth_Background from '../../img/Earth_Background.mp4';
import ImagePreview from "./ImagePreview";


export default function HomePage({items}) {
 
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState(items);


      return (
       <>
          <div className="Home">
          <video class="Video_Background" autoPlay loop muted>
              <source src={Earth_Background} type="video/mp4"/>
          </video>
          <Home> 
          <NavBar />
        <Body>
        </Body>
        <Jumbotron>
      <h1 class="TitleHome">Hello, earthlings!</h1>
      <p class="PHome">
          Here you can find photos of the planets and galaxies!
      </p>
         <input
          class="SearchBarHome"
          id="nasaSearch"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for an image"
        ></input>
        <button
          className="button"
          disabled={search === ""}
          onClick={async () => {
            const results = await fetch(
              `https://images-api.nasa.gov/search?media_type=image&q=${search}`
            );
            const previews = await results.json();
            setPhotos(await previews.collection.items);
          }}
        >
          Search
        </button>
        <div>
          <div>
            {photos &&
              photos.map((preview) => (
                <ImagePreview
                  key={preview.data[0].title}
                  nasaPicture={preview.links[0].href}
                  title={preview.data[0].title}
                  description={preview.data[0].description}
                />
              ))
              }
          </div>
        </div>
</Jumbotron>
          </Home>
          </div>
          </>
          
     
        );
    }

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
`;
const Body = styled.div`
 margin-top: 50px;
 margin-right:100px;
`;


const Jumbotron = styled.div`
margin-top:2%;
`;

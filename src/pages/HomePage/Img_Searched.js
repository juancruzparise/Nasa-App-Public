import React from 'react';
import '../../App.css';
import '../../styles/home.css';
import styled from 'styled-components';

export default function Img_Searched({photo}) {

    return (
        <>
        <PictureNASA>
             <div>
      <div className="Imagecontainer">
          <>
            <Image width={960} priority height={540} src={photo} />
          </>

      </div>
      <div className="Imagecontainer">
          <a className="homeButton">
            <button className="button">Go home</button>
          </a>
      </div>
    </div>
        </PictureNASA>
        </>
    );

};
export async function getStaticProps({ params }) {
  const nasa_id = params.id;
  const results = await fetch(`https://images-api.nasa.gov/asset/${nasa_id}`);
  const previews = await results.json();
  const photo = await previews.collection.items[0].href;
  return {
    props: { photo },
  };
}

export async function getStaticPaths() {
  const results = await fetch(
    "https://images-api.nasa.gov/search?media_type=image"
  );
  const previews = await results.json();
  const items = await previews.collection.items;

  return {
    paths:
      items?.map((nasa) => ({
        params: {
          id: nasa.data[0].nasa_id,
        },
      })) || [],
    fallback: true,
  };
}


const PictureNASA = styled.div`
`;  
const Image = styled.img`
`;  

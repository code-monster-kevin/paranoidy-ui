import React from 'react';
import CardDeck from '../common/Cards/CardDeck';
import CardGroup from '../common/Cards/CardGroup';
import SimpleCard from '../common/Cards/SimpleCard';
import LogoImage from '../../assets/logo/Paranoidy_Logo_512.png';

function homecontent() {
  return (
    <div className="container">
      <CardDeck>
        <SimpleCard
          image={LogoImage}
          imgAlt="Paranoidy Logo"
          title="Card Title 1"
          subtitle="Card Subtitle 1"
          description="This is a card description item"
          link="/"
          button="Read More"
        />
        <SimpleCard
          image={LogoImage}
          imgAlt="Paranoidy Logo"
          title="Card Title 2"
          subtitle="Card Subtitle 2"
          description="This is a card description item"
          link="/"
          button="Read More"
        />
        <SimpleCard
          image={LogoImage}
          imgAlt="Paranoidy Logo"
          title="Card Title 3"
          subtitle="Card Subtitle 3"
          description="This is a card description item"
          link="/"
          button="Read More"
        />
        <SimpleCard
          image={LogoImage}
          imgAlt="Paranoidy Logo"
          title="Card Title 4"
          subtitle="Card Subtitle 4"
          description="This is a card description item"
          link="/"
          button="Read More"
        />
      </CardDeck>
      <CardGroup>
        <SimpleCard
          image={LogoImage}
          imgAlt="Paranoidy Logo"
          title="Card Title 1"
          subtitle="Card Subtitle 1"
          description="This is a card description item"
          link="/"
          button="Read More"
        />
        <SimpleCard
          image={LogoImage}
          imgAlt="Paranoidy Logo"
          title="Card Title 2"
          subtitle="Card Subtitle 2"
          description="This is a card description item"
          link="/"
          button="Read More"
        />
        <SimpleCard
          image={LogoImage}
          imgAlt="Paranoidy Logo"
          title="Card Title 3"
          subtitle="Card Subtitle 3"
          description="This is a card description item"
          link="/"
          button="Read More"
        />
        <SimpleCard
          image={LogoImage}
          imgAlt="Paranoidy Logo"
          title="Card Title 4"
          subtitle="Card Subtitle 4"
          description="This is a card description item"
          link="/"
          button="Read More"
        />
      </CardGroup>
    </div>
  );
}

export default homecontent;

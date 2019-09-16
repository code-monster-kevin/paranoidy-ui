import React from 'react';
import CardDeck from '../common/Cards/CardDeck';
import SimpleCard from '../common/Cards/SimpleCard';
import WebDevCardImage from '../../assets/img/web_dev_card1.jpg';
import MobDevCardImage from '../../assets/img/mob_dev_card1.jpg';
import ApiDevCardImage from '../../assets/img/api_dev_card1.jpg';
import DbDevCardImage from '../../assets/img/db_dev_card1.jpg';
import SoftwareDesignCardImage from '../../assets/img/software_design_card1.jpg';
import ProgLangDevCardImage from '../../assets/img/proglang_dev_card1.jpg';

function homecontent() {
  return (
    <div className="container">
      <CardDeck>
        <SimpleCard
          image={WebDevCardImage}
          imgAlt="web development"
          title="web development"
          subtitle="topics on web development"
          description="lessons include html, css, js, reactjs, angular, responsive design"
          link="/"
          button="read more"
        />
        <SimpleCard
          image={MobDevCardImage}
          imgAlt="mobile development"
          title="mobile development"
          subtitle="topics on creating mobile applications"
          description="lessons include android development, ios development, responsive design"
          link="/"
          button="read more"
        />
        <SimpleCard
          image={ApiDevCardImage}
          imgAlt="API development"
          title="API development"
          subtitle="topics on developing api services"
          description="lessons include Restful API, GraphQl, swagger"
          link="/"
          button="read more"
        />
      </CardDeck>
      <CardDeck>
        <SimpleCard
          image={DbDevCardImage}
          imgAlt="database development"
          title="database"
          subtitle="topics related to database systems"
          description="lessons include MSSQL, MongoDB, CosmosDB"
          link="/"
          button="read more"
        />
        <SimpleCard
          image={SoftwareDesignCardImage}
          imgAlt="software design"
          title="software design"
          subtitle="topics on creating mobile applications"
          description="lessons include OO design principles, SOLID, enterprise design patterns"
          link="/"
          button="read more"
        />
        <SimpleCard
          image={ProgLangDevCardImage}
          imgAlt="programming languages"
          title="programming languages"
          subtitle="topics on programming languages"
          description="lessons include C#, java, python, ruby"
          link="/"
          button="read more"
        />
      </CardDeck>
    </div>
  );
}

export default homecontent;

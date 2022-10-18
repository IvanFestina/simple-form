import React from 'react';

import styled from 'styled-components';

import Logo from './common/Logo';

const GreetingsBlock = styled.div``;

const GreetingsTitle = styled.h1`
  font-family: 'SF UI Display', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #353238;
`;

const GreetingsText = styled.p`
  max-width: 940px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #353238;
`;
const Link = styled.a`
  color: #0086a8;
  text-decoration: none;
`;
const Margin = styled.div`
  margin-bottom: 40px;
`;

const Greetings = () => {
  return (
    <GreetingsBlock>
      <Margin>
        <Logo width="475" height="71" />
      </Margin>
      <Margin>
        <GreetingsTitle>Оставьте заявку и станьте частью нашей команды</GreetingsTitle>{' '}
      </Margin>
      <GreetingsText>
        Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных
        дизайнеров, архитекторов и декораторов, дизайн-бюро и интерьерные студии — все,
        кто дизайн интерьера сделали своим призванием. Партнерство мы видим как
        доверительные отношения, основанные на честности реализации бизнес идей в сфере
        создания и продаж современной, качественной, удобной, функциональной и
        эксклюзивной <Link href="#">портфолио</Link> . Ознакомиться с проектами можете в
        нашем портфолио. Если Вы оформляете интерьеры жилых или коммерческих помещений —
        мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим
        3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему
        проекту или изображениям.
      </GreetingsText>
    </GreetingsBlock>
  );
};

export default Greetings;

/* Vector */

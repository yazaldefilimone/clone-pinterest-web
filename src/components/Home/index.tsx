import React, { ReactNode } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { GridColumns } from '../GridColumns';
import { Container, SubContainer } from './styles';

import m1 from '../../assets/img/m2.jpg';
import m2 from '../../assets/img/m2.jpg';
import m3 from '../../assets/img/m3.jpg';
import m4 from '../../assets/img/m4.jpg';
import m5 from '../../assets/img/m5.jpg';
import m6 from '../../assets/img/m6.jpg';
import m7 from '../../assets/img/m7.jpg';

interface HomeProps {
  children?: ReactNode;
  initializeValue: number;
  classe?: boolean;
}
interface TypePropsSetup {
  initalScreen: number;
  times: number;
  exitdelay: number;
}

export function Home({ initializeValue, classe }: HomeProps) {
  const refGrids = React.useRef();
  const refColumns = React.useRef();

  const enterScreen = (index: number, TagsGrid: Element[], heads: Element[]) => {
    const grid = TagsGrid[index];
    const heading = heads[index];

    const gridColumns = grid.querySelectorAll('.Column');

    grid.classList.add('active');
    heading.classList.remove('animate-before', 'animate-after');

    gridColumns.forEach((element) => {
      element.classList.remove('animate-before', 'animate-after');
    });
  };

  const exitScreen = (index: number, TagsGrid: Element[], heads: Element[], exitdelay: number) => {
    const grid = TagsGrid[index];
    const heading = heads[index];

    const gridColumns = grid.querySelectorAll('.Column');

    gridColumns.forEach((element) => {
      element.classList.add('animate-after');
    });
    heading.classList.add('animate-after');
    console.log(heading);
    setTimeout(() => {
      grid.classList.remove('active');
    }, exitdelay);
  };

  const SetupAnimate = ({ times, exitdelay }: TypePropsSetup) => {
    const cicleTime = times + exitdelay;
    const grids: any = document.querySelectorAll('.grid');
    const heads: any = document.querySelectorAll('.heading');
    let init = 0;

    const nextCicle = () => {
      const initialize = init;
      enterScreen(initialize, grids, heads);
      setTimeout(() => exitScreen(initialize, grids, heads, exitdelay), times);
      init = init >= grids.length - 1 ? 0 : init + 1;
    };
    nextCicle();
    setInterval(nextCicle, cicleTime);
  };
  React.useEffect(() => {
    const propsSetup = {
      initalScreen: 0,
      times: 2000,
      exitdelay: 200 * 7,
    };
    SetupAnimate(propsSetup);
    // (heads);
  });

  const { titles } = useTitle();

  const elementsComponent = [
    [
      [m1, m2, m3, m4, m5],
      [m5, m1, m4, m2, m3],
      [m3, m7, m2, m5, m6],
      [m7, m6, m5, m4, m1],
      [m1, m4, m6, m2, m3],
      [m5, m7, m3, m1, m2],
      [m3, m6, m2, m7, m1],
    ],
    [
      [m5, m7, m3, m1, m7],
      [m1, m7, m3, m4, m5],
      [m6, m7, m7, m5, m6],
      [m7, m3, m5, m4, m1],
      [m1, m4, m3, m7, m3],
      [m5, m1, m4, m7, m3],
      [m3, m3, m7, m7, m1],
    ],
    [
      [m3, m7, m3, m1, m3],
      [m1, m3, m3, m4, m3],
      [m3, m1, m4, m3, m3],
      [m3, m6, m3, m7, m1],
      [m3, m7, m3, m3, m6],
      [m7, m6, m3, m4, m1],
      [m1, m4, m6, m3, m3],
    ],
    [
      [m5, m1, m4, m2, m3],
      [m1, m2, m3, m4, m5],
      [m3, m5, m2, m3, m1],
      [m5, m1, m5, m4, m1],
      [m1, m4, m1, m2, m3],
      [m5, m5, m3, m1, m2],
      [m3, m1, m2, m5, m1],
    ],
  ];

  return (
    <>
      <Container className={classe}>
        {titles.map((value, index) => {
          return (
            <SubContainer className="grid" ref={refGrids}>
              <GridColumns ref={refColumns} elementsComponent={elementsComponent[index]} />
            </SubContainer>
          );
        })}
      </Container>
    </>
  );
}

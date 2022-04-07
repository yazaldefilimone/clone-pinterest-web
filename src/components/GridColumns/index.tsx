import React, { Fragment, ReactNode } from 'react';
import { Column, Element } from './styles';

interface GridColumnsProps {
  children?: ReactNode;
  elementsComponent: Array<Array<string>>;
}

export const GridColumns: any = ({ elementsComponent }: GridColumnsProps) => {
  return (
    <Fragment>
      {elementsComponent.map((value, index) => {
        return (
          <Column key={index} className="Column animate-before">
            {value.map((value, index) => {
              return <Element key={index} bg={value}></Element>;
            })}
          </Column>
        );
      })}
    </Fragment>
  );
};

import React, { ReactNode } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../scss/stuff-card.scss';
import { CardActionArea } from '@material-ui/core';

interface StuffCardProps {
  children: ReactNode;
  onClick?: () => void;
}

const StuffCard: React.FC<StuffCardProps> = ({ children, onClick }) => {
  return (
    <Card className='stuff-card'>
      <CardActionArea onClick={onClick}>
        <CardContent>{children}</CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StuffCard;

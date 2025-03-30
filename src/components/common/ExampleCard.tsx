import React, { FC, ReactNode } from 'react';

interface ExampleCardProps {
  title: string;
  variant: 'good' | 'bad';
  description: string;
  children: ReactNode;
}

export const ExampleCard: FC<ExampleCardProps> = ({ title, variant, description, children }: ExampleCardProps) => (
  <div className={`${variant}-example example-card`}>
    <div className="header">
      <h3>{variant === 'bad' ? '⚠️' : '✅'} {title}</h3>
      <small className={variant === 'bad' ? 'warning' : ''}>{description}</small>
    </div>
    {children}
  </div>
);

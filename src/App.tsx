import React from 'react';

import { HashRouter } from 'react-router-dom';

import s from './App.module.scss';
import { SNACK_BAR_TYPES, SnackBar } from './common/SnackBar/SnackBar';
import { Header } from './components/header/Header';
import { RoutesApp } from './components/routes/RoutesApp';
import { useAppSelector } from './utils/hooks';

export const App = () => {
  const appMessage = useAppSelector(state => state.products.appMessage);

  return (
    <div className={s.appBlock}>
      <HashRouter>
        <Header />
        <div className={s.content}>
          <RoutesApp />
        </div>
      </HashRouter>
      {appMessage && <SnackBar message={appMessage} type={SNACK_BAR_TYPES.SUCCESS} />}
    </div>
  );
};

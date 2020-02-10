import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

// routes
import LayoutRoute from '../Layout/LayoutRoute';
import GrowDots from '../../GrowDots/GrowDots'
import FadeIn from "../../FadeIn/FadeIn";
import ImageReveal from "../../ImageReveal/ImageReveal";
import Parent from "../../ParentChild/Parent";
import LandingPage from "../../LandingPage/LandingPage";
import SimpleCss from "../../BasicParalax/SimpleCss";
import BasicStore from "../../BasicStore/BasicStore";
import VanLife from "../../VanLife/VanLife";
import CarouselSlider from "../../CarouselSlider/CarouselSlider";
import Speedometer from "../../Speedometer";
import TicTacToe from "../../TicTacToe/TicTacToe";
import Home from "../../Home/Home";


const Routes = () => {
  return (
      <BrowserRouter>
    <Switch>
      <LayoutRoute
        exact={true}
        path="/grow-dots"
        component={GrowDots}
      />

      <LayoutRoute
        exact={true}
        path="/tictactoe"
        component={TicTacToe}
      />

      <LayoutRoute
        exact={true}
        path="/carousel-slider"
        component={CarouselSlider}
      />

      <LayoutRoute
        exact={true}
        path="/speedometer"
        component={Speedometer}
      />

      <LayoutRoute
        exact={true}
        path="/van-life"
        component={VanLife}
      />

      <LayoutRoute
        exact={true}
        path="/basic-store"
        component={BasicStore}
      />

      <LayoutRoute
        exact={true}
        path="/simple-css"
        component={SimpleCss}
      />

      <LayoutRoute
        path="/fade-in"
        component={FadeIn}
      /> 
      <LayoutRoute
        path="/parent-child"
        component={Parent}
      /> 
      <LayoutRoute
        path="/image-reveal"
        component={ImageReveal}
      /> 
      <LayoutRoute
        path="/landing-page"
        component={LandingPage}
      /> 

      <LayoutRoute component={Home} />
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;

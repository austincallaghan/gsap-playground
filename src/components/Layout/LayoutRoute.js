import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { Drawer } from '../shared';
// import { Footer } from './Footer';
// import MyOffers from './MobileMenu/MyOffers';
// import Stepper from './Steps';
// import { Header } from './Header';
// import SavedCars from './MobileMenu/SavedCars';
// import MobileMenu from './MobileMenu/MobileMenu';
// import { IRootState } from '../store';

import NavCombo from '../NavCombo/NavCombo'

export class LayoutRoute extends Component {
  render() {
    const {
    //   screenWidth,
      path,
      exact,
      component : Comp,
    } = this.props;

    return (
      <>
        {/* <Header
          toggleMobileMenu={() =>
            this.toggleVisibility('mobileMenuVisibility', true)
          }
        /> */}
        {/* <Drawer visible={mobileMenuVisibility} placement={'right'}>
          <MobileMenu toggleVisibility={this.toggleVisibility} />
        </Drawer> */}
     <NavCombo />

        <Route path={path} exact={exact} component={Comp} />
        {/* <Footer /> */}
      </>
    );
  }
}

// const mapStateToProps = (state: IRootState) => ({
//   screenWidth: state.screen.screenWidth,
// });

// export default connect(mapStateToProps)(LayoutRoute);

export default LayoutRoute
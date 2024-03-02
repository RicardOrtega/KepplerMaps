// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React from 'react';
import {connect} from 'react-redux';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import styled from 'styled-components';
import KeplerGl from '@kepler.gl/components';
import Map from '../src/Map/Map'


 // eslint-disable-line

const StyledWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;



const App = () => (
  <StyledWrapper>
    <Map/>
  </StyledWrapper>
);

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, dispatchToProps)(App);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import * as DotActions from '../../actions/dot';
import Dot from '../../components/dot';

class App extends Component {
  render() {
    const { store, history, dot, dotActions } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route path='/' render={() =>
            <Dot actions={dotActions} state={dot}/>
          }/>
        </ConnectedRouter>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  dot: state.dot
});

const mapDispatchToProps = dispatch => ({
  dotActions: bindActionCreators(DotActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

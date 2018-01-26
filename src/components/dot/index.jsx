import React from 'react';
import PropTypes from 'prop-types';

const Dot = props =>
  <div>
    <div>
      dots: {props.state.dots}
    </div>
    <button onClick={props.actions.addDot}>Add dots</button>
  </div>

Dot.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
}

export default Dot;

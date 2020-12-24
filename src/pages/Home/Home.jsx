import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../store/common/actions';

export const Home = () => (
  <div>HOME</div>
);

Home.propTypes = {

};
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  _getUser: (open) => dispatch(getUser(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { connect } from 'react-redux'
import {fetchUser } from '../action/action'
import App from '../component/App';

const mapStateToProps = state => {
    return {
        countryNames: state.reducer.users.map((country) => country.name),
        error: state.reducer.error,
        loading: state.reducer.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (region) => dispatch(fetchUser(region)),
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(App)

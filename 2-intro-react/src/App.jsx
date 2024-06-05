import PropTypes from 'prop-types'
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';
import { CounterIncrement } from './components/CounterIncrement';
import { useState } from "react"

export const App = ({user, title}) => {

    const [counter, setCounter] = useState(0);

    const counterIncrement = () =>{
        setCounter(counter + 1);
    }

    return( 
        <>
            <Title title={title}/>
            <UserDetails user={user}/>
            <CounterIncrement onClick={counterIncrement} counter={counter}/>
        </>
    );
}
App.propTypes = {
    title: PropTypes.string.isRequired
}

App.defaultProps = {
    title: 'Bienvenido!'
}
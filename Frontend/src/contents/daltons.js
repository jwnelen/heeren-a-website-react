import React, { Component } from 'react';
import DaltonsList from '../components/daltonsList/daltonsList'
import DaltonEditor from '../components/daltonEditor/daltonEditor'

class Daltons extends Component {
    render() {
        return (
						<div>
							<h1>Daltons</h1>
							<DaltonEditor></DaltonEditor>
							<DaltonsList></DaltonsList>
						</div>
            )
        }
    }
    
export default Daltons
    
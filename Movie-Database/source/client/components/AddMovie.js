import React, { Component } from 'react';

import Helpers from '../utilities/Helpers'

export default class AddMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            genres: [],
            genresValidationSate: '',
            nameValidationState: '',
            posterValidationState: '',
            helpBlock: ''
        }
    }

    render() {
        return (
            <div>
                Add Movie Form
            </div>
        )
    }
}
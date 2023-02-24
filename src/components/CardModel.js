import {Component} from 'react';

class CardModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remember: false
        };
    }

    render() {
        return (
                <div className={'card'}>
                    <p className={'cardtext'}>1234 4567 8123 3221</p>
                    <p className={'cardtext'}>Name:    Albedo</p>
                    <p className={'cardtext'}>Surname: Orlando</p>
                </div>
        )
    }
}

export default CardModel

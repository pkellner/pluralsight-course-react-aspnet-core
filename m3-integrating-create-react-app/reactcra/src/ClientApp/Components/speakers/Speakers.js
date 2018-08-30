import React, {Component} from 'react';
import SpeakersHeader from './SpeakersHeader';
import SpeakerList from './SpeakerList';
import axios from 'axios';



class Speakers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            appData: [
                {
                    id:101,
                    firstName: "Marc",
                    lastName: "Andreesen",
                    imageUrl: "assets/images/speakers/speaker1.png"
                },
                {
                    id:102,
                    firstName:"Llewellyn",
                    lastName:"Falco",
                    imageUrl:"assets/images/speakers/speaker2.png"
                },
                {
                    id:103,
                    firstName:"Stefania",
                    lastName:"Kaczmarczyk",
                    imageUrl:"assets/images/speakers/speaker3.png"
                },
                {
                    id:104,
                    firstName:"Diane",
                    lastName:"Green",
                    imageUrl:"assets/images/speakers/speaker0.png"
                }
            ]
        };
    }

    componentDidMount() {

        const url = '/data/speakers.json';
        //const url = '/api/speaker';

        console.log('Speakers:cdm');
        axios.get(url)
            .then((result)=> {
                console.log('api/speaker then called');
                this.setState({
                    appData: result.data,
                    isLoading: false
                });
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.responderEnd);
                }
            });
    }


    render() {
        if (this.state.isLoading){
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <div>
                <SpeakersHeader/>
                <SpeakerList speakers={this.state.appData}/>
                {/*<ShowJsonSpeakers/>*/}
            </div>
        );
    }
}

//Speakers.propTypes = {};
Speakers.defaultProps = {};

export default Speakers;



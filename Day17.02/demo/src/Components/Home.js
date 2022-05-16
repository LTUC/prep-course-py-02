import Pets from './Pets';

const petsData = require('../data/data.json');

export default function Home() {
    return <>
        
        <Pets data={petsData} />

    </>;
}

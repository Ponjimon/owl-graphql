import fetch from '../../utils/fetch';

const ranks = async () => {
    const res = await fetch('https://api.overwatchleague.com/standings').then(
        r => r.json()
    );

    const values = res && res.ranks ? res.ranks : [];

    return values;
};

export default ranks;

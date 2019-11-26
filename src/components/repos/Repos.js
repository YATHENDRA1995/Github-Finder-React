import React from 'react';
import propTypes from 'prop-types';
import ReposItem from './ReposItem';

const Repos = ({repos}) => {
    return repos.map( repo => <ReposItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
    repos: propTypes.array.isRequired
}

export default Repos;

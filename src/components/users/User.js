import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {

    const githubContext = useContext(GithubContext);

    const {user, loading, getUser, getUserRepos, repos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        company,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;


    if (loading) return <Spinner />

    return (
        <Fragment>
            <Link to="/" className="btn btn-light">
                Back to Search
                </Link>
            Hireable:
                {hireable === null ? <i className="fa fa-times text-danger"></i> :
                <i className="fa fa-check text-success" />}
            <div className="card grid-2">
                <div className="all-center">
                    <img
                        src={avatar_url}
                        style={{ width: '150px' }}
                        className="round-img"
                        alt=""
                    />
                    <h1>{name}</h1>
                    <p>Location : {location}</p>
                </div>
                <div>
                    {(
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio === null ? 'No Bio' : bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">
                        Visit Github Profile
                        </a>
                    <ul>
                        <li>
                            {
                                <Fragment>
                                    <strong>Username: </strong>{login}
                                </Fragment>
                            }
                        </li>
                        <li>
                            {
                                <Fragment>
                                    <strong>Company: </strong>{company}
                                </Fragment>
                            }
                        </li>
                        <li>
                            {
                                <Fragment>
                                    <strong>Website: </strong>{blog}
                                </Fragment>
                            }
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Gists: {public_gists}</div>
                <div className="badge badge-dark">Public Repos: {public_repos}</div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    );

}

export default User;
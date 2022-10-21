export const getGithubProfile = async() => {
    const user_endpoint = 'https://api.github.com/users/enzocazenave';
    const followers_endpoint = 'https://api.github.com/users/enzocazenave/followers';
    const following_endpoint = 'https://api.github.com/users/enzocazenave/following';

    const { avatar_url, login, public_repos } = await fetch(user_endpoint).then(res => res.json()).catch(error => console.error(error));
    const followers = await fetch(followers_endpoint).then(res => res.json()).catch(error => console.error(error));
    const following = await fetch(following_endpoint).then(res => res.json()).catch(error => console.error(error));

    return {
        avatar_url,
        username: login,
        repositories: public_repos,
        followers: followers.length,
        following: following.length
    }
}
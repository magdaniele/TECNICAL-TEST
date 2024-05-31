import { Octokit } from 'octokit';
import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
const { GITHUB_ACCESS_TOKEN, URL, USER } = process.env;
const loadingAnimation = (
  text = '',
  chars = ['⠙', '⠘', '⠰', '⠴', '⠤', '⠦', '⠆', '⠃', '⠋', '⠉'],
  delay = 100
) => {
  let index = 0;
  return setInterval(() => {
    process.stdout.write(`${chars[index++]} ${text} \r`);
    index %= chars.length;
  }, delay);
};

(async () => {
  console.time();
  const loader = loadingAnimation('Loading…');
  let repositories = [];
  let dataIsEmpty = true;
  let page = 0;
  while (dataIsEmpty) {
    page += 1;
    const octokit = new Octokit({
      auth: GITHUB_ACCESS_TOKEN,
    });
    const request = await octokit.request(
      `GET ${URL}/${USER}/repos?page=${page}&per_page=100`,
      {
        headers: {
          org: USER,
          'X-GitHub-Api-Version': '2022-11-28',
          accept: 'application/vnd.github+json',
        },
      }
    );
    const filteredData = request.data.map((repository) => ({
      id: repository.id,
      name: repository.name,
      description: repository.description,
      url: repository.clone_url,
      homepage: repository.homepage,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      issues: repository.open_issues_count,
      language: repository.language,
      creation_date: repository.created_at,
      last_modification: repository.updated_at,
    }));
    if (request.data.length === 0) dataIsEmpty = false;
    repositories = [...repositories, ...filteredData];
  }
  clearInterval(loader);
  console.timeEnd();
  const best10repositories = repositories.sort((a, b) => b.stars - a.stars);
  best10repositories.length = 10;
  console.log({ best10repositories });
})();

import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepoItem";

import "../styles/repositories.scss";
//import GithubIcon from "../assets/githubIcon.jpg";

import { IRepository } from "../../types";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <>
      <header>
        {/* <img src={GithubIcon} alt="Logo Github" /> */}
        Github Explorer
      </header>
      <section className="repository-list">
        <h1>Lista de repositórios</h1>

        <ul>
          {repositories.map((repository, index) => (
            <RepositoryItem
              key={repository.id}
              repository={repository}
              style={{ "--order": index }}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

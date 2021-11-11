import { useState } from "react";
import { Counter } from "./Counter";
import { RepoItem } from "./RepoItem";

export function RepoList() {
  const repository2 = {
    name: "uniform2",
    description: "Forms in React",
    link: "https://github.com/unform/unform",
  };
  const [repository, setRepository] = useState({
    name: "uniform2",
    description: "Forms in React",
    link: "https://github.com/unform/unform",
  });

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepoItem repository={repository} />
        <RepoItem repository={repository} />
        <RepoItem repository={repository} />
      </ul>

      <Counter />
    </section>
  );
}

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
  };
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>
        {repository?.name ?? "repositório"} 🌟 {repository?.stargazers_count}
      </strong>
      <p>{repository?.description}</p>

      <a href={repository?.html_url}>Acessar repositório</a>
    </li>
  );
}

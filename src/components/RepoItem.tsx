interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
  };
  style: {
    "--order": number;
  };
}

export function RepositoryItem({ repository, style }: RepositoryItemProps) {
  return (
    <li style={style as any}>
      <strong>
        {repository?.name ?? "repositório"} 🌟 {repository?.stargazers_count}
      </strong>
      <p>{repository?.description}</p>

      <a href={repository?.html_url}>Acessar repositório</a>
    </li>
  );
}

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository?.name ?? "repositório"}</strong>
      <p>{repository?.description}</p>

      <a href={repository?.html_url}>Acessar repositório</a>
    </li>
  );
}

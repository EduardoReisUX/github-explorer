export function RepoItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "repositório"}</strong>
      <p>{repository?.description}</p>
      <a href={repository?.html_url}>Acessar repositório</a>
    </li>
  );
}

export function RepoItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "repositório"}</strong>
      <p>{repository?.description}</p>

      <a href={repository?.link}>Acessar repositório</a>
    </li>
  );
}

import { render, screen } from "@testing-library/react";
import { RepositoryList } from "../components/RepositoryList";

describe("RepositoryList component", () => {
  it("should render a title", async () => {
    await render(<RepositoryList />);

    const title = screen.getByText(/Lista de repositórios/);
    expect(title).toBeInTheDocument();
  });
});

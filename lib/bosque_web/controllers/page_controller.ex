defmodule BosqueWeb.PageController do
  use BosqueWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end

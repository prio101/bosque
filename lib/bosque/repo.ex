defmodule Bosque.Repo do
  use Ecto.Repo,
    otp_app: :bosque,
    adapter: Ecto.Adapters.Postgres
end

defmodule Bosque.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Bosque.Repo,
      # Start the Telemetry supervisor
      BosqueWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Bosque.PubSub},
      # Start the Endpoint (http/https)
      BosqueWeb.Endpoint
      # Start a worker by calling: Bosque.Worker.start_link(arg)
      # {Bosque.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Bosque.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    BosqueWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end

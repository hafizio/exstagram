use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :exstagram, Exstagram.Web.Endpoint,
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: [node: ["node_modules/webpack/bin/webpack.js", "--watch-stdin", "--progress", "--color",
    cd: Path.expand("../assets", __DIR__)]]

# Watch static and templates for browser reloading.
config :exstagram, Exstagram.Web.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$},
      ~r{priv/gettext/.*(po)$},
      ~r{lib/exstagram/web/views/.*(ex)$},
      ~r{lib/exstagram/web/templates/.*(eex|slim|slime)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :exstagram, Exstagram.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "exstagram_dev",
  # NANOBOX DB
  username: System.get_env("DATA_DB_USER"),
  password: System.get_env("DATA_DB_PASS"),
  hostname: System.get_env("DATA_DB_HOST"),
  #
  # REGULAR DEV DB
  # username: "postgres",
  # password: "postgres",
  # hostname: "localhost",
  pool_size: 10

defmodule Exstagram.Web.PageController do
  use Exstagram.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end

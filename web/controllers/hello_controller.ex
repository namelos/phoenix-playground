defmodule Namelos.HelloController do
  use Namelos.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
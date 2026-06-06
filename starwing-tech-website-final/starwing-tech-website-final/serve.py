"""Run the Starwing static website with Python's standard library."""

from __future__ import annotations

import argparse
import functools
import threading
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Serve the Starwing website locally.")
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind to.")
    parser.add_argument("--port", type=int, default=8000, help="Port to listen on.")
    parser.add_argument(
        "--open",
        action="store_true",
        dest="open_browser",
        help="Open the website in the default browser.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    handler = functools.partial(SimpleHTTPRequestHandler, directory=PROJECT_ROOT)
    server = ThreadingHTTPServer((args.host, args.port), handler)
    display_host = "localhost" if args.host in {"127.0.0.1", "0.0.0.0"} else args.host
    url = f"http://{display_host}:{server.server_port}/"

    print(f"Starwing website is running at {url}")
    print("Press Ctrl+C to stop the server.")

    if args.open_browser:
        threading.Timer(0.4, webbrowser.open, args=(url,)).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
